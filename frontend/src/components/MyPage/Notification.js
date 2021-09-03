import { CheckBox, Grommet } from "grommet";
import { useState, useEffect } from "react";
import styled from "styled-components";
import API from "../../utils/api";
import "../../style/noti.css";

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
const Notification = ({ islogin }) => {
  // 알림 설정 토글 버튼
  const [toggled, setToggled] = useState(false);

  // 디데이 선택 버튼
  const [day, setDay] = useState();

  // API body
  const Dday = {
    ifNotif: toggled,
    notifDay: day,
  };

  // 로그인 여부 확인 & 기존 데이터 불러오기 (수정 중)
  useEffect(() => {
    if (!islogin) {
      alert("로그인 후 이용 가능합니다.");
    } else {
      API.get("/api/mypage/notification")
        .then((res) => {
          Dday.notifDay = res.data.notifDay;
          setToggled(res.data.ifNotif);
          setDay(res.data.notifDay);
        })
        .catch((err) => {
          console.log("ERR: ", err);
        });
    }
  }, []);

  // 알림 ON/OFF 설정 함수
  const onChange = () => {
    setToggled(!toggled);
    setDay(0);
  };

  // 디데이 선택 버튼
  const OnClick = (e, menu) => {
    toggled && setDay(menu.id);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    Dday.ifNotif = toggled.toString();
    console.log("Dday: ", Dday);

    // 알림은 ON인데 디데이를 선택하지 않은 경우
    if (toggled && Dday.notifDay === 0) {
      alert("알림 D-Day를 선택하세요.");
    }

    API.post("/api/mypage/notification", Dday)
      .then((res) => {
        console.log("RES: ", res);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  // 버튼 요소
  const element = [
    { id: 14, name: "2주 전" },
    { id: 7, name: "1주 전" },
    { id: 3, name: "3일 전" },
    { id: 1, name: "1일 전" },
  ];

  const setClassName = (menu, day) => {
    if (toggled) {
      if (menu.id === day) {
        return "customBtn activeBtn";
      } else {
        return "customBtn";
      }
    } else {
      return "disable";
    }
  };

  return (
    <NotificationBlock>
      <InputWrapper>
        <h4>알림</h4>
        <Grommet theme={theme}>
          <CheckBox onChange={onChange} toggle checked={toggled} />
        </Grommet>
      </InputWrapper>

      <InputWrapper>
        <h4>알림 D-Day</h4>
        <ButtonGroup>
          {element.map((menu, i) => (
            <NotificationButton
              key={i}
              id={menu.id}
              onClick={(e) => OnClick(e, menu)}
              className={setClassName(menu, day)}
            >
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
  & + & {
    border-left: 1px solid lightgrey;
  }
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
