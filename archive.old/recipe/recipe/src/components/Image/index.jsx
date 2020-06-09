import React from 'react';
import { images } from './image_list';
//import './index.css';

class Image extends React.Component{
    constructor(props){
        super(props);
        //this.state = {active:false};
        //this.clickImage = this.clickImage.bind(this);
    }

    //clickImage(){
        //this.setState(prevState=>({
            //active: !(prevState.active)
        //}));

    //}


    render(){
        const style = this.props.activeImg ? {border: '3px solid green', height: '150px', width: '150px'}: {height: '150px', width: '150px'};
        let  imgSrc = images.dog.src;
        return (
                <img 
                    style ={style}
                    src = {imgSrc}
                    //onClick={this.clickImage}
                />
        )

    }
}

export default Image;