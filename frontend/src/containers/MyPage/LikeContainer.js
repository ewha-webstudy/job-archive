import { useSelector } from "react-redux";
import MyPageCard from "../../components/Card/MyPageCard";

function LikeContainer() {
  // store의 state 값 조회 - 로그인 여부 확인
  const { islogin } = useSelector((state) => ({
    islogin: state.logger.islogin,
  }));

  return <MyPageCard islogin={islogin} />;
}

export default LikeContainer;
