import React, { useState } from "react";
import SearchBar from "./SearchBar";
import MainBtn from "./Mainbtn";
import "../../style/main.css";

function MainSearch() {
  const [btnValue, set_btnValue] = useState("");
  const [isBtnChecked, set_isBtnChecked] = useState("");

  const setBtnValue = btnValue => {
    if (btnValue === "None" || btnValue === undefined) {
      set_btnValue(btnValue);
      set_isBtnChecked(false);
    } else {
      set_btnValue(btnValue);
      set_isBtnChecked(true);
    }
  };

  return (
    <>
      <MainBtn setBtnValue={setBtnValue} />
      <SearchBar btnValue={btnValue} isBtnChecked={isBtnChecked} />
    </>
  );
}

export default MainSearch;
