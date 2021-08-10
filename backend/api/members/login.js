"use strict";
const db = require("../../src/config/db");

//user db 사용하여 login 
class Login{
    constructor(body){
        this.body = body;
    }
    /* 입력된 id에 맞는 user 테이블 가져오는 함수 */
    getMemberInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id=?;";
            db.query(query, [id], (err, data) => {
                if (err) reject(`${err}`); //에러
                resolve(data[0]); //성공
            });
        });
    }

    /* 로그인 함수 */
    async login(){
        const client = this.body;
        try{
            const { id, psword } = await this.getMemberInfo(client.id);
            //에러 처리
            if(id) { 
                if(id === client.id && psword === client.psword){
                    return {success: true}
                }
                return {success: false, msg:"비밀번호가 틀렸습니다."};
            }
            return { success:false, msg: "존재하지 않는 아이디입니다."};
        } catch(err) {
            return { success: false, msg: err };
        }
    }
}

module.exports = Login;