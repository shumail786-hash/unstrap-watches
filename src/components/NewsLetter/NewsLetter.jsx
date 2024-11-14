import React, { useState } from "react";
import "./NewsLetter.css";
import Button from "../Button/Button";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import Img from "../LazyImg/Img";
import { NEWS_LETTER_IMG } from "../../util/constant";
import { toast } from "react-toastify";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let reg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/;

    if (!reg.test(email)) toast.error("Please check your email address");
    else toast.success("Subscribed!");
  };

  return (
    <div className="newsLetter">
      <ContentWrapper>
        <div className="news-left">
          <h3>GET 10% OFF NOW</h3>
          <p>
            Become a member of our community and to enjoy early access, latest
            drops, exclusive offers and 10% off your first order with us.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="news-input-wrapper">
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Your Email"
                onChange={handleChange}
              />
              <Button val="Subscribe" />
            </div>
          </form>
        </div>
        <div className="news-right">
          <div className="img-holder">
            <Img src={NEWS_LETTER_IMG} />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default NewsLetter;
