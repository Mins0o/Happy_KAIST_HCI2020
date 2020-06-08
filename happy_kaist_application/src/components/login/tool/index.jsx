import React from 'react';
import * as ut from '../utensils/ut.js';
import Image from 'react-bootstrap/Image'
import './index.css';

class Tool extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            select: false
        }
    }


    render(){
        const{utensil_num} = this.props;
        return(
            <div className = "utensil">
                <p>
                    {this.state.select = ut.utGetCheck(utensil_num)}
                    <Image src = {ut.utImg(utensil_num)}                     
                    roundedCircle
                    className = {this.state.select ? "selected" : "noSelected"}
                    onClick = {() => this.setState({select: ut.utCheck(utensil_num)})}/>
                </p>
                {ut.utName(utensil_num)}  
            </div>
        )
    }
}

export default Tool;