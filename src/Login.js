import React, { useState } from "react";
import "./Login.css";
import logo from "./Assets/Amazon_logo.svg.webp";
import { Link , useNavigate } from "react-router-dom";
import { auth } from "./firebase";

const Login = () => {
    const navigate = useNavigate();
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const signIn = (e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) =>{
            navigate('/')
        })
        .catch(error => alert(error.message))
    }
    const register = (e) =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) =>{
            console.log(auth)
            if(auth){
                navigate('/')
            }
        })
        .catch(error => alert(error.message))
    }
  return (
    <div className="login">
      <Link to="/">
        <img src={logo} className="login__logo" />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
            <h5>E-mail</h5>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>

            <h5>Password</h5>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

            <button className="login__signInButton" onClick={signIn}>Sign In</button>
        </form>
        <p>
            By signing-in you agree to the AMAZON FAKE 
            CLONE Condition of Use & Sale. Please 
            see our Privacy Notice , our Cookies Notice
            and our Interest-Based Ads Notice.
        </p>
        <button className="login__registerButton" onClick={register}>Create your Amazon account</button>
      </div>
    </div>
  );
};

export default Login;
