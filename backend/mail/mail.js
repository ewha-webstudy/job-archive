const nodemailer = require("nodemailer");
const schedule = require('node-schedule');
const rule = new schedule.RecurrenceRule();
const moment = require('moment');

let time = '2021-08-25';

rule.tz = "Asia/Seoul";
rule.year = moment(time).year();
rule.month = moment(time).month();
rule.date = moment(time).date();
rule.hour = 18;
rule.minute = 13;
rule.second = 0;

schedule.scheduleJob(rule, async function () {
  console.log("scheduled")
});

const { Membership } = require('../models');
const { Job } = require('../models');
const { Like } = require('../models');
/**
 * 1) member별로 메일 전송
 *    like table에서 member별로 like한 job 목록 생성
 *    job의 마감일자가 9999-01-01이라면 목록에서 제거
 *    job의 마감일자에서 member가 설정한 알림 일정에 맞게 메일 스케쥴링
 * 
 * 2) job별로 메일 전송
 *    like table에서 job별로 member 목록 생성
 *    마감일자가 9999-01-01이라면 목록 제거
 *    ~
 * 
 * 3) like table에 column 추가
 *    alert 추가해서 만약 job의 마감일자가 9999-01-01이면 null
 *    그렇지 않으면 마감일자로부터 member가 설정한 alert를 계산하여 날짜 저장
 *    like table 별로 날짜에 맞춰서 member에게 메일 전송?
 *    updated at이라는 컬럼이 필요할 것 같기도 함.
 *    
 */
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

const content = {
  from: "kng06325@ewhain.net",
  to: "kng06325@ewhain.net",
  subject: "개발자의 품격",
  // text: "",
  html: "<h2>개발자의 품격 - nodemailer를 이용한 이메일 보내기 구현</h2>"
};

function toContent(member, job){
  var content = {
    from: "kng06325@ewhain.net",
    to: `${member.email}`,
    subject: `${job.company}의 채용공고가 ${member.alert}일 후에 마감됩니다!`,
    html: `<h2>${job.company}의 채용공고가 ${member.alert}일 후에 마감됩니다!</h2>`
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



// send(content);