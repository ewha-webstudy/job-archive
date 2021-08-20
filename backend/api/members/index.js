"use strict";
const express = require("express");
const path = require('path');
const membersCtrl = require("./members.ctrl");
const router = express.Router();
const {verifyToken} = require("./authorization");

//API 정의서
router.post('/login', membersCtrl.createToken);
router.post('/signup', membersCtrl.signup);

router.get('/mypage/like', verifyToken, membersCtrl.like);
router.delete('/mypage/like', verifyToken, membersCtrl.unlike);
router.patch("/mypage/profile", verifyToken, membersCtrl.editProfile); 
//router.post("/mypage/notification", membersCtrl.notifyDday); 

module.exports = router;

/**
 * @swagger
 *
 * /api/login:
 *  post:
 *    tags:
 *    - Login page
 *    description: 로그인 페이지 (토큰 이용)
 *    parameters:
 *    - in: "body"
 *      name: "로그인"
 *      required: true
 *      schema:
 *        $ref: "#/components/schemas/LoginInfo"
 *      style: simple
 *    responses:
 *      201:
 *        description: 로그인 성공
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/LoginResult'
 *      400:
 *        description: 아이디가 존재하지 않을 때
 * 
 *      407:
 *        description: 비밀번호를 틀렸을 때 
 * 
 * /api/signup:
 *  post:
 *    tags:
 *    - Signup page
 *    description: 회원가입 페이지
 *    parameters:
 *    - in: "body"
 *      name: "회원가입"
 *      required: true
 *      schema:
 *        $ref: "#/components/schemas/signupInfo"
 *      style: simple
 *    responses:
 *      201:
 *        description: 회원가입 성공
 * 
 *      400:
 *        description: id를 입력하지 않았을 때
 * 
 *      407:
 *        description: 비밀번호 확인이 일치하지 않을 때
 * 
 * /api/mypage/like:
 *  get:
 *    tags:
 *    - Mypage - Like
 *    description: 좋아요 설정 (like 테이블에 userid와 wantedAuthNo 추가)
 *    parameters:
 *    - in: "body"
 *      name: "좋아요 설정"
 *      required: true
 *      schema:
 *        $ref: "#/components/schemas/Like"
 *      style: simple
 *    responses:
 *      200:
 *        description: 좋아요 설정 성공
 * 
 *      400:
 *        description: wantedAuthNo가 입력되지 않았을 때
 * 
 *      401:
 *        description: 로그인 문제(token expired)
 * 
 *      404:
 *        description: 처리 중 에러 (예. like 테이블에 이미 있는 공고번호를 추가하려고 할 때)
 * 
 
 *  delete:
 *    tags:
 *    - Mypage - Unlike
 *    description: 좋아요 해제 (like 테이블에서 해당되는 userid, wantedAuthNo 행 삭제)
 *    parameters:
 *    - in: "body"
 *      name: "좋아요 해제"
 *      required: true
 *      schema:
 *        $ref: "#/components/schemas/Like"
 *      style: simple
 *    responses:
 *      200:
 *        description: 좋아요 해제 성공
 * 
 *      400:
 *        description: wantedAuthNo가 입력되지 않았을 때
 * 
 *      401:
 *        description: 로그인 문제 (token expired)
 * 
 *      404:
 *        description: 처리 중 에러 (예. like 테이블에 존재하지 않는 공고번호를 제거하려고 할 때)
 * 
 * /api/mypage/profile:
 *    patch:
 *     tags:
 *     - Mypage - profile
 *     description: 프로필 관리
 *     parameters:
 *     - in: "body"
 *       name: "프로필관리"
 *       required: true
 *       schema:
 *         $ref: "#/components/schemas/profileInfo"
 *       style: simple
 *     responses:
 *       201:
 *         description: 프로필 저장 성공
 * 
 *       401:
 *         description: 로그인 문제(token expired)
 * 
 *       407:
 *          description: 비밀번호확인이 일치하지 않을 때
 
 * /api/mypage/notification:
 *  post:
 *    tags:
 *    - Mypage - notification
 *    description: 디데이 알림 설정 (아직 구현 X)
 *    parameters:
 *    - in: "body"
 *      name: "디데이 알림"
 *      required: true
 *      schema:
 *        $ref: "#/components/schemas/Dday"
 *      style: simple
 *    responses:
 *      200:
 *        description: 디데이알림 설정 성공
 */