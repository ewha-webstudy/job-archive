import styled from "styled-components";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    id: "",
    psword: "",
  });

  const SubmitHandler = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://localhost:3000/api/login", //"https://d0c457ee-4178-4d13-bd29-1d117f7e1cf5.mock.pstmn.io/api/login"
        user
      )
      .then((res) => {
        // localStorage.setItem("token", res.token);
        history.push("/");
      })

      .catch((err) => {
        if (err.response && err.response.status === 400) {
          console.log("존재하지 않는 아이디입니다.");
        } else if (err.response && err.response.status === 407) {
          console.log("아이디 또는 비밀번호를 확인해 주세요.");
        } else {
          console.log(err);
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
      <Link to={"/signup"} style={{ textDecoration: "none" }}>
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
