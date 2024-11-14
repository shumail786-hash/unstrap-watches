import React, { useEffect, useState } from "react";
import Button from "../../../components/Button/Button";
import { checkCart } from "../../../util/constant";

const Amount = () => {
  const [totalAmount, setTotalAmount] = useState(null);

  useEffect(() => {
    const cart = checkCart();
    let amount = 0;
    if (cart.length > 0) {
      for (let i = 0; i < cart.length; i++) {
        let price = cart[i].product.price;
        amount += price * cart[i].qty;
      }
    }

    setTotalAmount(amount);

    return () => null;
  }, []);

  return (
    <div className="Amount">
      <div className="total">
        <span>Total</span>
        <p className="price">${totalAmount}</p>
      </div>
      {/* <div> */}
      <Button
        val="check out"
        onClick={() => alert("Working on this feature")}
      />
      {/* </div> */}
    </div>
  );
};

export default Amount;
