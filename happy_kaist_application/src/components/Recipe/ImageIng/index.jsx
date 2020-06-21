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
        //this.clickImage = this.clickImage.bind(this);
    }

    //clickImage(){
        //this.setState(prevState=>({
            //active: !(prevState.active)
        //}));

    //}


    render(){
        
        //let ing = this.props.ing;
        //let qty = this.props.qty;
        console.log(this.ing);
        //const qty = this.state;
        //const style = this.props.activeImg ? {border: '3px solid green', height: '150px', width: '150px'}: {height: '150px', width: '150px'};
        const style = {height: '9.2vw', width: '9.2vw'};
        return (
            <div>
                
                <p style={{fontWeight:'bold'}} >{this.ing + " " + this.qty }</p>
                <img 
                    style = {style}
                    src = {require("./pictures/"+(this.ing).toString()+".jpg")}
                    //onClick={this.clickImage}
                />
                <br></br>
                <BuyButton name = {(this.ing).toString()}/>
                
            </div>
        )
    }
}

export default ImageIng;