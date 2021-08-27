import React from "react";
import { useDispatch } from "react-redux";
import Login from "../components/Login/Login";
import { login } from "../modules/logger";
// 컨테이너는 페이지에 포함 시키기

function LoginContainer() {
  const dispatch = useDispatch();

  // 토큰 전달
  const onLogin = token => dispatch(login(token));

  return <Login onLogin={onLogin} />;
}
export default LoginContainer;
