import styled from "styled-components";
import { Route } from "react-router-dom";
import MyPage from "../../pages/MyPage";

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

  background-color: #ef8d21;
  display: block;

  width: 70%;
  height: 50px;
  border: none;
  border-radius: 20px;

  margin: auto;
  margin-top: 60px;

  color: white;
  text-align: center;
`;

const OtherLoginButton = styled.button`
  &:hover {
    cursor: pointer;
  }

  & + & {
    margin-top: 30px;
  }

  box-shadow: 0 3px 6px rgba(87, 87, 87, 0.1), 0 3px 6px rgba(83, 83, 83, 0.23);
  background-color: #fff;
  display: block;

  width: 40%;
  height: 50px;
  border: none;
  border-radius: 15px;

  margin: auto;
  margin-top: 140px;

  color: #56555;
  text-align: center;
`;

const Login = () => {
  return (
    <>
      <Wrapper>
        <Span>ID</Span>
        <Input name="id" type="text" required />
      </Wrapper>
      <Wrapper>
        <Span>PW</Span>
        <Input name="pw" type="password" required />
      </Wrapper>
      <LoginButton type="submit">로그인 하기</LoginButton>
      <>
        <OtherLoginButton>회원 가입</OtherLoginButton>
      </>
    </>
  );
};

export default Login;
