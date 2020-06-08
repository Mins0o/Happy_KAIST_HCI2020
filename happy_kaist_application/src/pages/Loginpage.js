import React from 'react';
import './Loginpage.css';
import { Link } from 'react-router-dom';

class Loginpage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className = "Login">
        <h1 className = "title">Happy Apron</h1>
        <div className = "form">
        <div className = "form2">
          <div className = "form3">
          <div>Email Address</div>
          <input type = "text" className = "inputbox"/>
          <div>Password</div>
          <input type = "password" className="inputbox"/>
          </div>
          <div className = "form4">
              <input type = "button" value = "Sign in"/>
              <Link to="/select">
                <input type = "button" value = "Sign up"/>                
              </Link>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Loginpage;
