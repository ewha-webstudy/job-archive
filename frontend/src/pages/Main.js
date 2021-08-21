import React, { Component } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import { Link as ScrollLink } from "react-scroll";
import Maincard from "./Maincard";

import "../style/main.css";

import axios from "axios";

class Main extends Component {
  state = {
    loading: false,
    latestJob: []
  };
  loadLatest = async() => {
    axios
    .get('/api/main')
    .then(({data}) => {
      this.setState({
        loading: true,
        latestJob: data
      });
    })
    .catch(e => {
      console.error(e);
      this.setState({
        loading: false,
      });
    });
  };

  componentDidMount() {
    this.loadLatest();
  }

  render() {
    const { latestJob } = this.state;
    console.log(latestJob);
    
    return (
      <>
        <div className="main">
          <div className="main-container">
            <h1>채용 정보 모음 서비스</h1>
            <SearchBar />
            <br />
            <h5>스크롤을 밑으로 내려 더 많은 정보를 확인해보세요!</h5>
            {/* 화살표 */}
          </div>
        </div>
        <Maincard />
      </>
    );
  }
}
export default Main;
