import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../components/NavBar/NavBar";
import { logout } from "../modules/logger";

function NavBarContainer() {
  const { islogin } = useSelector(state => ({
    islogin: state.logger.islogin
  }));

  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());

  return <NavBar islogin={islogin} onLogout={onLogout} />;
}
export default NavBarContainer;
