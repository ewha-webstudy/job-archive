import { CheckBox, Grommet } from "grommet";
import { useState } from "react";
import styled from "styled-components";
import { ModifyButton } from "../MyPage/Profile";

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
  height: 50%;

  margin-top: 3%;
  border: none;
  background: none;
`;

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
  //수정 중
  const [checked, setChecked] = useState(false);
  const onChange = (e) => setChecked(!checked);

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
            <CheckBox checked={checked} onChange={onChange} toggle />
          </Grommet>
        </InputWrapper>

        <InputWrapper>
          <h4>이메일 알림</h4>
          <ButtonGroup>
            {menu.map((menu) => (
              <NotificationButton key={menu.id}>
                {menu.title}
              </NotificationButton>
            ))}
          </ButtonGroup>
        </InputWrapper>
      </NotificationBlock>
      <ModifyButton>저장</ModifyButton>
    </>
  );
};

export default Notification;
