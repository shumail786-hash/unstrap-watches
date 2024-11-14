import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Details = ({ data }) => {
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();

  const inc = () => {
    setQuantity((prev) => prev + 1);
  };

  const dec = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const productHas = cart.filter((item) => item.product._id === data?._id);

    if (productHas.length > 0) {
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].product._id === productHas[0].product._id) {
          cart[i].qty = cart[i].qty + quantity;
        }
      }
      // cart.push(updateProduct);
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      cart.push({ product: data && data, qty: quantity });
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    toast.success("Product added!");
    setTimeout(() => {
      navigate("/cart");
    }, 500);
  };

  return (
    <div className="details">
      <div className="">
        <h3 className="title">{data?.productName}</h3>

        <p className="price">${data?.price}</p>
      </div>
      <p className="desc">{data?.description.substr(0, 60)}</p>
      <div className="quantity-container">
        <p>
          Quantity: <span>{quantity}</span>
        </p>
        <div>
          <button onClick={dec}>-</button>
          <button onClick={inc}>+</button>
        </div>
      </div>

      <div className="button">
        <Button val="Add to Cart" onClick={addToCart} />
      </div>
    </div>
  );
};

export default Details;
