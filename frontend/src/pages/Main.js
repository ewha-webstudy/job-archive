import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import SearchBar from "../components/SearchBar/SearchBar";
import Label from "../components/Label/Label";
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
      <div>
        <header>
          <NavBar />
        </header>
        <div className="container">
          <h1>채용 정보 모음 서비스</h1>
          <SearchBar />
          <Label />
        </div>
        <Link to='/category'></Link>
      </div>
    );
  }
}
export default Main;
