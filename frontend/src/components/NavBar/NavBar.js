import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Button, Nav, Anchor, Grommet } from "grommet";
import "../../style/main.css";

const Theme = {
  global: {
    color: "white"
  },
  button: {
    color: "white",
    alignSelf: "center"
  },
  anchor: {
    hover: {
      textDecoration: "underline #FFA500",
      extend: "text-decoration-thickness 5px"
    },
    textDecoration: "none"
  }
};

class NavBar extends Component {
  render() {
    return (
       <BrowserRouter>
        <Grommet theme={Theme}>
          <header className="menu">
            <Nav direction="row">
              <ul>
                <ul className="home">
                  <Link to="/">JOB-ARCHIVE</Link>
                </ul>
              </ul>
              <li>
                <Link to="/api/category/frontend">
                  <Anchor color="black" label="프론트엔드" hover />
                </Link>
              </li>
              <li>
                <Link to="/api/category/backend">
                  <Anchor color="black" label="백엔드" hoverIndicator />
                </Link>
              </li>
              <li>
                <Link to="/api/category/data">
                  <Anchor color="black" label="AI/데이터분석" hoverIndicator />
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <Button
                    color="#ffaf00"
                    primary
                    label="Login"
                    alignSelf="center"
                  />
                </Link>
              </li>
            </Nav>
          </header>
        </Grommet>
      </BrowserRouter>
    );
  }
}

export default NavBar;
