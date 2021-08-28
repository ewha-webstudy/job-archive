import React, { Component } from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import MainBtn from "./Mainbtn";
import "../../style/main.css";
import API from "../../utils/api";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnValue: "", // 클릭한 버튼값 (frontend, backend, data, none 중 하나)
      searchTxt: "", // 사용자가 입력한 검색 값
      isBtnChecked: false, // 버튼 클릭 여부
      isRedirected: false // redirect 여부
    };
  }

  handleInputChange = e => {
    this.setState({
      searchTxt: e.target.value
    });
    // console.log(this.state.searchTxt);
  };

  handleSubmit = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  setBtnValue = btnValue => {
    if (btnValue === "None" || btnValue === undefined) {
      this.setState({
        isBtnChecked: false,
        btnValue: btnValue
      });
    } else {
      this.setState({
        btnValue: btnValue,
        isBtnChecked: true
      });
      console.log("parent btnValue:", this.state.btnValue);
    }
  };

  onSubmit = async e => {
    if (this.state.isBtnChecked === false) {
      console.log(this.state.isBtnChecked);
      alert("태그를 선택하세요");
      e.preventDefault();
    } else {
      console.log(this.state.isBtnChecked);

      await API.post(`/api/category/${this.state.btnValue}`, {
        tags: {
          techStack: [],
          enterTp: [],
          salary: [],
          region: [],
          edubgIcd: []
        },
        searchBar: this.state.searchTxt
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

  render() {
    return (
      <form onSubmit={this.handleSubmit} action="" method="post">
        <MainBtn setBtnValue={this.setBtnValue} />
        <div className="searchbar__container">
          <input
            autoFocus
            name="name"
            type="text"
            onChange={this.handleInputChange}
            value={this.state.searchTxt}
            className="searchbar__form"
            placeholder="다양한 개발 직군과 채용정보를 검색해보세요!"
          />
          <Link to={`/api/category/${this.state.btnValue}`}>
            <button
              className="searchbar__btn"
              type="submit"
              onClick={this.onSubmit}
            >
              <BsSearch color="white" />
            </button>
          </Link>
          <div>{this.state.name}</div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
