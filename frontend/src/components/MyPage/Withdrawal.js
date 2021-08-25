import axios from "axios";
import { Box, Button, Grommet, TextInput } from "grommet";
import { Hide, View } from "grommet-icons";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import API from "../../utils/api";

const theme = {
  global: {
    colors: {
      brand: "#f3b23e",
      focus: "none",
    },
  },
};

//비밀번호 인풋 함수
const Password = () => {
  //비밀번호를 입력하고 탈퇴
  const [psword, setPsword] = useState("");
  const [reveal, setReveal] = useState(false);

  return (
    <Grommet theme={theme}>
      <Box direction="row" justify="start" round="15px" border>
        <TextInput
          plain
          type={reveal ? "text" : "password"}
          value={psword}
          onChange={(e) => setPsword(e.target.value)}
        />
        <Button
          icon={reveal ? <View size="medium" /> : <Hide size="medium" />}
          onClick={() => setReveal(!reveal)}
        />
      </Box>
    </Grommet>
  );
};

const Withdrawal = () => {
  const history = useHistory();

  //탈퇴 버튼을 누르면 실행되는 함수
  const onClick = (e) => {
    e.preventDefault();

    axios
      .delete(
        "https://f77b7f2f-3f98-4d10-acf8-31ea4b2ba99f.mock.pstmn.io/delete"
      ) // /api/member/delete
      .then((res) => {
        alert("정상적으로 탈퇴 처리되었습니다.");
        console.log("RES: ", res);
        history.push("/");
      })
      .catch((err) => {
        console.log("ERR: ", err.response.status);
        console.log(err.response);
      });
  };

  return (
    <>
      <BodyWrapper>
        <h2>정말 탈퇴하시겠습니까?</h2>
        <h4>비밀번호를 입력하세요.</h4>
      </BodyWrapper>
      <InputWrapper>
        <Password />
        <ConfirmButton onClick={onClick}>탈퇴하기</ConfirmButton>
      </InputWrapper>
    </>
  );
};

const BodyWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  h2 {
    color: #ef8d21;
    margin-top: 10px;
  }
  h4 {
    margin-top: 5px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`;

const ConfirmButton = styled.button`
  &:hover {
    cursor: pointer;
  }
  height: 35px;
  width: 90px;
  border: 2px solid #ef8d21;
  border-radius: 15px;
  color: white;
  background: #ef8d21;
  margin-top: 25px;
`;

export default Withdrawal;
