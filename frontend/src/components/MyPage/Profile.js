import { Box, Button, Grommet, MaskedInput, Select, TextInput } from "grommet";
import { Hide, MailOption, View } from "grommet-icons";
import { useState } from "react";
import styled from "styled-components";

const theme = {
  global: {
    colors: {
      brand: "#f3b23e",
      focus: "none",
    },
  },
};

const NameInput = (handleChange) => {
  const [name, setName] = useState("");

  return (
    <Grommet theme={theme}>
      <Box direction="row" justify="start" round="15px" border>
        <TextInput
          plain
          placeholder="이름을 입력하세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Box>
    </Grommet>
  );
};

const IdInput = () => {
  const [id, setId] = useState("");

  return (
    <Grommet theme={theme}>
      <Box direction="row" justify="start" round="15px" border>
        <TextInput
          plain
          placeholder="이름을 입력하세요"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </Box>
    </Grommet>
  );
};

export const Password = () => {
  const [psword, setPsword] = useState("");
  const [reveal, setReveal] = useState(false);

  return (
    <Grommet theme={theme}>
      <Box direction="row" justify="start" round="15px" border>
        <TextInput
          plain
          type={reveal ? "text" : "password"}
          value={psword}
          name="psword"
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

const YearOption = () => {
  const yearOptions = [...Array(80)].map((v, i) => i + 1942);
  const [born, setBorn] = useState();
  return (
    <Grommet theme={theme}>
      <Box round="15px" border>
        <Select
          plain
          placeholder="출생 연도를 선택하세요"
          value={born}
          name="born"
          options={yearOptions.reverse()}
          onChange={({ value: nextValue }) => setBorn(nextValue)}
          dropHeight="medium"
        />
      </Box>
    </Grommet>
  );
};

const EmailMaskedInput = (ema) => {
  const [email, setEmail] = useState("");

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
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Box>
    </Grommet>
  );
};

const Profile = () => {
  const [values, setValues] = useState({
    name: "",
    born: "",
    email: "",
    id: "",
    psword: "",
    confirmPsword: "",
  });

  const handleChange = (e) => {
    setValues(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    values.id = IdInput.id;
    console.log(values);
  };

  const profileInputs1 = [
    {
      title: "이름",
      component: <NameInput />,
    },
    {
      title: "출생 연도",
      component: <YearOption />,
    },
    {
      title: "이메일",
      component: <EmailMaskedInput />,
    },
  ];

  const profileInputs2 = [
    {
      title: "아이디",
      component: <IdInput />,
    },
    {
      title: "비밀번호",
      component: <Password />,
    },
    {
      title: "비밀번호 확인",
      component: <Password />,
    },
  ];

  const ProfileItem = ({ input }) => {
    return (
      <InputWrapper>
        <h4>{input.title}</h4>
        {input.component}
      </InputWrapper>
    );
  };

  return (
    <>
      <form>
        <ProfileBlock>
          <ModifyBox>
            {profileInputs1.map((input) => {
              return <ProfileItem input={input} />;
            })}
          </ModifyBox>
          <ModifyBox>
            {profileInputs2.map((input) => {
              return <ProfileItem input={input} />;
            })}
          </ModifyBox>
        </ProfileBlock>
      </form>
      <ModifyButton onClick={handleFormSubmit}>저장</ModifyButton>
    </>
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
