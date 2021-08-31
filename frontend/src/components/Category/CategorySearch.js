import React, { useState, Component } from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "../../style/main.css";
import API from "../../utils/api";

function CategorySearch (props){
    
  const [btnValue, set_btnValue] = useState(props.category);

    return (
       <>
        <SearchBar btnValue ={btnValue} isBtnChecked={true} />
       </>
    ); 
}

export default CategorySearch;
