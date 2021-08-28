import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Button, Nav, Anchor, Grommet } from "grommet";
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
    color: "black",
  },
};

const NavBar = ({ islogin, onLogout }) => {
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
                <Anchor href="/category/frontend" label="프론트엔드" />
              </li>
              <li className="nav__tag">
                <Anchor href="/category/backend" label="백엔드" />
              </li>
              <li className="nav__tag">
                <Anchor href="/category/data" label="AI/데이터분석" />
              </li>
              {islogin ? (
                <>
                  <li className="nav__tag">
                    <Anchor href="/mypage/profile" label="마이페이지" />
                  </li>
                  <li className="header__auth">
                    <Button
                      href="/"
                      color="#ffaf00"
                      primary
                      label="Logout"
                      alignSelf="center"
                      onClick={onLogout}
                    />
                  </li>
                </>
              ) : (
                <li className="header__auth">
                  <Button
                    href="/member/auth"
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
