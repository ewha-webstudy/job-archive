"use strict";

require("dotenv").config();
const { Membership } = require('../../models'); 
const Member = require("../../models/membership");
const jwt = require("jsonwebtoken");
const YOUR_SECRET_KEY = process.env.SECRET_KEY;


/* POST /api/member/auth */
exports.authMember = async (req, res) => {
    //로그인
    const ID = req.body.id;
    const PW = req.body.psword
    console.log("this is member/auth");

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
                    console.log(token);
                    return res.status(201).json({ token });
                }
                return res.status(412).json({ error: 'invalid password' }); //412: 비밀번호 불일치
            }
            return res.status(400).json({ error: 'invalid user' }); //400: 미등록 id
        })
        } catch (e) {
            console.error(e);
            res.status(500).send(); //500
        }
};
 
/* POST /api/member/create */
exports.createMember = async (req, res) => {
    //회원가입
    const client = req.body;
    console.log("this is member/create");

    if (!client.id) //400: id 미입력
        return res.status(400).send(); 
    if(client.psword !== client.confirmPsword) //412: 비밀번호 확인 실패
        return res.status(412).send(); 
    
    try {
        await Membership.create({ 
            realname: client.name,
            userid: client.id,  
            email: client.email,  
            born: client.born,
            password: client.psword,    
        })
        .then((result) => {
            res.status(201).send({ result });
        })
        .catch((err) => {
            console.log("Signup Error: ", err);
        });
    }catch (e) {
        console.error(e);
        res.status(500).send(); //500
    } 
}; 

/* POST /api/member/logout */
exports.logout = async (req, res) => {
    //로그아웃
    /*
    const loggedID = res.locals.userid;
    console.log("this is member/logout");
    
    Membership.findOneAndUpdate( {userid : loggedID },
        { token : ""},
        (err) => {
            if(err) return res.json({success : false, err})
            return res.status(200).send({
                success : true
            })
        })
    */
}



/* DELETE /api/member/delete */
exports.deleteMember = async (req, res) => {
    //회원 삭제
    const loggedID = res.locals.userid;
    //console.log(res.locals.userid);
    console.log("this is member/delete");

    try {
        await Membership.destroy({ where: {userid: loggedID }
        })
        .then((result) => {
            console.log(result);
            if(result){
                res.status(200).send({ result });
            }
            res.status(404).send(); //404: 
        })
        .catch((err) => {
            console.log("Delete Member Error: ", err);
            res.status(408).send(); //408
        });
    } catch (e) {
      console.error(e);
      res.status(500).send(); //500
    }
}