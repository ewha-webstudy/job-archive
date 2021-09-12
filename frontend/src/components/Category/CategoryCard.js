import React from "react";
import CardBoard from "../Card/CardBoard";
import "../../style/main.css";

function CategoryCard(props) {
  return (
        <CardBoard jobs={props.jobs} islogin={props.islogin} />
  );
}

export default CategoryCard;
