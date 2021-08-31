import { Box, Button, Grommet, TextInput } from "grommet";
import { Hide, View } from "grommet-icons";
import { useState, useEffect } from "react";
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

    API.delete("/api/member/delete")
      .then((res) => {
        alert("정상적으로 탈퇴 처리되었습니다.");
        console.log("RES: ", res);
        history.push("/");
      })
      .catch((err) => {
        console.log("ERR: ", err);
        //console.log(err.response);
      });
  };

  return (
    <>
      <BodyWrapper>
        <span>정말 탈퇴하시겠습니까?</span>
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

  span {
    color: #ef8d21;
    font-size: 28px;
    margin-top: 15px;
  }

  h4 {
    margin-top: 15px;
  }
`;

const InputWrapper = styled.div`
  margin-top: 35px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
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
