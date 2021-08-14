"use strict";
const db = require("../../models/db");

//membership db 사용하여 login 
class Login{
    constructor(body){
        this.body = body;
    }
    /* 입력된 id에 맞는 membership 테이블 가져오기 */
    getMemberInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT userid, password FROM membership WHERE userid=?;";
            db.query(query, [id], (err, data) => {
                if (err) reject(`${err}`); //에러
                resolve(data[0]); //성공
            });
        });
    }
    /* 로그인 */
    async login(){
        const client = this.body;
        try{
            const { userid, password } = await this.getMemberInfo( client.id );
            const id = await this.getMemberInfo(client.id);
            const psword = await this.getMemberInfo(client.id);
            //에러 처리
            if(userid) { 
                if(userid === client.id && password === client.psword){
                    return {success: true}
                }
                return {success: false, msg:"비밀번호가 틀렸습니다."};
            }
        } catch(err) {
            return { success:false, msg: "존재하지 않는 아이디입니다."};
        }
    }
}

module.exports = Login;