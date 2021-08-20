import React, { Component } from "react";
import { HashRouter, Link } from "react-router-dom";
import { Header, Button, Nav, Anchor, Grommet } from "grommet";
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
    }
  }
};

class NavBar extends Component {
  render() {
    return (
      <HashRouter>
        <Grommet theme={Theme}>
          <header className="menu">
            <Nav direction="row">
              <ul>
                <Link to="/" className="home">
                  JOB-ARCHIVE
                </Link>
              </ul>
              <li>
                <Anchor color="black" label="프론트엔드" hover />
              </li>
              <li>
                <Anchor color="black" label="백엔드" hoverIndicator />
              </li>
              <li>
                <Anchor color="black" label="AI/데이터분석" hoverIndicator />
              </li>
              <li>
                <Button
                  color="#ffaf00"
                  primary
                  label="Login"
                  alignSelf="center"
                />
              </li>
            </Nav>
          </header>
        </Grommet>
      </HashRouter>
    );
  }
}

export default NavBar;
