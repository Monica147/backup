import { ReactComponent as Moon } from "./Moon.svg";
import React, { useState, useEffect,useRef } from 'react';
import './login1.css';
import { Link } from "react-router-dom";

const Login = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle between dark and light mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  const buttonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none', // Optional: Remove the outline when clicking the button
    cursor: 'pointer',
     
  };

  // Effect to update the HTML body class based on the current theme
  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);
  const email=useRef()
  const password=useRef() 
  const handleSubmit=()=>{
    if(email.current.value=="abc@gmail.com"&&password.current.value=="12345"){
      localStorage.setItem("Email","abc@gmail.com")
      localStorage.setItem("Password","12345")
    }
    else if(email.current.value=="kgisl@gmail.com"&&password.current.value=="kgisl2023"){
      localStorage.setItem("Email","kgisl@gmail.com")
      localStorage.setItem("Password","kgisl2023")
    }
      
  }
  return (
    <>
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
   <div className="text-start ">
   <button style={buttonStyle} onClick={toggleTheme}>
        {isDarkMode ? 'Dark' : 'Dark'}
       
        <Moon/>
      </button>
      </div>
      <div className="loginDiv">
        <div className="container d-block h-auto">
        <div className="text">Login Now</div>
        <form onSubmit={handleSubmit}>
          <div className="data">
            <input type="text" ref={email} placeholder="Your Email" required/>
          </div>
          <div className="data">
            <input type="password" ref={password} placeholder="Your Password" required />
          </div>
          <div className="forgot-pass">
            <a href="#">Forgot Password?</a>
          </div>
          <div className="btn">
            <div className="inner"></div>
            <button type="submit">Login</button>
          </div>
          <div className="signup-link">
            Not a member? <a href='/signup'> Signup Now</a>
          </div>
        </form>
      </div>
      </div>
      </div>
    </>
  );
}
export default Login;
