const { JobBasic } = require('../../models');
const { JobDetail } = require('../../models');
// const Member = require('../../models/member');

/* GET /api/main */
exports.main = async(req, res) => {
  // main 페이지 (card 9개 최신 공고)
  // res.data: card 목록
  console.log("this is main")
  let jobList = []
  let cardList = []
  try{
    jobList = await JobBasic.findAll({ attributes: ['wantedAuthNo'], limit: 9, order: [ ['regDt',  'DESC'] ] })
    for(const job of jobList){
      cardList.push(await toCard(job.wantedAuthNo));
    }
    res.send(cardList)
  } catch(e){
    console.error(e);
    res.status(500).send();
  }
}

/* POST /api/category/:category */
exports.category = async(req, res) => {
  const { category } = req.params;
  console.log("this is category", category)
  try{
    // const jobs = await Job.find({ $category: category }) 
    // 마감일이 지난 공고는 보여줄지 말지?
  } catch(e) {
    console.error(e);
    res.status(500).send();
  }
  res.send({ category: category })
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

/* POST /api/category/:category/search */
exports.search = async(req, res) => {
  // tag 서치, text 서치 결과
  const { category } = req.params;
  console.log("this is category search", category)
  try{
    // 마감일이 지난 공고는 보여줄지 말지?
    JobDetail.findAll({ where: { category: category } })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log("조회 Error: ", err);
    })
  } catch(e) {
    console.error(e);
    res.status(500).send();
  }
}

/* POST /api/like/:id */
exports.like = async(req, res) => {
  // 사용자의 계정의 like 항목에 공고를 추가함 (jobs.ctrl이 관여하는 게 맞는지 불확실)
  // 사용자 계정이 없다면(로그아웃) 버튼 표시 X? or 버튼 표시 & 로그인 유도?
  console.log("this is like")
}

/* POST /api/unlike/:id */
exports.unlike = async(req, res) => {
  // 사용자의 계정의 like 항목에서 공고를 제거함
  console.log("this is unlike")
}

const getData = async(wantedAuthNo) => {
  const basic = await JobBasic.findOne({ where: { wantedAuthNo: wantedAuthNo } })
  const detail = await JobDetail.findOne({ where: { wantedAuthNo: wantedAuthNo } })
  return { basic, detail }
}

const toCard = async(wantedAuthNo) => {
  const { basic, detail } = await getData(wantedAuthNo);
  const cardComponent = {
    wantedAuthNo: basic.wantedAuthNo,
    wantedTitle: detail.wantedTitle,
    company: basic.company,
    logo: detail.logo,
    receiptCloseDt: detail.receiptCloseDt,
    jobCont: detail.jobCont,
    likeNo: detail.likeNo
  }
  return cardComponent
}

const toDetail = async(wantedAuthNo) => {
  const { basic, detail } = await getData(wantedAuthNo);
  const detailComponent = {
    wantedAuthNo: basic.wantedAuthNo,
    wantedTitle: detail.wantedTitle,
    company: basic.company,
    logo: detail.logo,
    reperNm: detail.reperNm,
    indTpCdNm: detail.indTpCdNm,
    corpAddr: detail.corpAddr,
    homePg: detail.homePg,
    receiptCloseDt: detail.receiptCloseDt,
    jobCont: detail.jobCont,
    wantedInfoUrl: basic.wantedInfoUrl,
    empTpNm: detail.empTpNm,
    enterTpCd: detail.enterTpCd,
    minEdubgIcd: detail.minEdubgIcd,
    pfCond: detail.pfCond,
    salTpNm: basic.salTpNm,
    sal: basic.sal,
    workdayWorkhrCont: detail.workdayWorkhrCont,
    likeNo: detail.likeNo
  }
  return detailComponent
}
