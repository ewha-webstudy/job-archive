import React from "react";
import CardBoard from "./CardBoard";
import "../../style/main.css";

function MainCard(props) {
  return (
    <div className="main__card">
      <div className="card">
        <CardBoard jobs={props.jobs} islogin={props.islogin} />
      </div>
    </div>
  );
}

export default MainCard;
