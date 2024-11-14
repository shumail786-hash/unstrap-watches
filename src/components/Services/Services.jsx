import React from "react";
import "./Services.css";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import { TfiWorld } from "react-icons/tfi";
import { LiaAwardSolid } from "react-icons/lia";
import { RiLoopLeftFill } from "react-icons/ri";
import { GiRecycle } from "react-icons/gi";

const Services = () => {
  return (
    <div className="services">
      <ContentWrapper>
        <p className="">
          <TfiWorld /> Free Worldwide Shipping
        </p>
        <p className="">
          <LiaAwardSolid /> 1-Year Warranty
        </p>
        <p className="">
          <RiLoopLeftFill /> 30 - Day Returns & Exchanges
        </p>
        <p className="">
          <GiRecycle /> 24/7 Customer Support
        </p>
      </ContentWrapper>
    </div>
  );
};

export default Services;
