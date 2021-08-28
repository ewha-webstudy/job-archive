import { useSelector } from "react-redux";
import MyPageCard from "../components/Card/MyPageCard";

function MyPageContainer() {
  // store의 state 값 조회
  const { islogin } = useSelector((state) => ({
    islogin: state.logger.islogin,
  }));

  //수정 중
  //TODO: 프로필수정/이메일알림 추가
  return <MyPageCard islogin={islogin} />;
}

export default MyPageContainer;
