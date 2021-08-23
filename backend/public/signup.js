"use strict";

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    psword =document.querySelector("#psword"),
    confirmPsword =document.querySelector("#confirm-psword"),
    email = document.querySelector("#email"),
    age = document.querySelector("#age"),
    phoneno = document.querySelector("#phoneno"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", signup);

function signup() {
    if (!id.value) return alert("아이디를 입력해주세요.") 
    if (psword.value !== confirmPsword.value){
        return alert("비밀번호가 일치하지 않습니다.");
    }
    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
        email: email.value,
        age: age.value,
        phoneno: phoneno.value

    };

    console.log(req);

    fetch("/api/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){ //성공 시 로그인페이지로 이동
            location.href = "/api/login";
        }else{ 
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("회원가입 중 에러 발생"));
    }); 
}