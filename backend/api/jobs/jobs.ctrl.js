const Job = require('../../models/job');
const Member = require('../../models/member');

// *card 목록: jobDetail의 기업명, 기업로고, 디데이, 모집기간, 직무, 좋아요 수, 유저 좋아요 여부, id(pk, 자세히보기에서 연결되는 라우터 주소)

/* GET / */
exports.main = async(req, res) => {
  // main 페이지 (card 9개 최신 공고 (jobBasic 테이블에서 regDt순))
  // res.data: card 목록
  console.log("this is main")
  res.send([
    {
      id: 1,
      title: "1번 공고",
      category: "프론트엔드"
    },
    {
      id: 2,
      title: "2번 공고",
      category: "백엔드"
    },
    {
      id: 3,
      title: "3번 공고",
      category: "데이터"
    },
  ]);
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
    // const detail = await Job.findone({ id: +id })
    if (!id) return res.status(404).send();
    
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
    // const jobs = await Job.find({ $category: category }) 
    // 마감일이 지난 공고는 보여줄지 말지?
  } catch(e) {
    console.error(e);
    res.status(500).send();
  }
  res.send({ category: category })
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

