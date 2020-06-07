import React from 'react';
import './loginpage.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Select , Loginpage} from '..';


class Login extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Router>
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
              <Link to="/login">
                <input type = "button" value = "Sign in"/>
              </Link>
              <Link to="/select">
                <input type = "button" value = "Sign up"/>
              </Link>
            </div>
          </div>
          </div>
        </div>
        <Route exact path='/' component={Loginpage}/>
        <Route path='/select' component={Select}/>
      </Router>
    );
  }
}

export default Login;
