import React from "react";
import { useSelector } from "react-redux";
import Maincard from "../components/Card/Maincard";

function CardContainer() {
  // store의 state 값 조회
  const { islogin } = useSelector(state => ({
    islogin: state.logger.islogin
  }));

  return <Maincard islogin={islogin} />;
}
export default CardContainer;
