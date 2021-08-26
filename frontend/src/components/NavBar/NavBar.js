import React, { Component } from "react";
import { BrowserRouter, Link, NavLink } from "react-router-dom";
import { Button, Nav, Anchor, Grommet } from "grommet";
import { useSelector } from "react-redux";
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
    textDecoration: "none",
    hover: {
      textDecoration: "underline #FFA500",
      extend: "text-decoration-thickness 5px"
    }
  }
};

const NavBar = ({ islogin, token, onLogin, onLogout }) => {
  return (
    <BrowserRouter>
      <Grommet theme={Theme}>
        {/* header */}
        <header className="header">
          <Nav direction="row">
            <ul className="header__logo">
              <NavLink to="/">JOB-ARCHIVE</NavLink>
            </ul>
            <div className="nav">
              <li className="nav__tag">
                <NavLink to="/api/category/frontend">
                  <Anchor color="black" label="프론트엔드" hover />
                </NavLink>
              </li>
              <li className="nav__tag">
                <NavLink to="/api/category/backend">
                  <Anchor color="black" label="백엔드" hoverIndicator />
                </NavLink>
              </li>
              <li className="nav__tag">
                <NavLink to="/api/category/data">
                  <Anchor color="black" label="AI/데이터분석" hoverIndicator />
                </NavLink>
              </li>
              {islogin}
              {islogin ? (
                <>
                  {" "}
                  <li className="nav__tag">
                    <NavLink to="/api/mypage/profile">
                      <Anchor color="black" label="마이페이지" hoverIndicator />
                    </NavLink>
                  </li>{" "}
                  <li className="header__auth">
                    <NavLink to="/">
                      <Button
                        color="#ffaf00"
                        primary
                        label="Logout"
                        alignSelf="center"
                        onClick={onLogout}
                      />
                    </NavLink>
                  </li>{" "}
                </>
              ) : (
                <li className="header__auth">
                  <NavLink to="/login">
                    <Button
                      color="#ffaf00"
                      primary
                      label="Login"
                      alignSelf="center"
                    />
                  </NavLink>
                </li>
              )}
            </div>
          </Nav>
        </header>
      </Grommet>
    </BrowserRouter>
  );
};

export default NavBar;
