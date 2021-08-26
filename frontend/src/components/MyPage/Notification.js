import { CheckBox, Grommet } from "grommet";
import { useState } from "react";
import styled from "styled-components";
import { SubmitButton } from "../MyPage/ProfileForm";

const theme = {
  global: {
    colors: {
      brand: "#f3b23e",
    },
    focus: {
      border: {
        color: "none",
      },
    },
  },
};

const Notification = () => {
  //알림 설정 토글 버튼
  const [toggled, setToggled] = useState(false);

  //이메일 알림 주기 설정 버튼
  //수정 중
  const [checked, setChecked] = useState([
    { id: "d14", isActive: false },
    { id: "d7", isActive: false },
    { id: "d3", isActive: false },
    { id: "d1", isActive: false },
  ]);

  //알림 ON/OFF 설정
  const onChange = () => {
    setToggled(!toggled);
    console.log(toggled);
  };

  var NotiOn = "";

  //알림 주기 선택
  const onClick = (e) => {
    console.log(e.target.id);
    NotiOn += " " + e.target.id;

    console.log(NotiOn);
  };

  const menu = [
    { id: "d14", title: "2주 전" },
    { id: "d7", title: "1주 전" },
    { id: "d3", title: "3일 전" },
    { id: "d1", title: "1일 전" },
  ];

  return (
    <>
      <NotificationBlock>
        <InputWrapper>
          <h4>알림</h4>
          <Grommet theme={theme}>
            <CheckBox checked={toggled} onChange={onChange} toggle />
          </Grommet>
        </InputWrapper>

        <InputWrapper>
          <h4>이메일 알림</h4>
          <ButtonGroup>
            {menu.map((menu) => (
              <NotificationButton key={menu.id} id={menu.id} onClick={onClick}>
                {menu.title}
              </NotificationButton>
            ))}
          </ButtonGroup>
        </InputWrapper>
      </NotificationBlock>
      <SubmitButton>저장</SubmitButton>
    </>
  );
};

const NotificationBlock = styled.div`
  width: 75%;
  height: 80%;

  margin-top: 7%;
  margin-right: 3%;

  float: right;
`;

const InputWrapper = styled.div`
  & + & {
    margin-top: 80px;
  }

  width: 400px;
  height: 100px;
  margin-top: 20px;
  margin-left: 150px;

  h4 {
    color: grey;
    font-weight: lighter;
    margin-left: 3px;
  }
`;

const ButtonGroup = styled.div`
  &:hover {
    cursor: pointer;
  }

  width: 100%;
  height: 50%;

  border: 1px solid lightgrey;
  border-radius: 15px;
  overflow: hidden;
`;

const NotificationButton = styled.button`
  &:hover {
    cursor: pointer;
    color: #ffa500;
    font-weight: 600;
  }

  & + & {
    border-left: 1px solid lightgrey;
  }

  width: 25%;
  height: 100%;

  border: none;
  background: none;
`;

export default Notification;
