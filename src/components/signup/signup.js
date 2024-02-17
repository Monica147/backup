import React, { useState, useEffect } from 'react';
import './signup.css';
import { Link } from "react-router-dom";
import { ReactComponent as Moon } from "./Moon.svg";
import 'bootstrap/dist/css/bootstrap.css';

const Sign = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);
  
  
    const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
    };
    const buttonStyle = {
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
       
    };
  

    useEffect(() => {
      document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
    }, [isDarkMode]);
  
  return (
    <>
       <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
 <div className=' text-start'>
   <button style={buttonStyle} onClick={toggleTheme}>
        {isDarkMode ? 'Dark' : 'Dark'}
       
        <Moon/>
      </button>
      </div>
     
    <div className="signupDiv">
        <div className="containers d-block mx-auto text-center h-auto rounded">
        <div className="texts">Signup</div>
        <form action="#">
        <div className="datas">
            <input type="text" placeholder="Full name" required />
          </div>
          <div className="datas">
            <input type="text" placeholder="Email address" required />
          </div>
          <div className="datas">
            <input type="password" placeholder="Password" required />
          </div>
          <div class="terms-checkboxs">
        <span><input type="checkbox" id="terms" name="terms" required/>
        <label for="terms">I accept the <a className="terms" href="#">terms and conditions</a></label></span>
      </div>

          <div className="btns">
            <div className="inners"></div>
            <button className="" type="submit">Signup</button>
          </div>
          <div className="signup-links">
            Already a member? <a href='/login'>Login Now</a>
          </div>
        </form>
      </div>
      </div>
      </div>
    </>
  );
}
export default Sign