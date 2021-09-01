import React, { Component } from "react";
import MainSearch from "../components/SearchBar/MainSearch";
import "../style/main.css";
import { MainCardContainer } from "../containers/CardContainer";

class Main extends Component {
  render() {
    return (
      <>
        <div className="main">
          <div className="main__inner">
            <h1>채용 정보 모음 서비스</h1>
            <MainSearch />
            <br />
            <h5>스크롤을 밑으로 내려 더 많은 정보를 확인해보세요!</h5>
          </div>
        </div>
        <MainCardContainer />
      </>
    );
  }
}
export default Main;
