const { Job } = require('../../models');
const sequelize = require("sequelize");
const { or, and, like } = sequelize.Op;
const { Op, where } = require("sequelize")

/* GET /api/main */
exports.main = async(req, res) => {
  // main 페이지 (card 9개 최신 공고)
  // res.data: card 목록
  console.log("this is main")
  let jobList = []
  let cardList = []
  try{
    jobList = await Job.findAll({ attributes: ['wantedAuthNo'], limit: 9, order: [ ['regDt',  'DESC'] ] })
    for(const job of jobList){
      cardList.push(await toCard(job.wantedAuthNo));
    }
    res.send(cardList)
  } catch(e){
    console.error(e);
    res.status(500).send();
  }
}

/* GET /api/jobs/:id */
exports.detail = async(req, res) => {
  // 각 공고의 detail data를 받아옴
  console.log("this is detail")
  const { id } = req.params;
  if (!id) return res.status(404).send();
  try {
    const detail = await toDetail(id);
    if (!id) return res.status(404).send();
    res.send(detail);
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
};

/* POST /api/category/:category */
exports.search = async(req, res) => {
  // tag 서치, text 서치 결과
  const { category } = req.params;
  const { tags, searchBar } = req.body;
  console.log("this is category search", category)
  let jobList = []
  let cardList = []
  try{
    if(!ifTags(tags) && searchBar.length === 0){
      jobList = await Job.findAll({ attributes: ['wantedAuthNo'], order: [ ['regDt',  'DESC'] ], where: { category: category } })
    }
    if(!ifTags(tags) && searchBar.length !== 0){
      console.log("search: ", searchBar);
      jobList = await Job.findAll({ attributes: ['wantedAuthNo'], order: [ ['regDt',  'DESC'] ], 
        where: {
          [and]: [{ category: category }],
          [or]: [{ wantedTitle: {[Op.substring]: searchBar} }, { jobCont: {[Op.substring]: searchBar} }, { company: {[Op.substring]: searchBar} }]
          // 검색어 여러 개인 경우는 아직!
        }
      })
    }
    if(ifTags(tags) && searchBar.length === 0){
      const {techStack, enterTp, salary, region, edubgIcd} = tagSearch(tags)
      jobList = await Job.findAll({ attributes: ['wantedAuthNo'], order: [ ['regDt',  'DESC'] ], 
        where: {
          [and]: [{category: category}, techStack, enterTp, salary, region, edubgIcd],
        } 
      });
    }
    
    if(ifTags(tags) && searchBar.length !== 0){
      console.log("search: ", searchBar)
      const {techStack, enterTp, salary, region, edubgIcd} = tagSearch(tags)
      jobList = await Job.findAll({ attributes: ['wantedAuthNo'], order: [ ['regDt',  'DESC'] ], 
        where: { 
          [and]: [{category: category}, techStack, enterTp, salary, region, edubgIcd],
          [or]: [{ wantedTitle: {[Op.substring]: searchBar} }, { jobCont: {[Op.substring]: searchBar} }, { company: {[Op.substring]: searchBar} }]
        } 
      })
    }
    res.send(jobList);
  } catch(e) {
    console.error(e);
    res.status(500).send();
  }
}

/* POST /api/like/:id */
exports.like = async(req, res) => {
  // 공고의 좋아요 수 증가하기
  // 사용자의 계정의 like 항목에 공고를 추가함 (jobs.ctrl이 관여하는 게 맞는지 불확실)
  // 사용자 계정이 없다면(로그아웃) 버튼 표시 X? or 버튼 표시 & 로그인 유도?
  console.log("this is like")
}

/* POST /api/unlike/:id */
exports.unlike = async(req, res) => {
  // 공고의 좋아요 수 감소하기
  // 사용자의 계정의 like 항목에서 공고를 제거함
  console.log("this is unlike")
}

function ifTags(tags){
  const tagList = Object.values(tags)
  var isTag = false;
  for (const tag of tagList){
    if (tag.length > 0){
      isTag = true;
    }
  }
  return isTag;
}

const getData = async(wantedAuthNo) => {
  const job = await Job.findByPk(wantedAuthNo);
  return { job }
}

function orCondition(key, values){
function tagCondition(key, values){
  const array = [];
  if (values.length === 0 || values === null){
    return null
  }
  for(const value of values){
    array.push(`{ "${key}": "${value}" }`);
  }
  console.log(array)
  var condition = {};
  if (values.length > 0){
    condition[or] = array.map(function(value){
      const jsonValue = JSON.parse(value);
      const key = Object.keys(jsonValue)[0];
      const tag = jsonValue[key];
      const query = {[Op.substring]: tag};
      const temp = {};
      temp[key] = query;
      return temp
    })
  }
  return condition;
}

function tagSearch(tags){
  const techStack = tagCondition("techStack", tags.techStack);
  const enterTp = tagCondition("enterTp", tags.enterTp);
  const salary = tagCondition("salary", tags.salary);
  const region = tagCondition("region", tags.region);
  const edubgIcd = tagCondition("edubgIcd", tags.edubgIcd);

  return {techStack, enterTp, salary, region, edubgIcd}
}

const toCard = async(wantedAuthNo) => {
  const { job } = await getData(wantedAuthNo);
  return {
    wantedAuthNo: job.wantedAuthNo,
    wantedTitle: job.wantedTitle,
    company: job.company,
    logo: job.logo,
    receiptCloseDt: job.receiptCloseDt,
    jobCont: job.jobCont,
    likeNo: job.likeNo
  }
}

const toDetail = async(wantedAuthNo) => {
  const { job } = await getData(wantedAuthNo);
  return {
    wantedAuthNo: job.wantedAuthNo,
    wantedTitle: job.wantedTitle,
    company: job.company,
    logo: job.logo,
    reperNm: job.reperNm,
    indTpCdNm: job.indTpCdNm,
    corpAddr: job.corpAddr,
    homePg: job.homePg,
    receiptCloseDt: job.receiptCloseDt,
    jobCont: job.jobCont,
    wantedInfoUrl: job.wantedInfoUrl,
    empTpNm: job.empTpNm,
    enterTpCd: job.enterTpCd,
    minEdubgIcd: job.minEdubgIcd,
    pfCond: job.pfCond,
    salTpNm: job.salTpNm,
    sal: job.sal,
    workdayWorkhrCont: job.workdayWorkhrCont,
    likeNo: job.likeNo
  }
}
