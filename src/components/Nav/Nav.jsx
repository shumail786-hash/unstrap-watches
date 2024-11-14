import React, { useEffect, useState } from "react";
import "./Nav.css";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch, BsPerson } from "react-icons/bs";
import { RiShoppingCartLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import { checkCart } from "../../util/constant";

const Nav = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const [cartt, setCartt] = useState(false);

  // const cartRef = useRef();

  const { pathname } = useLocation();

  const navigate = useNavigate();

  const navMenuToggle = () => {
    setIsNavActive(!isNavActive);
  };

  const clickOnMenuItem = (e) => {
    navigate(e);
    setIsNavActive(false);
  };

  const cart = checkCart();
  useEffect(() => {
    // if (cart.length > 0) {
    //   cartRef.current.style.backgroundColor = "red";
    //   setCartt(!cartt);
    // }

    window.scrollTo(0, 0);

    return () => null;
  }, [pathname]);

  return (
    <div className="nav">
      <ContentWrapper>
        <div className="brand" onClick={() => clickOnMenuItem("/")}>
          <span>UNSTRAP</span>
        </div>
        <ul className={`${isNavActive && "nav-list-active"} nav-list`}>
          <li
            className={`nav-item ${pathname === "/" && "nav-active"}`}
            onClick={() => clickOnMenuItem("/")}
          >
            home
          </li>
          <li
            className={`nav-item ${pathname === "/shop" && "nav-active"}`}
            onClick={() => clickOnMenuItem("/shop")}
          >
            shop
          </li>
          <li
            className={`nav-item ${pathname === "/about" && "nav-active"}`}
            onClick={() => clickOnMenuItem("/about")}
          >
            about
          </li>
          <li
            className={`nav-item ${
              pathname === "/testimonial" && "nav-active"
            }`}
            onClick={() => clickOnMenuItem("/testimonial")}
          >
            testimonial
          </li>
          <li
            className={`nav-item ${pathname === "/faq" && "nav-active"}`}
            onClick={() => clickOnMenuItem("/faq")}
          >
            faq
          </li>
        </ul>
        <div style={{ display: "flex", gap: "1rem" }}>
          <div className="nav-icons-wrapper">
            {/* <BsSearch /> <BsPerson /> */}
            <div className="cart" onClick={() => clickOnMenuItem("/cart")}>
              <div style={{ background: `${cart.length > 0 && "red"}` }}>
                {cart.length > 0 && cart.length}
              </div>
              <RiShoppingCartLine />
            </div>
          </div>
          <div className="menu-btn">
            <GiHamburgerMenu className="icon" onClick={navMenuToggle} />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Nav;
