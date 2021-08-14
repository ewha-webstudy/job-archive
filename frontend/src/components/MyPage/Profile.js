import { Grommet, Select } from "grommet";
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
    background: #f3b23e;
  }

  width: 100px;
  height: 40px;

  margin-left: 1200px;

  background: white;
  border: 2px solid #f3b23e;
  border-radius: 17px;
  box-shadow: 0 0px 5px rgba(87, 87, 87, 0.1);
`;

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
  return (
    <>
      <ProfileBlock>
        <ModifyBox>
          <Inputs inputs={inputs[0]} />
          <Inputs inputs={inputs[1]} />
          <Inputs inputs={inputs[2]} />
          <Inputs inputs={inputs[3]} />
        </ModifyBox>
        <ModifyBox>
          <Inputs inputs={inputs[4]} />
          <Inputs inputs={inputs[5]} />
          <Inputs inputs={inputs[6]} />
        </ModifyBox>
      </ProfileBlock>
      <ModifyButton>수정</ModifyButton>
      <ModifyButton>저장</ModifyButton>
    </>
  );
};

export default Profile;
