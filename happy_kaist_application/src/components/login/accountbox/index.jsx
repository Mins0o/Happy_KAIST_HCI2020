import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import * as ui from './userinfo.js';

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
                        <input type = "text" placeholder="name" className = "inputbox" id = "UserName"/>
                        <div>Email Address</div>
                        <input type = "text" placeholder="youremail@domain.com" className="inputbox" id = "UserEmail"/>
                        <div>Password</div>
                        <input type = "password" placeholder="password" className="inputbox" id = "UserPassword"/>
                    </div>
                </div>
                <div className = "account_buttonForm">
                    <Link to = "/select" className ="account_button" 
                    onClick = {() => {
                        ui.setUserName(document.getElementById('UserName').value)}}>
                        <button className = "login_buttonStyle">
                            Next
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Accountbox;