import styled from "styled-components";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Box, Button, Grommet, MaskedInput, Select, TextInput } from "grommet";
import { Hide, MailOption, View } from "grommet-icons";
import axios from "axios";

const SubmitButton = ({ onClick }) => {
  return (
    <ModifyButton className="submit" onClick={onClick}>
      저장
    </ModifyButton>
  );
};

const theme = {
  global: {
    colors: {
      brand: "#f3b23e",
      focus: "none",
    },
  },
};

const Profile = () => {
  const history = useHistory();

  const [values, setValues] = useState({
    name: "",
    born: "",
    email: "",
    id: "",
    psword: "",
    confirmPsword: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(values);

    axios
      .post("https://localhost:3001/api/mypage/profile", values)
      .then((res) => {
        window.alert("저장되었습니다!");
        console.log("RES: ", res);
        history.push("/");
      })

      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const yearOptions = [...Array(80)].map((v, i) => i + 1942);
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

  const [revealPsword, setRevealPsword] = useState(false);
  const [revealConfirmPsword, setRevealConfirmPsword] = useState(false);

  return (
    <form>
      <ProfileBlock>
        <ModifyBox>
          <InputWrapper>
            <h4>이름</h4>
            <Grommet theme={theme}>
              <Box direction="row" justify="start" round="15px" border>
                <TextInput
                  plain
                  placeholder="이름을 입력하세요"
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
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
                  value={values.born}
                  onChange={handleChange}
                />
              </Box>
            </Grommet>
          </InputWrapper>
          <InputWrapper>
            <h4>이메일</h4>
            <Grommet theme={theme}>
              <Box justify="start" round="15px" border>
                <MaskedInput
                  plain
                  icon={<MailOption />}
                  mask={emailMask}
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </Box>
            </Grommet>
          </InputWrapper>
        </ModifyBox>

        <ModifyBox>
          <InputWrapper>
            <h4>아이디</h4>
            <Grommet theme={theme}>
              <Box direction="row" justify="start" round="15px" border>
                <TextInput
                  plain
                  placeholder="아이디를 입력하세요"
                  type="text"
                  name="id"
                  value={values.id}
                  onChange={handleChange}
                />
              </Box>
            </Grommet>
          </InputWrapper>
          <InputWrapper>
            <h4>비밀번호</h4>
            <Grommet theme={theme}>
              <Box direction="row" justify="start" round="15px" border>
                <TextInput
                  plain
                  type={revealPsword ? "text" : "password"}
                  value={values.psword}
                  name="psword"
                  onChange={handleChange}
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
              <Box direction="row" justify="start" round="15px" border>
                <TextInput
                  plain
                  type={revealConfirmPsword ? "text" : "password"}
                  value={values.confirmPsword}
                  name="confirmPsword"
                  onChange={handleChange}
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
      <div>
        <SubmitButton onClick={handleFormSubmit} />
      </div>
    </form>
  );
};

const ProfileBlock = styled.div`
  width: 75%;
  height: 80%;
  margin-top: 7%;
  margin-right: 3%;
  float: right;
  background-color: white;
  display: flex;
  align-items: flex-start;
`;

const ModifyBox = styled.div`
  width: 45%;
  height: 80%;
`;

const InputWrapper = styled.div`
  & + & {
    margin-top: 80px;
  }
  width: 300px;
  height: 100px;
  margin-top: 20px;
  margin-left: 150px;
  h4 {
    color: grey;
    font-weight: lighter;
    margin-left: 10px;
  }
  .oneinput {
    width: 95%;
    height: 50%;
    padding-left: 20px;
    font-size: 18px;
    background: #f5f5f5;
    border: none;
    border-radius: 15px;
    box-shadow: 0 3px 6px rgba(87, 87, 87, 0.1) inset;
  }
  input:focus {
    outline: none;
  }
`;

export const ModifyButton = styled.button`
  &:hover {
    cursor: pointer;
    color: white;
    background: #f3b23e;
  }
  width: 100px;
  height: 40px;
  margin-left: 1325px;
  background: white;
  border: 2px solid #f3b23e;
  border-radius: 17px;
  box-shadow: 0 0px 5px rgba(87, 87, 87, 0.1);
`;

export default Profile;
