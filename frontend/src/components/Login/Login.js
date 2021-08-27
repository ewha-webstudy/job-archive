import styled from "styled-components";
import API from "../../utils/api";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

// login: login 여부, token: 토큰
// onLogin: 로그인하는 함수, onLogout: 로그아웃하는 함수
const Login = ({ onLogin }) => {
  const history = useHistory();
  const [user, setUser] = useState({
    id: "",
    psword: "",
  });

  const SubmitHandler = async (e) => {
    e.preventDefault();
    console.log(user);

    await API.post("/api/login", user)
      .then((res) => {
        console.log("res: ", res);

        // accessToken을 반환 받고 localStorage에 저장한다.
        const { accessToken } = res.data;

        // accessToken을 store에 저장
        // onLogin(res.data.data.accessToken);
        onLogin("tokentoken"); // test 코드

        // accessToken의 경우 axios 동작 시 헤더에 기본으로 붙도록 설정한다.
        API.defaults.headers.common["Authorization"] = `${accessToken}`;
        history.push("/");
      })
      .catch((err) => {
        console.log("err: ", err);
        if (err.response.status === 400) {
          alert("존재하지 않는 아이디입니다.");
        }
        if (err.response.status === 412) {
          alert("비밀번호를 다시 확인해 주세요.");
        }
      });
  };

  const ChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={SubmitHandler}>
        <Wrapper>
          <Span>ID</Span>
          <Input
            name="id"
            type="text"
            value={user.id}
            onChange={ChangeHandler}
            required
          />
        </Wrapper>
        <Wrapper>
          <Span>PW</Span>
          <Input
            name="psword"
            type="password"
            value={user.psword}
            onChange={ChangeHandler}
            required
          />
        </Wrapper>
        <LoginButton type="submit">로그인 하기</LoginButton>
      </form>
      <Link to={"/api/member/create"} style={{ textDecoration: "none" }}>
        <SignupButton>회원 가입</SignupButton>
      </Link>
    </>
  );
};

const Wrapper = styled.div`
  margin: 10px auto;
  display: flex;
  flex-direction: row;
`;

const Span = styled.span`
  display: flex;
  margin: auto;
  margin-top: 40px;
  margin-left: 120px;
  color: grey;
  font-weight: bold;
`;

const Input = styled.input`
  display: flex;
  margin: auto;
  margin-top: 30px;
  margin-right: 105px;
  width: 330px;
  height: 35px;
  border: solid 1px #dadada;
  border-radius: 20px;
  padding-left: 20px;
  &:focus {
    outline: none;
  }
`;

const LoginButton = styled.button`
  &:hover {
    cursor: pointer;
  }
  background: #ef8d21;
  display: block;
  width: 70%;
  height: 50px;
  border: none;
  border-radius: 20px;
  margin: auto;
  margin-top: 60px;
  color: white;
`;

const SignupButton = styled.button`
  &:hover {
    cursor: pointer;
  }
  & + & {
    margin-top: 30px;
  }
  width: 40%;
  height: 50px;
  border: none;
  border-radius: 15px;
  margin: auto;
  margin-top: 140px;
  display: block;
  text-align: center;
  text-decoration: none;
  color: #525252;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(87, 87, 87, 0.1), 0 3px 6px rgba(83, 83, 83, 0.23);
`;

export default Login;
