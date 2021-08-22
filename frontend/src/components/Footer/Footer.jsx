import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import "../../style/main.css";

function Footer() {
  return (
    <div id="subscribe">
      <h3>채용정보 모음 서비스 </h3>
      <div className="footer-social">
        <a href="https://github.com/ewha-webstudy">
          <p>github</p>
        </a>
      </div>
      <div className="footer">
        <Link to="/" smooth={true}>
          <p>Home</p>
        </Link>

        <ScrollLink to="신규채용공고">
          <p>Projects</p>
        </ScrollLink>
      </div>
      <p className="footer-p">
        Team ewha | Made using React{" "}
        <span role="img" aria-label="atom">
          ⚛️
        </span>
      </p>
    </div>
  );
}

export default Footer;
