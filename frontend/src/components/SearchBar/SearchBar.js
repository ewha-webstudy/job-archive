import React, { Component } from "react";
import { BsSearch } from "react-icons/bs";
import MainBtn from "./Mainbtn";
import "../../style/main.css";
import API from "../../utils/api";
import styled from "styled-components";

const Container = styled.div`
  user-select: none;
  margin: 0 0 20px 0;
  position: relative;
  display: flex;
  align-items: center;
`;

class SearchBar extends Component {
  state = {
    btnValue: "",
    searchTxt: "",
    isBtnChecked: false
  };

  handleChange = e => {
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
    if (btnValue === "None") {
      this.setState({
        isBtnChecked: false,
        btnValue: btnValue
      });
    } else {
      this.setState({
        btnValue: btnValue,
        isBtnChecked: true
      });
      console.log("parent btnValue:", btnValue);
    }
  };

  /* componentDidUpdate에서 setState 호출하면 무한 렌더링 됨
  componentDidUpdate() {
    console.log("parent:", this.state.btnValue);
  }
  */

  onSubmit = async () => {
    if (this.state.isBtnChecked === false) {
      console.log(this.state.isBtnChecked);
      alert("태그를 선택하세요");
    } else {
      console.log(this.state.isBtnChecked);

      await API.post("/api/category/" + this.state.btnValue + "/search", {
        tags: {},
        searchBar: this.state.searchTxt
      })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} name="input" action="" method="get">
        <MainBtn setBtnValue={this.setBtnValue} />

        <div className="search-bar-container">
          <input
            autoFocus
            name="name"
            type="text"
            onChange={this.handleChange}
            value={this.state.searchTxt}
            className="form-content-left"
            placeholder="다양한 개발 직군과 채용정보를 검색해보세요!"
          />
          <button
            className="search-button"
            type="submit"
            onClick={this.onSubmit}
          >
            <BsSearch color="white" />
          </button>
          <div>{this.state.name}</div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
