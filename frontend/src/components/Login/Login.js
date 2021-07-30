import styled from "styled-components";

const Wrapper = styled.div`
  margin: 10px auto;
  display: flex;
`;

const Span = styled.span`
  display: flex;
  margin: auto;
  margin-top: 40px;
  margin-left: 120px;
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

const Button = styled.button`
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

const Login = ({ value, onChange, onCreate, onKeyPress }) => {
  return (
    <>
      <Wrapper>
        <Span>ID</Span>
        <Input className="id" name="id" type="text" required />
      </Wrapper>
      <Wrapper>
        <Span>PW</Span>
        <Input className="pw" name="pw" type="password" required />
      </Wrapper>
      <Button type="submit">로그인 하기</Button>
    </>
  );
};

export default Login;
