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
const ProfileForm = ({ value, onChange, onClick, disabled }) => {
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
                  disabled={disabled}
                />
              </Box>
            </Grommet>
          </InputWrapper>
          <InputWrapper>
            <h4>출생 연도</h4>
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
                  disabled={disabled}
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
                overflow="hidden"
                round="15px"
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
        <SubmitButton className="submit" onClick={onClick}>
          저장
        </SubmitButton>
      </ProfileBlock>
    </form>
  );
};

const ProfileBlock = styled.div`
  width: 75%;
  height: 640px;
  float: right;
  display: flex;
  margin-top: 5.5%;
  margin-right: 3%;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const ModifyBox = styled.div`
  height: 80%;
  margin-left: 13%;
  margin-top: 3%;
`;

const InputWrapper = styled.div`
  & + & {
    margin-top: 4rem;
  }

  width: 240px
  height: 80px;

  h4 {
    color: grey;
    margin-left: 10px;
    font-weight: lighter;
  }

  input:focus {
    outline: none;
  }
`;

export const ButtonWrapper = styled.div`
  float: right;
  width: 50rem;
  height: 10rem;
  display: flex;
  margin-right: 2rem;
`;

const SubmitButton = styled.button`
  &:hover {
    color: white;
    cursor: pointer;
    background: #f3b23e;
  }
  width: 100px;
  height: 40px;
  background: white;
  margin-top: 8.5%;
  margin-left: 83%;
  border-radius: 17px;
  border: 2px solid #f3b23e;
`;

export default ProfileForm;
