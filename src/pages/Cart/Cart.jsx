import React, { useEffect, useState } from "react";
import { ContentWrapper } from "../../components";
import "./Cart.css";
import CartItem from "./components/CartItem";
import { checkCart } from "../../util/constant";
import Amount from "./components/Amount";

const Cart = () => {
  const [cartData, setCartData] = useState(null);

  useEffect(() => {
    const cart = checkCart();

    if (cart?.length > 0) setCartData(cart);

    return () => null;
  }, []);

  return (
    <div className="Cart">
      <ContentWrapper>
        <p className="title">My Cart</p>
        {cartData || cartData?.length > 0 ? (
          <div className="cartItem-holder">
            <div className="items">
              {cartData?.map((item) => (
                <CartItem key={item?.product?._id} data={item} />
              ))}
            </div>
            <Amount />
          </div>
        ) : (
          <div className="no-data">Data not found!</div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Cart;
