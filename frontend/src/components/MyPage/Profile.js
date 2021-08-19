<<<<<<< HEAD
import { Grommet, Select } from "grommet";
=======
import { Box, Button, Grommet, MaskedInput, Select, TextInput } from "grommet";
import { Hide, MailOption, View } from "grommet-icons";
>>>>>>> origin/feature/my-page
import { useState } from "react";
import styled from "styled-components";

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

const ModifyButton = styled.button`
  & + & {
    margin-left: 30px;
  }

  &:hover {
    cursor: pointer;
<<<<<<< HEAD
=======
    color: white;
>>>>>>> origin/feature/my-page
    background: #f3b23e;
  }

  width: 100px;
  height: 40px;

  margin-left: 1195px;

  background: white;
  border: 2px solid #f3b23e;
  border-radius: 17px;
  box-shadow: 0 0px 5px rgba(87, 87, 87, 0.1);
`;

<<<<<<< HEAD
function Inputs({ inputs }) {
  return (
    <InputWrapper>
      <h4>{inputs}</h4>
      <input class="oneinput" />
    </InputWrapper>
  );
}

function Example() {
  const [value, setValue] = useState("medium");
  return (
    <Select
      options={["small", "medium", "large"]}
      value={value}
      onChange={({ option }) => setValue(option)}
    />
  );
}

const Profile = () => {
  const inputs = [
    "이름",
    "출생 연도",
    "휴대폰 번호",
    "이메일",
    "아이디",
    "비밀번호",
    "비밀번호 확인",
  ];
=======
const theme = {
  global: {
    colors: {
      brand: "#f3b23e",
      focus: "none",
    },
  },
};

const NameInput = () => {
  return (
    <Grommet theme={theme}>
      <Box direction="row" justify="start" round="15px" border>
        <TextInput plain placeholder="이름을 입력하세요" />
      </Box>
    </Grommet>
  );
};

const PhoneNumberInput = () => {
  const [value, setValue] = useState("");
  return (
    <Grommet theme={theme}>
      <Box direction="row" justify="start" round="15px" border>
        <MaskedInput
          plain
          mask={[
            { fixed: "010-" },
            {
              length: 4,
              regexp: /^[0-9]{1,4}$/,
              placeholder: "xxxx",
            },
            { fixed: "-" },
            {
              length: 4,
              regexp: /^[0-9]{1,4}$/,
              placeholder: "xxxx",
            },
          ]}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Box>
    </Grommet>
  );
};

const Password = () => {
  const [password, setPassword] = useState("");
  const [reveal, setReveal] = useState(false);

  return (
    <Grommet theme={theme}>
      <Box direction="row" justify="start" round="15px" border>
        <TextInput
          plain
          type={reveal ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          icon={reveal ? <View size="medium" /> : <Hide size="medium" />}
          onClick={() => setReveal(!reveal)}
        />
      </Box>
    </Grommet>
  );
};

const YearOption = () => {
  const yearOptions = [...Array(80)].map((v, i) => i + 1942);
  const [year, setYear] = useState();
  return (
    <Grommet theme={theme}>
      <Box round="15px" border>
        <Select
          plain
          placeholder="출생 연도를 선택하세요"
          value={year}
          options={yearOptions.reverse()}
          onChange={({ value: nextValue }) => setYear(nextValue)}
          dropHeight="medium"
        />
      </Box>
    </Grommet>
  );
};

const EmailMaskedInput = () => {
  const [value, setValue] = useState("");

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

  return (
    <Grommet theme={theme}>
      <Box justify="start" round="15px" border>
        <MaskedInput
          plain
          icon={<MailOption />}
          mask={emailMask}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Box>
    </Grommet>
  );
};

const Profile = () => {
  const profileInputs1 = [
    { title: "이름", component: <NameInput /> },
    { title: "출생 연도", component: <YearOption /> },
    { title: "휴대폰 번호", component: <PhoneNumberInput /> },
    { title: "이메일", component: <EmailMaskedInput /> },
  ];

  const profileInputs2 = [
    { title: "비밀번호", component: <Password /> },
    { title: "비밀번호 확인", component: <Password /> },
  ];

  const ProfileItem = ({ input }) => {
    return (
      <InputWrapper>
        <h4>{input.title}</h4>
        {input.component}
      </InputWrapper>
    );
  };

>>>>>>> origin/feature/my-page
  return (
    <>
      <ProfileBlock>
        <ModifyBox>
<<<<<<< HEAD
          <Inputs inputs={inputs[0]} />
          <Inputs inputs={inputs[1]} />
          <Inputs inputs={inputs[2]} />
          <Inputs inputs={inputs[3]} />
        </ModifyBox>
        <ModifyBox>
          <Inputs inputs={inputs[4]} />
          <Inputs inputs={inputs[5]} />
          <Inputs inputs={inputs[6]} />
=======
          {profileInputs1.map((input) => {
            return <ProfileItem input={input} />;
          })}
        </ModifyBox>
        <ModifyBox>
          {profileInputs2.map((input) => {
            return <ProfileItem input={input} />;
          })}
>>>>>>> origin/feature/my-page
        </ModifyBox>
      </ProfileBlock>
      <ModifyButton>수정</ModifyButton>
      <ModifyButton>저장</ModifyButton>
    </>
  );
};

export default Profile;
