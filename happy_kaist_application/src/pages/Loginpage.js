import React from 'react';
import './Loginpage.css';
import { Link } from 'react-router-dom';
import * as s from "../components/minsoo/Signed.js";

class Loginpage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
	 function signing(){
		 if(s.uget()=="/login"){
			 alert("Check your email address and password!");
		 }else{
		 s.set(1);
		 }
	 }
	
    return (
      <div className = "Login">
        <h1 className = "login_title">Happy Apron</h1>
        <div className = "form">
          <div className = "form2">
            <div className = "form3">
              <div>Email Address</div>
              <input type = "text" placeholder="youremail@domain.com" className = "inputbox"/>
              <div>Password</div>
              <input type = "password" placeholder="password" className="inputbox"/>
            </div>
            <div className = "form4">
                <Link to={s.uget()} className = "sign_button">
                  <input type = "button" onClick={signing} value = "Sign in"/>
                </Link>
                <div id="register">Not registered? click <Link to="/create_account" className = "sign_button">
                  {/* <input type = "button" value = "Sign up"/> */}
                  here
                </Link> to sign up</div>
                
            </div>
          </div>
        </div><br/>
        <Link to="/mainpage" className="text-center">
          <p>See what's on the menu</p>
        </Link>
      </div>
    );
  }
}

export default Loginpage;
