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
    if (!jobList) return res.status(404).send();
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
  if (!id) return res.status(400).send();
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
  if (!category) return res.status(400).send();
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
      const searchCondition = searchbarCondition(searchBar)[and]
      jobList = await Job.findAll({ attributes: ['wantedAuthNo'], order: [ ['regDt',  'DESC'] ], 
        where: {
          [and]: [{ category: category }, searchCondition]
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
      const searchCondition = searchbarCondition(searchBar)[and]
      jobList = await Job.findAll({ attributes: ['wantedAuthNo'], order: [ ['regDt',  'DESC'] ], 
        where: { 
          [and]: [{category: category}, techStack, enterTp, salary, region, edubgIcd, searchCondition]
        } 
      })
    }
    if (!jobList) return res.status(404).send();
    for(const job of jobList){
      cardList.push(await toCard(job.wantedAuthNo));
    }
    res.send(cardList);
  } catch(e) {
    console.error(e);
    res.status(500).send();
  }
}

/* POST /api/likeIncrease */
exports.likeIncrease = async(req, res) => {
  // 공고의 좋아요 수 증가하기
  const { id } = req.body;
  if (!id) return res.status(400).send();
  console.log("this is likeIncrease");
  try{
    await Job.increment('likeNo', {by: 1, 
      where: {
        wantedAuthNo: id
      }
    })
    const job = await toCard(id)
    if (!job) return res.status(404).send();
    res.send({ message: 'like increase success', likeNo: job.likeNo });
  }catch(e){
    console.error(e);
    res.status(500).send();
  }
}

/* POST /api/likeDecrease */
exports.likeDecrease = async(req, res) => {
  // 공고의 좋아요 수 감소하기
  const { id } = req.body;
  if (!id) return res.status(400).send();
  console.log("this is likeDecrease");
  try{
    await Job.increment('likeNo', {by: -1, 
      where: {
        wantedAuthNo: id
      }
    })
    const job = await toCard(id);
    if (!job) return res.status(404).send();
    if (job.likeNo < 0){
      return res.status(404).send();
    }
    res.send({ message: 'like decrease success', likeNo: job.likeNo });
  }catch(e){
    console.error(e);
    res.status(500).send();
  }
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

function searchbarCondition(searchBar){
  const words = searchBar.split(" ");
  var condition = {};
  if(words.length > 0){
    condition[and] = words.map(function(word){
      return { [or]: [{ wantedTitle: {[Op.substring]: word} }, { jobCont: {[Op.substring]: word} }, { company: {[Op.substring]: word} }]}
    })
  }
  return condition
}

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
