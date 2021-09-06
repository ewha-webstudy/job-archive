import React, { useState, Component } from "react";
import SearchBar from "../SearchBar/SearchBar";
import "../../style/main.css";

function DetailSearch(props) {
  const [btnValue, set_btnValue] = useState(props.category);

  return (
    <>
      <SearchBar btnValue={btnValue} isBtnChecked={true} />
    </>
  );
}

export default DetailSearch;
