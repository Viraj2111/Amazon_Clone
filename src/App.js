import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStatevalue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51MWXnzSDF8MJHvR4MU7L4OSPTAZIuiC1pxgCww87G9dvHLlRf9HNLIlVljZVd3XiE9Uzb9tm7u6nBrwKOhIpZ7Ym00ZIGayXgQ')

function App() {
  const [{} , dispatch] = useStatevalue();
  useEffect(() =>{
    auth.onAuthStateChanged(authUser =>{
      console.log("This user is >>>" , authUser)
      if(authUser){
        // the user just logged in / the user was logged in 
        dispatch({
          type : 'SET_USER',
          user : authUser
        })
      }else{
        // the user is logged out
        dispatch({
          type : 'SET_USER',
          user : null
        })
      }
    })
  },[])
  return (
    <BrowserRouter>
      <div className="app">
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={[<Header />,<Home/>]}></Route>
          <Route path="/checkout" element={[<Header />,<Checkout/>]}></Route>
          <Route path='payment' element={[<Header/> , <Elements stripe={promise}><Payment/></Elements>]}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
