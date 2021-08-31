import React, { Component,  useState} from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../../style/main.css";
import API from "../../utils/api";

function SearchBar (props) {
  console.log("props:",props.btnValue);

  const [searchTxt, set_searchTxt] = useState("");

  const handleInputChange = e => {
    set_searchTxt(e.target.value);
  };

  const onSubmit = async e => {
    if (props.isBtnChecked === false) {
      alert("태그를 선택하세요");
      e.preventDefault();
    } else {
      await API.post(`/api/category/${props.btnValue}`, {
        tags: {
          techStack: [],
          enterTp: [],
          salary: [],
          region: [],
          edubgIcd: []
        },
        searchBar: searchTxt
      })
        .then(res => {
          console.log(res.status);
        })
        .catch(error => {
          if (error.response.status === 404) {
            console.error(error);
          }
        });
    }
  };

    return (
      <form  action="" method="post">
        <div className="searchbar__container">
          <input
            autoFocus
            name="name"
            type="text"
            onChange={handleInputChange}
            value={searchTxt}
            className="searchbar__form"
            placeholder="다양한 개발 직군과 채용정보를 검색해보세요!"
          />
          <Link to={`/category/${props.btnValue}`}>
            <button
              className="searchbar__btn"
              type="submit"
              onClick={onSubmit}
            >
              <BsSearch color="white" />
            </button>
          </Link>
        </div>
      </form>
    );
  
}

export default SearchBar;
