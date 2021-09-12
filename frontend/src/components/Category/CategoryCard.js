import React from "react";
import CardBoard from "../Card/CardBoard";
import "../../style/main.css";

function CategoryCard(jobs, islogin) {
  return (
        <CardBoard jobs={jobs} islogin={islogin} />
  );
}

export default CategoryCard;
