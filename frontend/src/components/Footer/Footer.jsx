import React from "react";
import Scroll, {Link as ScrollLink} from "react-scroll";
import { Link } from "react-router-dom";
import { Button, Grommet } from "grommet";
import "../../style/main.css";

function Footer() {
  const scroll = Scroll.animateScroll;
    const scrollToTop= ()=> {
      scroll.scrollToTop();
    }


  return (
    <div className="footer">
      <h3>채용정보 모음 서비스 </h3>
      <div>
        <a href="https://github.com/ewha-webstudy">
        <i class="fab fa-github"/>
        </a>
        </div>
        <br/>
      <div>
      <Button onClick={scroll.scrollToTop} label="위로 올라가기"/>
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
