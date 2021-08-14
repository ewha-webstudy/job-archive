const Job = require('../../models/job');
const Member = require('../../models/member');

exports.main = async(req, res) => {
  // main 페이지 (기능 미정)
  console.log("this is main")
  res.send({ test: "hi" });
}

exports.frontendList = async(req, res) => {
  // database에서 직무가 frontend인 job list를 받아옴
  console.log("this is frontendList")
  res.send("this is frontendList")
}

exports.backendList = async(req, res) => {
  // database에서 직무가 backend인 job list를 받아옴
  console.log("this is backendList")
}

exports.dataList = async(req, res) => {
  // database에서 직무가 data인 job list를 받아옴
  console.log("this is dataList")
}

exports.tagSearch = async(req, res) => {
  // 요청받은 tag들로 각 field에 대해 해당하는 job list를 받아옴 (모든 tag가 성립해야함)
  console.log("this is tagSearch")
}

exports.textSearch = async(req, res) => {
  // 요청받은 text와 일치하는 항목을 가진 job list를 받아옴 (모든 field로 해야할지 고민)
  console.log("this is textSearch")
}

exports.detail = async(req, res) => {
  // 각 공고의 detail data를 받아옴
  console.log("this is detail")
}

exports.like = async(req, res) => {
  // 사용자의 계정의 like 항목에 공고를 추가함 (jobs.ctrl이 관여하는 게 맞는지 불확실)
  // 사용자 계정이 없다면(로그아웃) 버튼 표시 X?
  console.log("this is like")
}

exports.unlike = async(req, res) => {
  // 사용자의 계정의 like 항목에서 공고를 제거함
  console.log("this is unlike")
}

