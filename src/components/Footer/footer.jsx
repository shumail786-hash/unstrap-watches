import React, { useState } from "react";
import "./footer.css";
import { toast } from "react-toastify";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
const Footer = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOffersSubscribe = () => {
    let reg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/;

    if (!reg.test(email)) toast.error("Please check your email address");
    else toast.success("Subscribed!");
  };
  const aboutLink = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Shop",
      path: "/shop",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Testimonial",
      path: "/testimonial",
    },
    { name: "FAQ", path: "/faq" },
  ];
  return (
    <div id="footer">
      <div className="footer_section">
        <div className="footer_section_company">
          <h1>UNSTRAP</h1>
          <p>
            We are the bunch of people that love our Apple Watch and all its
            features but we also know at times it can feel mass produced and
            lack personality.
          </p>
        </div>
        <div className="footer_section_links">
          <div className="footer_aboutLinks">
            <h4>ABOUT US</h4>
            {/* About US Links */}
            <ul className="footer_about_ul">
              {aboutLink.map((item, index) => (
                <li key={item.name}>
                  <NavLink to={item.path}>{item.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Links Start */}
          <div className="footer_contactLinks">
            <h4>CONTACT US</h4>
            <ul className="footer_about_ul">
              {[
                "Email - info@unstrap.com",
                "Timing - 11am - 8pm HKT",
                "Monday - Friday (except public Holidays)",
              ].map((element, index) => (
                <li key={index}>{element}</li>
              ))}
            </ul>
          </div>
          {/* Contact Us Section End */}
          <div className="footer_section_offers">
            <h4>Get 10% OFF</h4>
            <p>
              Sign up to enjoy early access to our latest drops, exculsive
              offers and 10% all your first order with us! Do not miss the
              oopoertunity to avail discounts on new sales
            </p>
            <div className="footer_section_input">
              <input
                type="email"
                placeholder="Your Email"
                required
                onChange={handleChange}
              />
              <Button
                val={"Subscribe"}
                style={{
                  background: "var(--clr-black)",
                  color: "white",
                }}
                onClick={handleOffersSubscribe}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
