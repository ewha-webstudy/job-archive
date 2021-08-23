"use strict";

require("dotenv").config();
const { Membership } = require('../../models'); 
const { Like } = require('../../models'); 
const { Job } = require('../../models');


/* GET /api/mypage/like */
exports.getLikelist = async (req, res) => {
    //마이페이지 - 저장목록에서 로그인한 유저의 좋아요 리스트 보여주기
    const loggedID = res.locals.userid;
    const likeListNo = [];
    console.log("this is getLikelist");

    try{
        await Like.findAndCountAll(
            { where: {userid: loggedID}, attributes: ['wantedAuthNo'] }
        ).then((result) => {
            for(var i=0; i<result.count; i++){
                likeListNo.push((result.rows[i].wantedAuthNo));
            }
            return res.status(200).json({likeListNo});
        }).catch((err) => {
            return res.status(404).send(); //404: db처리 중 오류
        });   
    } catch (e) {
        console.error(e);
        res.status(500).send(); //500
    }
};


/* PATCH /api/mypage/profile */
exports.editProfile = async (req, res) => {
    //마이페이지 - 프로필 관리에서 로그인한 유저 정보의 수정사항 저장
    const client = req.body;
    const loggedID = res.locals.userid;
    console.log("this is editProfile");

    if(client.psword !== client.confirmPsword) //412: 비밀번호 확인 실패
        return res.status(412).send(); 
    try {
        await Membership.update(   
            {realname: client.name, 
                email: client.email,
                born: client.born,
                password: client.psword
            },
            {where: {userid: loggedID} 
        })
        .then((result) => {
            res.status(201).send({ result });
        })
        .catch((err) => {
            console.log("editProfile Error: ", err);
        });
    }catch (e) {
        console.error(e);
        res.status(500).send(); //500
    } 
};

/* POST /api/mypage/notification */
exports.notifyDday = async (req, res) => {
    //마이페이지- 디데이알림
};