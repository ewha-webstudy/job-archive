import { useSelector } from "react-redux";
import MyPageCard from "../components/Card/MyPageCard";

function NavBarContainer() {
  // store의 state 값 조회
  const { islogin } = useSelector((state) => ({
    islogin: state.logger.islogin,
  }));

  return <MyPageCard islogin={islogin} />;
}
export default NavBarContainer;
