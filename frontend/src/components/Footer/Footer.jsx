import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import "../../style/main.css";

function Footer() {
  return (
    <div className="footer">
      <h3>채용정보 모음 서비스 </h3>
      <div className="footer--github">
        <a href="https://github.com/ewha-webstudy">
          <p>github</p>
        </a>
      </div>
      <div className="footer__navigation">
        <Link to="/" smooth={"true"}>
          <p>Home</p>
        </Link>

        <ScrollLink to="신규채용공고">
          <p>Projects</p>
        </ScrollLink>
      </div>
      <p className="footer__service-name">
        Team ewha | Made using React{" "}
        <span role="img" aria-label="atom">
          ⚛️
        </span>
      </p>
    </div>
  );
}

export default Footer;
