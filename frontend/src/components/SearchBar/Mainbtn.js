import React, { useState, useEffect } from "react";
import "../../style/main.css";
import styled from "styled-components";

const Btns = styled.div`
  user-select: none;
  margin: 0 0 20px 0;
  position: relative;
  display: flex;
  align-items: center;
`;

function MainBtn({ setBtnValue }) {
  const btnValue = ["프론트엔드", "백엔드", "데이터분석", "None"];
  const send__btnValue = ["frontend", "backend", "data", "None"];
  const [select__btnClicked, setselect__btnClicked] = useState("");

  useEffect(() => {
    setBtnValue(send__btnValue[select__btnClicked]);
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
    <Btns>
      <button
        value="0"
        onClick={handleClick}
        className={
          select__btnClicked === "0" ? "btn__search--clicked" : "btn__search"
        }
      >
        {btnValue[0]}
      </button>
      <button
        value="1"
        onClick={handleClick}
        className={
          select__btnClicked === "1" ? "btn__search--clicked" : "btn__search"
        }
      >
        {btnValue[1]}
      </button>
      <button
        value="2"
        onClick={handleClick}
        className={
          select__btnClicked === "2" ? "btn__search--clicked" : "btn__search"
        }
      >
        {btnValue[2]}
      </button>
    </Btns>
  );
}

export default MainBtn;
