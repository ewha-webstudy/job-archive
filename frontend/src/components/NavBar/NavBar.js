import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import { Header, Button, Nav, Anchor, Grommet } from "grommet";
import "../../style/main.css";

const Theme = {
  global: {
    color: "white",
  },
  button: {
    color: "white",
    alignSelf: "center",
  },
  anchor: {
    hover: {
      textDecoration: "underline #FFA500",
      extend: "text-decoration-thickness 5px",
    },
  },
};

class NavBar extends Component {
  render() {
    return (
      <HashRouter>
        <Grommet theme={Theme}>
          <Header background="#FFFCF9">
            <h3>JOB-ARCHIVE</h3>
            <Nav direction="row" background="#FFFCF9">
              <Anchor color="black" label="프론트엔드" hover />
              <Anchor color="black" label="백엔드" hoverIndicator />
              <Anchor color="black" label="AI/데이터분석" hoverIndicator />
              <Button
                color="#ffaf00"
                primary
                label="Login"
                alignSelf="center"
              />
            </Nav>
          </Header>
        </Grommet>
      </HashRouter>
    );
  }
}

export default NavBar;
