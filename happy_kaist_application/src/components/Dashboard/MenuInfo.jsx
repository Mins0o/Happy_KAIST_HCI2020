import React, {Component} from 'react';
// import {Image} from 'react-bootstrap';
import './InfoModal.css';

class MenuInfo extends Component{
    constructor(props){
        super(props);

        this.state = {
            bgColor:""
        }
    }
    
    render(){
        var color;
        var level;

        if(this.props.difficulty=="h"){
            color = "background-red"
            level = "Lvl 11 - 15"
        }
        else if (this.props.difficulty=="m"){
            color = "background-yellow"
            level = "Lvl 6 - 10"
        }
        else if (this.props.difficulty=="l"){
            color = "background-green"
            level = "Lvl 1 - 5"
        }

        return(
        <div className ="menu-info-container">
            
        <div id="food-name">{this.props.foodname}</div>
        <div id="photo-box"><img style={{maxWidth:"100%"}} src={require("../../images/"+(this.props.id+1).toString()+".png")}/></div>
        <div id="lvl-exp-container">
            <div id="level" className={color} >{level}</div>
            <div id="exp">Exp +520</div>
        </div>
        </div>  
        )
    }
}

export default MenuInfo