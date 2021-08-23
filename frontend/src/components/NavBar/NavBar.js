import React, { Component } from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
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
  constructor(props) {
    super(props);
    this.state = {
      logged: this.props.logged
    };
    //console.log("logged", this.state.logged);
  }
  
  // TODO: 로그인 상태에 따라 로그아웃, 마이페이지 렌더링
  render() {
    return (
       <BrowserRouter>
        <Grommet theme={Theme}>
           <header className="menu">
            <Nav direction="row">
              <ul className="home">
                <NavLink to="/">JOB-ARCHIVE</NavLink>
              </ul>

              <li>
                <NavLink to="/api/category/frontend">
                  <Anchor color="black" label="프론트엔드" hover />
                </NavLink>
              </li>
              <li>
                <NavLink to="/api/category/backend">
                  <Anchor color="black" label="백엔드" hoverIndicator />
                </NavLink>
              </li>
              <li>
                <NavLink to="/api/category/data">
                  <Anchor color="black" label="AI/데이터분석" hoverIndicator />
                </NavLink>
              </li>
              <li>
                <NavLink to="/login">
                  <Button
                    color="#ffaf00"
                    primary
                    label="Login"
                    alignSelf="center"
                  />
                </NavLink>
              </li>
            </Nav>
          </header>
        </Grommet>
      </BrowserRouter>
    );
  }
}

export default NavBar;
