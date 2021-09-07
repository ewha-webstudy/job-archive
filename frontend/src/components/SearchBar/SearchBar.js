import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../../style/main.css";

function SearchBar(props) {
  const [searchTxt, setSearchTxt] = useState("");

  const handleBtnChecked = async e => {
    if (props.isBtnChecked === false) {
      alert("태그를 선택하세요");
      e.preventDefault();
    }
  };

  return (
    <div className="searchbar__container">
      <input
        autoFocus
        name="name"
        type="text"
        onChange={e => setSearchTxt(e.target.value)}
        value={searchTxt}
        className="searchbar__form"
        placeholder="다양한 개발 직군과 채용정보를 검색해보세요!"
      />
      <Link to={`/category/${props.btnValue}/${searchTxt}`}>
        <button
          className="searchbar__btn"
          type="submit"
          onClick={handleBtnChecked}
        >
          <BsSearch color="white" />
        </button>
      </Link>
    </div>
  );
}

export default SearchBar;
