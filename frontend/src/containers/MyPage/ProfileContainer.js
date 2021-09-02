import { useSelector } from "react-redux";
import Profile from "../../components/MyPage/Profile";

function ProfileContainer() {
  // store의 state 값 조회 - 로그인 여부 확인
  const { islogin } = useSelector((state) => ({
    islogin: state.logger.islogin,
  }));

  return <Profile islogin={islogin} />;
}

export default ProfileContainer;
