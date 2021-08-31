import React, { useState, Component } from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import MainBtn from "./Mainbtn";
import "../../style/main.css";
import API from "../../utils/api";

function MainSearch (){
    
  const [btnValue, set_btnValue] = useState("");
  const [isBtnChecked, set_isBtnChecked] = useState("");

  // Mainbtn에서 btn값 받아오기
  const setBtnValue = btnValue => {
    if (btnValue === "None" || btnValue === undefined) {
        set_btnValue(btnValue);
        set_isBtnChecked(false);
    } else {
        set_btnValue(btnValue);
        set_isBtnChecked(true);
    }
    console.log("parent btnValue:", btnValue);
  };


    // console.log("searchbar한테 내려주는 btnValue:", btnValue);
    // console.log("searchbar한테 내려주는 isBtnChecked:", isBtnChecked);
    return (
       <>
        <MainBtn setBtnValue={setBtnValue} />
        <SearchBar btnValue ={btnValue} isBtnChecked={isBtnChecked} />
       </>
    );
  
}

export default MainSearch;
