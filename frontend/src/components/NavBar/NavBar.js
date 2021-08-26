import React, { Component } from "react";
import { BrowserRouter, Link, NavLink } from "react-router-dom";
import { Button, Nav, Anchor, Grommet } from "grommet";
import { useSelector } from "react-redux";
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
    textDecoration: "none",
    hover: {
      textDecoration: "underline #FFA500",
      extend: "text-decoration-thickness 5px",
    },
  },
};

const NavBar = ({ islogin, token, onLogin, onLogout }) => {
  return (
    <BrowserRouter>
      <Grommet theme={Theme}>
        <header className="header">
          <Nav direction="row">
            <ul className="header__logo">
              <Anchor href="/" label="JOB-ARCHIVE" />
            </ul>
            <div className="nav">
              <li className="nav__tag">
                <Anchor
                  href="/api/category/frontend"
                  color="black"
                  label="프론트엔드"
                  hover
                />
              </li>
              <li className="nav__tag">
                <Anchor
                  href="/api/category/backend"
                  color="black"
                  label="백엔드"
                  hoverIndicator
                />
              </li>
              <li className="nav__tag">
                <Anchor
                  href="/api/category/data"
                  color="black"
                  label="AI/데이터분석"
                  hoverIndicator
                />
              </li>
              {islogin}
              {islogin ? (
                <>
                  {" "}
                  <li className="nav__tag">
                    <Anchor
                      href="/api/mypage/profile"
                      color="black"
                      label="마이페이지"
                      hoverIndicator
                    />
                  </li>{" "}
                  <li className="header__auth">
                    <Button
                      href="/"
                      color="#ffaf00"
                      primary
                      label="Logout"
                      alignSelf="center"
                      onClick={onLogout}
                    />
                  </li>{" "}
                </>
              ) : (
                <li className="header__auth">
                  <Button
                    href="/login"
                    color="#ffaf00"
                    primary
                    label="Login"
                    alignSelf="center"
                  />
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
