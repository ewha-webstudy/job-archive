import React, { Component } from "react";
import { BsSearch } from "react-icons/bs";
import { Redirect, Route } from "react-router";
import { Link } from "react-router-dom";
import MainBtn from "./Mainbtn";
import "../../style/main.css";
import API from "../../utils/api";
import styled from "styled-components";

/* 
const Container = styled.div`
  user-select: none;
  margin: 0 0 20px 0;
  position: relative;
  display: flex;
  align-items: center;
`;
*/

class SearchBar extends Component {
  state = {
    btnValue: "", // 클릭한 버튼값 (frontend, backend, data, none 중 하나)
    searchTxt: "", // 사용자가 입력한 검색 값
    isBtnChecked: false, // 버튼 클릭 여부
    isRedirected: false // redirect 여부
  };
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
    // 초기 상태나 버튼 클릭 해지할 때, isBtnChecked: false
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

  /* componentDidUpdate에서 setState 호출하면 무한 렌더링 됨
  componentDidUpdate() {
    console.log("parent:", this.state.btnValue);
  }
  */

  // 서버로 버튼 값, 검색 값 제출
  onSubmit = async e => {
    if (this.state.isBtnChecked === false) {
      console.log(this.state.isBtnChecked);
      alert("태그를 선택하세요");
      e.preventDefault();
    } else {
      console.log(this.state.isBtnChecked);

      await API.post(`/api/category/${this.state.btnValue}`, {
        tags: {},
        searchBar: this.state.searchTxt
      })
        .then(res => {
          console.log(res);

          // 서버 HTTP 상태 코드
          if (res.status === 200) {
            this.setState({ isRedirected: true });
          } else {
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} action="" method="post">
        <MainBtn setBtnValue={this.setBtnValue} />
        {/*</form>{this.state.isRedirected && (
          <Link to={`/api/category/${this.state.btnValue}`} />
        )}*/}
        <div className="search-bar-container">
          <input
            autoFocus
            name="name"
            type="text"
            onChange={this.handleInputChange}
            value={this.state.searchTxt}
            className="form-content-left"
            placeholder="다양한 개발 직군과 채용정보를 검색해보세요!"
          />
          <Link to={`/api/category/${this.state.btnValue}`}>
            <button
              className="search-button"
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
