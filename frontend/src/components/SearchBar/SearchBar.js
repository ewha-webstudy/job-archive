import React, { Component } from "react";
import { BsSearch } from "react-icons/bs";
import "../../style/main.css";

class SearchBar extends Component {
  state = {
    name: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} name="input" action="" method="get">
        <div className="search-bar-container">
          <input
            autofocus
            name="name"
            type="text"
            onChange={this.handleChange}
            value={this.state.name}
            className="form-content-left"
            placeholder="다양한 개발 직군과 채용정보를 검색해보세요!"
          />
          <button className="search-button" type="submit">
            <BsSearch color="white" />
          </button>
          <div>{this.state.name}</div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
