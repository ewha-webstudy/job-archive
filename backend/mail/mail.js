const nodemailer = require("nodemailer");
const schedule = require('node-schedule');
const rule = new schedule.RecurrenceRule();
const moment = require('moment');

const sequelize = require("sequelize");
const { Membership } = require('../models');
const { Job } = require('../models');
const { Like } = require('../models');

async function reserveMail(){
  let likeList = []
  try{
    likeList = await Like.findAll()
    for(const like of likeList){
      const { member } = await getMember(like.userid);
      const { job } = await getJob(like.wantedAuthNo);
      if(like.alertDate !== "9999-01-01"){
        const content = toContent(member, job);
        const rule = setTime(like.alertDate);
        schedule.scheduleJob(rule, async function () {
          send(content)
        });
      }
    }
  } catch(e){
    console.error(e);
  }
}

reserveMail()

const email = {
  "service": "gmail",
  "host": "smtp.gmail.com",
  "port": 587,
  "secure": false,
  "auth":{
    "user": "kng06325@ewhain.net",
    "pass": "",
  }
}

function toContent(member, job){
  var content = {
    from: "kng06325@ewhain.net",
    to: `${member.email}`,
    subject: `${member.realname}님, ${job.company}의 채용공고가 ${member.alert}일 후에 마감됩니다!`,
    html: `
    <h2>${member.realname}님, ${job.company}의 채용공고가 ${member.alert}일 후에 마감됩니다!</h2>
    <p style = "font-size:1.3em;"><strong>${job.wantedTitle}</strong></p>
    <p style = "font-size:1.1em;">${job.jobCont}</p>
    `
  }
  return content
}

const send = async (data) => {
  nodemailer.createTransport(email).sendMail(data, function(error, info){
    if(error){
      console.log(error);
    } else{
      console.log(info);
      return info.response;
    }
  });
};

const getMember = async(id) => {
  const member = await Membership.findOne({ where: { userid: id } })
  return { member }
}

const getJob = async(id) => {
  const job = await Job.findOne({ where: { wantedAuthNo: id } })
  return { job }
}

function setTime(time){
  rule.tz = "Asia/Seoul";
  rule.year = moment(time).year();
  rule.month = moment(time).month();
  rule.date = moment(time).date();
  rule.hour = 09;
  rule.minute = 00;
  rule.second = 00;

  return rule;
}
