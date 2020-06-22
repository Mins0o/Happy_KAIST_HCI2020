import React, {Component} from 'react';
import './InfoModal.css';

class ReviewPost extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div className ="review-post">
            <img style={{maxWidth:"100%"}} src={require("../../images/"+"review-" + this.props.id + ".png")}/>
        </div>  
        )
    }
}

export default ReviewPost