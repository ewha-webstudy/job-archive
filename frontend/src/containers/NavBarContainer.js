import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../components/NavBar/NavBar";
import { login, logout } from "../modules/logger";
// 컨테이너는 페이지에 포함 시키기

function NavBarContainer() {
  // store의 state 값 조회
  const { islogin } = useSelector(state => ({
    islogin: state.logger.islogin
  }));

  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());

  return <NavBar islogin={islogin} onLogout={onLogout} />;
}
export default NavBarContainer;
