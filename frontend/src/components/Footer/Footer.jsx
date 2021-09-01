import React from "react";
import Scroll from "react-scroll";
import { Button } from "grommet";
import "../../style/main.css";

function Footer() {
  const scroll = Scroll.animateScroll;
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="footer">
      <h3>채용정보 모음 서비스 </h3>
      <div>
        <a href="https://github.com/ewha-webstudy">
          <i className="fab fa-github" />
        </a>
      </div>
      <br />
      <div>
        <Button onClick={scrollToTop} label="위로 올라가기" color={"black"} />
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
