import React from 'react';
import './index.css';

class Buttonbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            b1: true,
            b2: false,
            b3: false
        };
        this.btn1Submit = this.btn1Submit.bind(this);
        this.btn2Submit = this.btn2Submit.bind(this);
        this.btn3Submit = this.btn3Submit.bind(this);
    }


    btn1Submit() {
        const {oncategorySubmit} = this.props;
        this.setState(prevState => ({
            b1: true,
            b2: false,
            b3: false
        }));
        oncategorySubmit(1);
    }

    btn2Submit() {
        const {oncategorySubmit} = this.props;
        this.setState(prevState => ({
            b1: false,
            b2: true,
            b3: false
        }));
        oncategorySubmit(2);
    }

    btn3Submit() {
        const {oncategorySubmit} = this.props;
        this.setState(prevState => ({
            b1: false,
            b2: false,
            b3: true
        }));
        oncategorySubmit(3);
    }

    render(){
        return(
            <div className = "buttonForm">
                <button className = "buttonStyle"
                    disabled = {this.state.b1} onClick = {this.btn1Submit}>Home Appliances</button>
                <button className = "buttonStyle" 
                    disabled = {this.state.b2} onClick = {this.btn2Submit}>Kitchen Utensils</button>
                <button className = "buttonStyle"
                    disabled = {this.state.b3} onClick = {this.btn3Submit}>Pots and Pans</button>
            </div>
        )
    }
}

export default Buttonbar;