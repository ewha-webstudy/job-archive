import { useSelector } from "react-redux";
import Notification from "../../components/MyPage/Notification";

function NotiContainer() {
  // store의 state 값 조회 - 로그인 여부 확인
  const { islogin } = useSelector((state) => ({
    islogin: state.logger.islogin,
  }));

  return <Notification islogin={islogin} />;
}

export default NotiContainer;
