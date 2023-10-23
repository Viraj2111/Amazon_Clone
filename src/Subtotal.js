import React from "react";
import { useNavigate } from "react-router-dom";
import { getBasketTotal } from "./reducer";
import { useStatevalue } from "./StateProvider";
import "./Subtotal.css";
const CurrencyFormat = require("react-currency-format");

const Subtotal = () => {
  const [{ basket } , dispatch] = useStatevalue();
  const navigate = useNavigate();
  const handleCheckout = () =>{
    navigate('/payment')
  }
  return (
    <div className="subtotal">
      <CurrencyFormat
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        renderText={(value) => (
          <>
            <p className="subtotal_items">
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        value={getBasketTotal(basket)}
      />
      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
