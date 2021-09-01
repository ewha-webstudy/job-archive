"use strict";

require("dotenv").config();
const { Membership } = require('../../models'); 
const Member = require("../../models/membership");
const jwt = require("jsonwebtoken");
const YOUR_SECRET_KEY = process.env.SECRET_KEY;
const crypto = require('crypto');


/* POST /api/member/auth */
exports.authMember = async (req, res) => {
    //로그인
    const clientID = req.body.id; //프론트에서 입력된 id
    const clientPW = req.body.psword; //프론트에서 입력된 pw
    console.log("this is member/auth");

    try {
        const clientInfo = await Membership.findOne( //db에 저장된 유저 정보
            { where: {userid: clientID} });
        
        if(clientInfo){
            const savedPW = clientInfo.password; //db에 저장된 pw (암호화 되어있음)
            const hashedPW = await HashPW(clientID, clientPW); //clientPW를 해싱한 pw 

            if(hashedPW){
                if(hashedPW === savedPW){
                    const token = jwt.sign({    //토큰 발급
                        userid: clientID
                        }, YOUR_SECRET_KEY, {
                            expiresIn: '30m'     //유효시간
                        });
                    res.cookie('user', token);
                    console.log(token);

                    return res.status(201).json({ token });
                }
                return res.status(412).json({ error: 'invalid password' }); //412: 비밀번호 불일치
            }
            return res.status(408).json({ error: 'invalid password' }); //408: HashPW 함수 관련 오류
        }
        return res.status(400).json({ error: 'invalid user' }); //400: 미등록 id

        } catch (e) {
            console.error(e);
            res.status(500).send(); //500
        }
};
 
const HashPW = (realID, realPW) =>
//로그인 시 - clientID와 clientPW 받아서 암호화
    new Promise(async (resolve, reject) => {
        //db에서 저장된 salt 값 가져옴
        const salt = await Membership.findOne(
            { where: {userid: realID} }
        )
        .then((result) =>
                result.salt
        );

    crypto.pbkdf2(realPW, salt, 9999, 64, 'sha512', (err, key) => {
        //salt를 이용하여 해싱함
        if (err){
            console.log("HashPW Error: ", err);
            reject(err);
        }
        resolve(key.toString('base64'));
    });
});



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
        const {hashedPW, salt} = await createHashedPW(client.psword); //암호화

        await Membership.create({ 
            realname: client.name,
            userid: client.id,  
            email: client.email,  
            born: client.born, 
            password: hashedPW, //암호화된 비밀번호
            salt: salt //salt
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

const createSalt = () =>
//회원가입 시 - crypto.randomBytes 사용해서 Salt 반환
    new Promise((resolve, reject) => {
        crypto.randomBytes(64, (err, buffer) => {
            if (err){
                console.log("createSalt Error: ", err);
                reject(err);
            }
            resolve(buffer.toString('base64'));
        });
    });

const createHashedPW = (realPW) =>
//회원가입 시 - clientPw를 해싱하여 psword와 Salt 반환
    new Promise(async (resolve, reject) =>{
        const salt = await createSalt();

        crypto.pbkdf2(realPW, salt, 9999, 64, 'sha512', (err,key) =>{
            if (err){
                console.log("createHashedPW Error: ", err);
                reject(err);
            }
            resolve({hashedPW: key.toString('base64'), salt});
        })
    })



/* DELETE /api/member/delete */
exports.deleteMember = async (req, res) => {
    //회원 삭제
    const loggedID = res.locals.userid;
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
