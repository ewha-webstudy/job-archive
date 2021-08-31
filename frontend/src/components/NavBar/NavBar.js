import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Button, Box, Text, Nav, Grommet } from "grommet";
import "../../style/main.css";

const Theme = {
  global: {
    color: "white"
  },
  button: {
    color: "white",
    alignSelf: "center"
  }
};

const NavbarButton = ({ label, href, ...rest }) => {
  return (
    <a
      className={
        window.location.pathname === href ? "nav__tag--active" : "nav__tag"
      }
      href={href}
    >
      {label}
    </a>
  );
};

const navMenu = [
  { id: "frontend", title: "프론트엔드" },
  { id: "backend", title: "백엔드" },
  { id: "data", title: "AI/데이터분석" }
];

const NavBar = ({ islogin, onLogout }) => {
  return (
    <Grommet theme={Theme}>
      <header className="header">
        <Nav direction="row">
          <ul className="header__logo">
            <a href="/">JOB-ARCHIVE</a>
          </ul>
          <div className="nav">
            {navMenu.map(nav => {
              return (
                <NavbarButton
                  key={nav.id}
                  label={nav.title}
                  href={`/category/${nav.id}`}
                />
              );
            })}
            {islogin ? (
              <>
                <a className="nav__tag" href="/mypage/profile">
                  마이페이지
                </a>
                <Button
                  href="/"
                  color="#ffaf00"
                  primary
                  label="Logout"
                  alignSelf="center"
                  onClick={onLogout}
                />
              </>
            ) : (
              <Button
                href="/member/auth"
                color="#ffaf00"
                primary
                label="Login"
                alignSelf="center"
              />
            )}
          </div>
        </Nav>
      </header>
    </Grommet>
  );
};

export default NavBar;
