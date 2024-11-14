import React from "react";
import "./Hero.css";
import Img from "../LazyImg/Img";
import { HERO_IMG } from "../../util/constant";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import { AiFillStar } from "react-icons/ai";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-img-holder">
        <Img src={HERO_IMG} alt="hero img" />
      </div>
      <ContentWrapper>
        <div className="hero-content">
          <h3>
            Upscale Elegance
            <br />
            For Your Apple Watch
          </h3>
          <span>
            {[1, 2, 3, 4, 5].map((item) => (
              <AiFillStar key={item} style={{ color: "orange" }} />
            ))}{" "}
            <span>4.8/5 RATING FROM 7000+ SATISFIED CUSTOMERS</span>
          </span>
          {/* <div className="hero-btns-wrapper">
            <Button val="Men's" style={{ width: "6rem" }} />
            <Button
              val="Women's"
              className={"secondary"}
              style={{ width: "6rem" }}
            />
          </div> */}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Hero;
