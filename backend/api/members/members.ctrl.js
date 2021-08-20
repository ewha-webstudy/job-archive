"use strict";

require("dotenv").config();
const { Membership } = require('../../models'); 
const { Like } = require('../../models'); 
const {UniqueConstraintError} = require('sequelize');

const Member = require("../../models/membership");

const jwt = require("jsonwebtoken");
const YOUR_SECRET_KEY = process.env.SECRET_KEY;


/* POST /api/login */
exports.createToken = async (req, res) => {
const ID = req.body.id;
const PW = req.body.psword

console.log("this is createToken");
try {
    await Membership.findOne({ where: {userid: ID}
    })
    .then((result) => {
        if(result){
           if(PW === result.password){
            const token = jwt.sign({    //토큰
                userid: result.userid
                }, YOUR_SECRET_KEY, {
                    expiresIn: '30m'     //유효시간
                });
    
                res.cookie('user', token);
                res.status(201).json({
                result: 'ok',
                token
                });
                console.log({ id: result.userid, token: token});
            }
            return res.status(407).send(); //407: 비밀번호 불일치
        }
        return res.status(400).json({ error: 'invalid user' }); //400: 미등록 id
    })
    } catch (e) {
        console.error(e);
        res.status(500).send(); //500
    }
};
 
/* POST /api/signup */
exports.signup = async (req, res) => {
    const client = req.body;

    console.log("this is signup");
    if (!client.id) //400: id 미입력
        return res.status(400).send(); 
    if(client.psword !== client.confirmPsword) //407: 비밀번호 확인 실패
        return res.status(407).send(); 
    
    try {
        await Membership.create({ 
            realname: client.name,
            userid: client.id,  
            email: client.email,  
            born: client.born,
            password: client.psword,    
        })
        .then((result) => {
            res.status(201).send({ message: 'Signup Success', client });
        })
        .catch((err) => {
            console.log("Signup Error: ", err);
        });
    }catch (e) {
        console.error(e);
        res.status(500).send(); //500
    } 
}; 

/* GET /api//mypage/like */
exports.like = async (req, res) => {

    const loggedID = res.locals.userid;
    const jobID = req.body.jobid;

    console.log("this is like");
    console.log({ loggedID: loggedID }); 
    console.log({ wantedAuthNo: jobID });

    if (!jobID) //400: jobid 미입력
        return res.status(400).send();
  
    try {
        await Like.create({
            userid: loggedID,
            wantedAuthNo: jobID,
        })
        .then((result) => {
            if(result){
                res.status(200).send({ message: 'Like Success', result });
            }
        })
        .catch((err) => {
            console.log("Like Error: ", err);
            res.status(404).send(); //404
        });
        /* 
        .catch((err) => {
            /*if(err instanceof UniqueConstraintError){
                console.log("이미 좋아요한 공고");
                res.status(408).send(); //408: 이미 좋아요한 공고 --> unlike 함수 사용
            }
            else
                console.log("Like Error: ", err);
                res.status(408).send();
        }); */
    } catch (e) {
      console.error(e);
      res.status(500).send(); //500
    }
};

/* DELETE /api//mypage/like */
exports.unlike = async (req, res) => {

    const loggedID = res.locals.userid;
    const jobID = req.body.jobid;

    console.log("this is unlike");
    console.log({ loggedID: loggedID }); 
    console.log({ wantedAuthNo: jobID });
    //const client = req.body;
    //console.log(res.locals.userid);

    if (!jobID) //400: wantedAuthNo 미입력
        return res.status(400).send();
  
    try {
        await Like.destroy({ where: {userid: loggedID, wantedAuthNo: jobID }
        })
        .then((result) => {
            if(result){
                res.status(200).send({ message: 'Unlike Success', result });
            }
            res.status(404).send(); //404
        })
        .catch((err) => {
            console.log("Unlike Error: ", err);
        });
    } catch (e) {
      console.error(e);
      res.status(500).send(); //500
    }
};

/* PATCH /api/mypage/profile */
exports.editProfile = async (req, res) => {

    const client = req.body;
    const loggedID = res.locals.userid;

    console.log({ loggedID: loggedID }); 
    console.log("this is editProfile");

    if(client.psword !== client.confirmPsword) //407: 비밀번호 확인 실패
        return res.status(407).send(); 

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
            res.status(201).send({ message: 'editProfile Success', client });
        })
        .catch((err) => {
            console.log("editProfile Error: ", err);
        });
    }catch (e) {
        console.error(e);
        res.status(500).send(); //500
    } 
};

exports.notifyDday = async (req, res) => {

};
