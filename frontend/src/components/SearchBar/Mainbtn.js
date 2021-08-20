import React, { useState, useEffect } from "react";
import "../../style/main.css";

function MainBtn({ setBtnValue }) {
  const btnValue = ["프론트엔드", "백엔드", "데이터분석", "None"];

  const [select__btnClicked, setselect__btnClicked] = useState("");

  useEffect(() => {
    setBtnValue(btnValue[select__btnClicked]);
  }, [select__btnClicked]);

  const handleClick = e => {
    console.log(btnValue[e.target.value]);
    e.preventDefault();
    if (e.target.value === select__btnClicked) {
      setselect__btnClicked("3");
    } else {
      setselect__btnClicked(e.target.value);
    }
  };

  return (
    <div className="btn-container">
      <button
        value="0"
        onClick={handleClick}
        className={select__btnClicked === "0" ? "s-btn-clicked" : "s-btn"}
      >
        {btnValue[0]}
      </button>
      <button
        value="1"
        onClick={handleClick}
        className={select__btnClicked === "1" ? "s-btn-clicked" : "s-btn"}
      >
        {btnValue[1]}
      </button>
      <button
        value="2"
        onClick={handleClick}
        className={select__btnClicked === "2" ? "s-btn-clicked" : "s-btn"}
      >
        {btnValue[2]}
      </button>
    </div>
  );
}

export default MainBtn;
