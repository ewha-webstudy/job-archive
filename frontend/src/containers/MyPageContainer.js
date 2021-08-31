import { useSelector } from "react-redux";
import Profile from "../components/MyPage/Profile";
import MyPageCard from "../components/Card/MyPageCard";
import Notification from "../components/MyPage/Notification";

function MyPageContainer() {
  // store의 state 값 조회 - 로그인 여부 확인
  const { islogin } = useSelector((state) => ({
    islogin: state.logger.islogin,
  }));

  /* 수정 중 */
  return (
    <>
      <Profile islogin={islogin} />
      <Notification islogin={islogin} />

      <MyPageCard islogin={islogin} />
    </>
  );
}

export default MyPageContainer;
