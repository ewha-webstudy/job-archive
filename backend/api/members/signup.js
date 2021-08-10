"use strict";
const db = require("../../src/config/db");

//user db 사용하여 signup
class Signup{
    constructor(body){
        this.body = body;
    }
    /* 입력된 정보를 user 테이블에 저장하는 함수 */
    async save(memberInfo) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users(id, name, psword, email, age, phoneno) VALUES(?, ?, ?, ?, ?, ?);";
            db.query(query, [memberInfo.id, memberInfo.name, memberInfo.psword, memberInfo.email, memberInfo.age, memberInfo.phoneno], (err) => {
                if (err) reject(`${err}`); //에러
                resolve({ success: true }); //성공
            });
        });
    }
    /* 회원가입 함수 */
    async signup() {
        const client = this.body;
        try{
            const response = await this.save(client);
            return response;
        }catch (err){
            console.error(err);
        }
    }
}

module.exports = Signup;