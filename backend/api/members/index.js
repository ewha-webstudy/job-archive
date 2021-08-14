"use strict";
const express = require("express");
const path = require('path');
const membersCtrl = require("./members.ctrl");

const router = express.Router();

//show
router.get("/", membersCtrl.show.home);
router.get("/login", membersCtrl.show.login);
router.get("/signup", membersCtrl.show.signup);

//process
router.post("/login", membersCtrl.process.login); 
router.post("/signup", membersCtrl.process.signup); 

//router.patch("/mypage/notification"); //디데이 알림
//router.patch("/mypage/profile"); //프로필 관리
//router.patch("/mypage/bookmark/list"); //저장 목록

module.exports = router;