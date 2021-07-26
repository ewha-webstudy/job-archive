import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBar";
import SearchBar from "../components/SearchBar/SearchBar";
import Label from "../components/Label/Label";
import "../style/main.css";

class Main extends Component {
  render() {
    return (
      <div>
        <header>
          <NavBar />
        </header>
        <div className="container">
          <h1>채용 정보 모음 서비스</h1>
          <SearchBar />
          <Label />
        </div>
      </div>
    );
  }
}
export default Main;
