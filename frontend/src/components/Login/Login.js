import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

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

const Login = () => {
  const [id, setId] = useState("");
  const [psword, setPsword] = useState("");

  const loginData = {
    id: id,
    psword: psword,
  };

  useEffect(function () {
    axios
      .post(
        "https://d0c457ee-4178-4d13-bd29-1d117f7e1cf5.mock.pstmn.io/api/login",
        loginData
      )
      .then((result) => {
        console.log("Result: ", result);
      })
      .then(() => {
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, []);

  return (
    <>
      <Wrapper>
        <Span>ID</Span>
        <Input
          id="id"
          name="id"
          type="text"
          onChange={(e) => {
            setId(e.target.value);
          }}
          rules={[{ required: true, message: "아이디를 입력하세요." }]}
        />
      </Wrapper>
      <Wrapper>
        <Span>PW</Span>
        <Input
          id="psword"
          name="psword"
          type="password"
          onChange={(e) => {
            setPsword(e.target.value);
          }}
          rules={[{ required: true, message: "비밀번호를 입력하세요." }]}
        />
      </Wrapper>
      <LoginButton htmlType="submit">로그인 하기</LoginButton>
      <Link to={"/signup"} style={{ textDecoration: "none" }}>
        <SignupButton>회원 가입</SignupButton>
      </Link>
    </>
  );
};

export default Login;
