import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "./axios";
import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, Navigate, useNavigate } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { getBasketTotal } from "./reducer";
import { useStatevalue } from "./StateProvider";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStatevalue();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [succeeded , setSucceeded] = useState(false);
  const [processing , setProcessing] = useState('');
  const [clientSecret , setClientSecret] = useState(true);
  useEffect(() =>{
    const getClientSecret = async () =>{
      const response = await axios({
        method:"POST",
        url:`/payments/create?total=${getBasketTotal(basket) * 100}`
      })
      setClientSecret(response.data.clientSecret)
    }
    getClientSecret();
  },[basket])
  console.log("client secreat" , clientSecret)
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true)
    const payload = await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) =>{
      // paymentIntent = payment confirmation
      setSucceeded(true);
      setError(null);
      setProcessing(false);
      navigate('/orders')
    })
  };
  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event?.error ? event.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>A1-109, SNN RAJ GRRENBAY</p>
            <p>Next to Tech Mahindra</p>
            <p>Electronic-city phase-2, karnataka, banglore, 560100</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  decimalScale={2}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  renderText={(value) => (
                      <h3>
                        Order Total : {value}
                      </h3>
                  )}
                  value={getBasketTotal(basket)}
                />
                <button disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
