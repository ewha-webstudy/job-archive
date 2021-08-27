import styled from "styled-components";
import { useState } from "react";
import { Box, Button, Grommet, MaskedInput, Select, TextInput } from "grommet";
import { Hide, MailOption, View } from "grommet-icons";

const theme = {
  global: {
    colors: {
      brand: "#f3b23e",
      focus: "none",
    },
  },
};

//회원가입, 회원정보수정에 사용되는 Form
const ProfileForm = ({ value, onChange, onClick }) => {
  //출생연도 선택 시 보이는 연도 리스트
  const yearOptions = [...Array(80)].map((v, i) => `${i + 1942}`);

  //이메일 작성 시 사용할 수 있는 형식 지정
  const emailMask = [
    {
      regexp: /^[\w\-_.]+$/,
      placeholder: "job",
    },
    { fixed: "@" },
    {
      regexp: /^[\w]+$/,
      placeholder: "archive",
    },
    { fixed: "." },
    {
      regexp: /^[\w]+$/,
      placeholder: "com",
    },
  ];

  //비밀번호를 보이게/안 보이게 설정
  const [revealPsword, setRevealPsword] = useState(false);
  const [revealConfirmPsword, setRevealConfirmPsword] = useState(false);

  return (
    //수정 예정
    <form>
      <ProfileBlock>
        <ModifyBox>
          <InputWrapper>
            <h4>이름</h4>
            <Grommet theme={theme}>
              <Box
                direction="row"
                justify="start"
                round="15px"
                overflow="hidden"
                border
              >
                <TextInput
                  plain
                  placeholder="이름을 입력하세요"
                  type="text"
                  name="name"
                  value={value.name}
                  onChange={onChange}
                />
              </Box>
            </Grommet>
          </InputWrapper>
          <InputWrapper>
            <h4>출생연도</h4>
            <Grommet theme={theme}>
              <Box round="15px" border>
                <Select
                  plain
                  placeholder="출생 연도를 선택하세요"
                  options={yearOptions.reverse()}
                  dropHeight="medium"
                  name="born"
                  value={value.born}
                  onChange={onChange}
                />
              </Box>
            </Grommet>
          </InputWrapper>
          <InputWrapper>
            <h4>이메일</h4>
            <Grommet theme={theme}>
              <Box justify="start" round="15px" overflow="hidden" border>
                <MaskedInput
                  plain
                  icon={<MailOption />}
                  mask={emailMask}
                  name="email"
                  value={value.email}
                  onChange={onChange}
                />
              </Box>
            </Grommet>
          </InputWrapper>
        </ModifyBox>
        <ModifyBox>
          <InputWrapper>
            <h4>아이디</h4>
            <Grommet theme={theme}>
              <Box
                direction="row"
                justify="start"
                round="15px"
                overflow="hidden"
                border
              >
                <TextInput
                  plain
                  placeholder="아이디를 입력하세요"
                  type="text"
                  name="id"
                  value={value.id}
                  onChange={onChange}
                />
              </Box>
            </Grommet>
          </InputWrapper>
          <InputWrapper>
            <h4>비밀번호</h4>
            <Grommet theme={theme}>
              <Box
                direction="row"
                justify="start"
                round="15px"
                overflow="hidden"
                border
              >
                <TextInput
                  plain
                  type={revealPsword ? "text" : "password"}
                  value={value.psword}
                  name="psword"
                  onChange={onChange}
                />
                <Button
                  icon={
                    revealPsword ? (
                      <View size="medium" />
                    ) : (
                      <Hide size="medium" />
                    )
                  }
                  onClick={() => setRevealPsword(!revealPsword)}
                />
              </Box>
            </Grommet>
          </InputWrapper>
          <InputWrapper>
            <h4>비밀번호 확인</h4>
            <Grommet theme={theme}>
              <Box
                direction="row"
                justify="start"
                round="15px"
                overflow="hidden"
                border
              >
                <TextInput
                  plain
                  type={revealConfirmPsword ? "text" : "password"}
                  value={value.confirmPsword}
                  name="confirmPsword"
                  onChange={onChange}
                />
                <Button
                  icon={
                    revealConfirmPsword ? (
                      <View size="medium" />
                    ) : (
                      <Hide size="medium" />
                    )
                  }
                  onClick={() => setRevealConfirmPsword(!revealConfirmPsword)}
                />
              </Box>
            </Grommet>
          </InputWrapper>
        </ModifyBox>
      </ProfileBlock>
      <ButtonWrapper>
        <SubmitButton className="submit" onClick={onClick}>
          저장
        </SubmitButton>
      </ButtonWrapper>
    </form>
  );
};

const ProfileBlock = styled.div`
  width: 75%;
  float: right;
  display: flex;
  margin-top: 7%;
  margin-right: 3%;
  align-items: flex-start;
`;

const ModifyBox = styled.div`
  width: 45%;
  height: 80%;
  margin-left: 1rem;
`;

const InputWrapper = styled.div`
  & + & {
    margin-top: 3rem;
  }
  width: 13.5rem;
  height: 5rem;
  margin: 0 auto;

  h4 {
    color: grey;
    margin-left: 10px;
    font-weight: lighter;
  }
  .oneinput {
    width: 95%;
    height: 50%;
    font-size: 18px;
    padding-left: 20px;
    background: #f5f5f5;
    border: none;
    border-radius: 15px;
  }
  input:focus {
    outline: none;
  }
`;

const ButtonWrapper = styled.div`
  float: right;
  width: 50rem;
  height: 10rem;
  display: flex;
  margin-right: 2rem;
`;

export const SubmitButton = styled.button`
  &:hover {
    color: white;
    cursor: pointer;
    background: #f3b23e;
  }
  width: 100px;
  height: 40px;
  background: white;
  margin-top: 23%;
  margin-left: 83%;

  border-radius: 17px;
  border: 2px solid #f3b23e;

  box-shadow: 0 0px 5px rgba(87, 87, 87, 0.1);
`;

export default ProfileForm;
