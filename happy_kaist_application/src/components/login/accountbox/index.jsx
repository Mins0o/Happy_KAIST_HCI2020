import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

class Accountbox extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className = "accountbox">
                <div className = "account_boxForm">
                    <div className = "account_inputboxForm">
                        <div>Name</div>
                        <input type = "text" className = "inputbox"/>
                        <div>Email Address</div>
                        <input type = "text" className="inputbox"/>
                        <div>Password</div>
                        <input type = "password" className="inputbox"/>
                    </div>
                </div>
                <div className = "account_buttonForm">
                    <Link to = "/select" className ="account_button">
                        <button className = "login_buttonStyle">Next</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Accountbox;