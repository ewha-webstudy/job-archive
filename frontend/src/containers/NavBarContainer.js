import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../components/NavBar/NavBar";
import { login, logout } from "../modules/logger";
// 컨테이너는 페이지에 포함 시키기

function NavBarContainer() {
  // store의 state 값 조회
  const { islogin, token } = useSelector(state => ({
    islogin: state.logger.islogin,
    token: state.logger.token
  }));

  const dispatch = useDispatch();

  const onLogin = () => dispatch(login());
  const onLogout = () => dispatch(logout());

  return (
    <NavBar
      islogin={islogin}
      token={token}
      onLogin={onLogin}
      onLogout={onLogout}
    />
  );
}
export default NavBarContainer;
