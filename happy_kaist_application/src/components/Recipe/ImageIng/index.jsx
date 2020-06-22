import React from 'react';
import BuyButton from '../BuyButton';
import * as di from '../DisplayID.js';
import imgList from '../../../data/image_list.json'
//import './index.css';

class ImageIng extends React.Component{
    constructor(props){
        super(props);
        this.ing = this.props.ing;
        this.qty = this.props.qty;
        this.ingState = this.props.ingState;
        
    }

    render(){
        const style = {height: '9.2vw', width: '9.2vw'};
        return (
            <div>
                
                <p style={{fontWeight:'bold'}} >{this.ing + " " + this.qty }</p>
                <img 
                    style = {style}
                    src = {require("./pictures/"+(this.ing).toString()+".jpg")}
                />
                <br></br>
                <BuyButton name = {(this.ing).toString()} ingState= {this.ingState}/>
                
            </div>
        )
    }
}

export default ImageIng;