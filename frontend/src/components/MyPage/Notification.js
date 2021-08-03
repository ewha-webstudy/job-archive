import { Button, RadioButtonGroup } from "grommet";
import styled from "styled-components";

const NotificationBlock = styled.div`
  width: 75%;
  height: 80%;

  margin-top: 7%;
  margin-right: 3%;

  float: right;
  background-color: white;
`;

const InputWrapper = styled.div`
  & + & {
    margin-top: 80px;
  }

  width: 500px;
  height: 100px;

  margin-top: 20px;
  margin-left: 150px;

  h4 {
    color: grey;
    font-weight: lighter;

    margin-left: 10px;
  }
`;

const ButtonGroup = styled.div`
  &:hover {
    cursor: pointer;
  }

  width: 100%;
  height: 50%;

  background: #f5f5f5;
  border: 1px solid lightgrey;
  border-radius: 15px;
  box-shadow: 0 3px 6px lightgrey;
`;

const NotificationButton = styled.button`
  &:hover {
    cursor: pointer;
    color: #ef8d21;
    font-weight: border;
  }

  width: 20%;
  height: 100%;

  background: none;
  border: none;
`;

const ModifyButton = styled.button`
  &:hover {
    cursor: pointer;
    background: #ecbd83;
  }

  width: 100px;
  height: 40px;

  margin-left: 1325px;

  background: white;
  border: 2px solid #ecbd83;
  border-radius: 17px;
  box-shadow: 0 0px 5px rgba(87, 87, 87, 0.1);
`;

const Notification = () => {
  return (
    <>
      <NotificationBlock>
        <InputWrapper>
          <h4>알림</h4>
          <RadioButtonGroup name="doc" options={["설정", "해제"]} />
        </InputWrapper>
        <InputWrapper>
          <h4>SMS 알림</h4>
          <ButtonGroup>
            <NotificationButton>해제</NotificationButton>
            <NotificationButton>2주 전</NotificationButton>
            <NotificationButton>1주 전</NotificationButton>
            <NotificationButton>3일 전</NotificationButton>
            <NotificationButton>1일 전</NotificationButton>
          </ButtonGroup>
        </InputWrapper>
        <InputWrapper>
          <h4>이메일 알림</h4>
          <ButtonGroup>
            <NotificationButton>해제</NotificationButton>
            <NotificationButton>2주 전</NotificationButton>
            <NotificationButton>1주 전</NotificationButton>
            <NotificationButton>3일 전</NotificationButton>
            <NotificationButton>1일 전</NotificationButton>
          </ButtonGroup>
        </InputWrapper>
      </NotificationBlock>
      <ModifyButton>저장</ModifyButton>
    </>
  );
};

export default Notification;
