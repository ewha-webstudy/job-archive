"use strict";
const express = require("express");
//const path = require('path');
const membersCtrl = require("./members.ctrl");

const router = express.Router();

router.get("/", membersCtrl.output.home);
router.get("/login", membersCtrl.output.login);
router.get("/signup", membersCtrl.output.signup);

router.post("/login", membersCtrl.process.login); //로그인
router.post("/signup", membersCtrl.process.signup); //회원가입

//router.patch("/mypage/notification"); //디데이 알림
//router.patch("/mypage/profile"); //프로필 관리
//router.patch("/mypage/likelist"); //저장 목록

//router.delete("/mypage"); //회원 탈퇴

module.exports = router;