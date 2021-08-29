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
  // 알림 설정 토글 버튼
  const [toggled, setToggled] = useState(false);

  // API body
  const Dday = {
    ifNotif: toggled,
    notifDay: 0,
  };

  // 알림 ON/OFF 설정 함수
  const onChange = () => {
    setToggled(!toggled);
    Dday.ifNotif = toggled.toString();
  };

  // 디데이 선택 버튼
  const onClick = (e) => {
    toggled && (Dday.notifDay = parseInt(e.target.id));
  };

  // 디데이 선택 버튼을 누를 때마다 요청 전송
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Dday: ", Dday);

    API.post("/api/mypage/notification", Dday)
      .then((res) => {
        console.log("RES: ", res);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  // 버튼 요소
  const menu = [
    { id: 14, name: "2주 전" },
    { id: 7, name: "1주 전" },
    { id: 3, name: "3일 전" },
    { id: 1, name: "1일 전" },
  ];

  return (
    <NotificationBlock>
      <InputWrapper>
        <h4>알림</h4>
        <Grommet theme={theme}>
          <CheckBox toggled={toggled} onChange={onChange} toggle />
        </Grommet>
      </InputWrapper>

      <InputWrapper>
        <h4>이메일 알림</h4>
        <ButtonGroup>
          {menu.map((menu) => (
            <NotificationButton key={menu.id} id={menu.id} onClick={onClick}>
              {menu.name}
            </NotificationButton>
          ))}
        </ButtonGroup>
      </InputWrapper>
      <SubmitButton onClick={onSubmit}>저장</SubmitButton>
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
