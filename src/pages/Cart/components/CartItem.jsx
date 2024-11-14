import React, { useEffect, useState } from "react";
import { LazyImg } from "../../../components";
import { checkCart } from "../../../util/constant";
import { useNavigate } from "react-router-dom";

const CartItem = ({ data }) => {
  const [details, setDetails] = useState(data);

  const navigate = useNavigate();

  const onInc = () => {
    let cart = checkCart();

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].product._id === details.product._id) {
        cart[i].qty = cart[i].qty + 1;
      }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setDetails((prev) => ({ ...prev, qty: prev.qty + 1 }));
  };

  const onDec = () => {
    let cart = checkCart();

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].product._id === details.product._id) {
        if (cart[i].qty > 1) cart[i].qty = cart[i].qty - 1;
      }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    if (details.qty > 1) setDetails((prev) => ({ ...prev, qty: prev.qty - 1 }));
  };

  return (
    <div className="cartItem">
      <div className="img-holder">
        <LazyImg src={details?.product?.image} />
      </div>
      <div className="other">
        <p
          className="name"
          onClick={() => navigate(`/product/${details?.product?._id}`)}
        >
          {details?.product?.productName}
        </p>
        <div className="price-container">
          <p className="price">${details?.product?.price}</p>
          <div className="qty-container">
            <button onClick={onDec}>-</button>
            <span className="qty">{details?.qty}</span>
            <button onClick={onInc}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
