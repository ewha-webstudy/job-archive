"use strict";
const { Membership } = require('../../models'); 
//const { Like } = require('../../models'); 
const Member = require("../../models/membership");

/* GET /api/login */
exports.login = async (req, res) => {
    console.log("this is Login");
    const client = req.body;

    if (!client.id) //400: id 미입력
        return res.status(400).send(); 
    
    try {
        await Membership.findOne({ where: {userid: client.id} 
        })
        .then((result) => {
             if(result){
                if(client.psword === result.password)
                    res.send({ message: 'Login Success'});
                return res.status(408).send(); //408: 비밀번호 불일치
            }
            return res.status(404).send(); //404: 미등록 id
        })
        .catch((err) => {
            console.log("Login Error: ", err);
        });
    } catch (e) {
      console.error(e);
      res.status(500).send(); //500
    }
};
 
/* POST /api/signup */
exports.signup = async (req, res) => {
    console.log("this is signup");
    const client = req.body;

    if (!client.id) //400: id 미입력
        return res.status(400).send(); 
    if(client.psword !== client.confirmPsword) //404: 비밀번호 확인 실패
        return res.status(404).send(); 
    
    try {
        await Membership.create({ 
        realname: client.name,
        userid: client.id,  
        email: client.email,  
        born: client.born,
        password: client.psword,    
        })
        .then((result) => {
            res.send({ message: 'Signup Success', client });
        })
        .catch((err) => {
            console.log("Signup Error: ", err);
        });
    }catch (e) {
        console.error(e);
        res.status(500).send(); //500
    } 
}; 
/*
exports.like = async (req, res) => {
    console.log("this is like");
    const client = req.body;
    //const { userid, jobid } = req.body;

    if (!client.userid || !client.jobid) //400: 미입력
        return res.status(400).send();
  
    try {
        await Like.findOne({where:{ userid: client.userid }
        })
        .then((result) => {
            if(result){
                //if (user.userLikes.includes(client.jobid)) return res.status(404).send();
                console.log();
                //user.userLikes.push(client.jobid);
                //user.save();
                res.send({ message: 'Like Success', result });
            }
            return res.status(404).send(); //404: 미등록 id
        })
        .catch((err) => {
            console.log("Like Error: ", err);
        });
    } catch (e) {
      console.error(e);
      res.status(500).send(); //500
    }
};

  
exports.unlike = async (req, res) => {
  
    const { id, client.jobId } = req.body;

  if (!id || !client.jobId) return res.status(404).send();

  try {
    const user = await User.findOne({ id });

    if (!user) return res.status(404).send();
    if (!user.userLikes.includes(client.jobId)) return res.status(404).send();

    user.userLikes.splice(user.userLikes.indexOf(client.jobId), 1);
    user.save();

    res.send({ message: 'unlike success', likes: user.userLikes });
  } catch (e) {
    console.error(e);
    res.status(500).send();
  } 
};


exports.editProfile = async (req, res) => {


};

exports.notifyDday = async (req, res) => {

};
*/