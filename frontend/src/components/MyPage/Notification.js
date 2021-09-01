import { CheckBox, Grommet } from "grommet";
import { useState } from "react";
import styled from "styled-components";
import API from "../../utils/api";

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

// 수정 중!!
const Notification = () => {
  return (
    <NotificationBlock>
      <InputWrapper>
        <h4>알림</h4>
        <Grommet theme={theme}>
          <CheckBox toggle />
        </Grommet>
      </InputWrapper>

      <InputWrapper>
        <h4>알림 D-Day</h4>
        <ButtonGroup>
          <NotificationButton id={14}>2주 전</NotificationButton>
          <NotificationButton id={7}>1주 전</NotificationButton>
          <NotificationButton id={3}>3일 전</NotificationButton>
          <NotificationButton id={1}>1일 전</NotificationButton>
        </ButtonGroup>
      </InputWrapper>
      <SubmitButton>저장</SubmitButton>
    </NotificationBlock>
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
    margin-bottom: 15px;
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

const SubmitButton = styled.button`
  &:hover {
    color: white;
    cursor: pointer;
    background: #f3b23e;
  }
  align-item: center;
  width: 100px;
  height: 40px;
  background: white;
  margin-top: 33%;
  margin-left: 83%;
  border-radius: 17px;
  border: 2px solid #f3b23e;
  box-shadow: 0 0px 5px rgba(87, 87, 87, 0.1);
`;

export default Notification;
