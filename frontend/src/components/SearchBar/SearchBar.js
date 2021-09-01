import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../../style/main.css";
import API from "../../utils/api";

function SearchBar(props) {
  const [searchTxt, setSearchTxt] = useState("");

  const handleInputChange = e => {
    setSearchTxt(e.target.value);
  };

  const data = {
    tags: {
      techStack: [],
      enterTp: [],
      salary: [],
      region: [],
      edubgIcd: []
    },
    searchBar: searchTxt
  };

  const onSubmit = async e => {
    if (props.isBtnChecked === false) {
      alert("태그를 선택하세요");
      e.preventDefault();
    } else {
      await API.post(`/api/category/${props.btnValue}`, data)
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
    <form action="" method="post">
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
          <button className="searchbar__btn" type="submit" onClick={onSubmit}>
            <BsSearch color="white" />
          </button>
        </Link>
      </div>
    </form>
  );
}

export default SearchBar;
