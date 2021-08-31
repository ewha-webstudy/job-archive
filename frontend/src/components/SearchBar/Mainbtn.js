import React, { useState, useEffect } from "react";
import "../../style/main.css";
import styled from "styled-components";

function MainBtn({ setBtnValue }) {
  const btn_value = [
    { id: "frontend", name: "프론트엔드", value: "0" },
    { id: "backend", name: "백엔드", value: "1" },
    { id: "data", name: "AI/데이터분석", value: "2" },
    { id: "None", name: "None", value: "3" }
  ];

  const [select__btnClicked, setselect__btnClicked] = useState("3");

  useEffect(() => {
    setBtnValue(btn_value[select__btnClicked]["id"]);
  }, [select__btnClicked]);

  const handleClick = e => {
    e.preventDefault();

    switch (e.target.value) {
      case select__btnClicked:
        setselect__btnClicked("3");
        break;
      default:
        setselect__btnClicked(e.target.value);
        break;
    }
  };

  return (
    <Btns>
      {btn_value.map(btn => {
        return btn.id !== "None" ? (
          <button
            value={btn.value}
            onClick={handleClick}
            className={
              select__btnClicked === btn.value
                ? "btn__search--clicked"
                : "btn__search"
            }
          >
            {btn.name}
          </button>
        ) : null;
      })}
    </Btns>
  );
}

const Btns = styled.div`
  user-select: none;
  margin: 0 0 20px 0;
  justify-content: space-between;
  position: relative;
  display: flex;
  align-items: center;
`;

export default MainBtn;
