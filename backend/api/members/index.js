"use strict";
const express = require("express");
const router = express.Router();
const {verifyToken} = require("./authorization");

const membersCtrl = require("./members.ctrl");
const mypageCtrl = require("./mypage.ctrl");
const likeCtrl = require("./like.ctrl");

/* API */
//member
router.post('/member/auth', membersCtrl.authMember);
router.post('/member/create', membersCtrl.createMember);
router.delete('/member/delete', verifyToken, membersCtrl.deleteMember);

//mypages
router.get("/mypage/profile", verifyToken, mypageCtrl.getProfile);
router.post("/mypage/profile", verifyToken, mypageCtrl.editProfile);
router.get("/mypage/notification", verifyToken, mypageCtrl.getDday); 
router.post("/mypage/notification", verifyToken, mypageCtrl.notifyDday); 
router.get('/mypage/like', verifyToken, mypageCtrl.getLikelist);

//like
router.post('/like', verifyToken, likeCtrl.Like); 
router.delete('/unlike/:jobid', verifyToken, likeCtrl.UnLike);


module.exports = router;

/**
 * @swagger
 *
 * /api/member/auth:
 *  post:
 *    tags:
 *    - Member Login
 *    description: 로그인 (토큰 이용) 
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
 *      412:
 *        description: 비밀번호를 틀렸을 때 
 * 
 * /api/member/create:
 *  post:
 *    tags:
 *    - Member Signup
 *    description: 회원가입
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
 *      412:
 *        description: 비밀번호 확인이 일치하지 않을 때
 * 
 * /api/member/delete:
 *  delete:
 *    tags:
 *    - Member Delete
 *    description: 유저 삭제
 *    responses:
 *      200:
 *        description: 유저 삭제 성공
 * 
 * /api/mypage/profile:
 *    post:
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
 *       412:
 *          description: 비밀번호확인이 일치하지 않을 때
 * 
 * /api/mypage/notification:
 *  post:
 *    tags:
 *    - Mypage - notification
 *    description: 디데이 알림 설정
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
 *      400:
 *        description: body를 잘못 전달했을 때
 * 
 * /api/mypage/like:
 *  get:
 *    tags:
 *    - Mypage - Like
 *    description: 마이페이지 - 저장목록 리스트 보여주기
 *    parameters:
 *    responses:
 *      200:
 *        description: 리스트 로딩 성공
 * 
 *      401:
 *        description: 로그인 문제(token expired)
 * 
 *      404:
 *        description: db 처리 중 에러 
 * 
 * 
 * /api/like:
 *  post:
 *    tags:
 *    - Like
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
 *        description: 이미 좋아요한 공고일 때 
 *      408:
 *        description: db 처리 중 오류
 * 
 
 * /api/unlike/:jobid:
 *  delete:
 *    tags:
 *    - Unlike
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
 *        description: 좋아요 되어있지 않은 공고
 * 
 *      408:
 *        description: db 처리 중 오류
 * 
 */
