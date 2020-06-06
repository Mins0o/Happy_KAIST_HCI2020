import React from 'react';
import { images } from './image_list';
//import './index.css';

class Image extends React.Component{
    constructor(props){
        super(props);
        this.state = {active:false};
        this.clickImage = this.clickImage.bind(this);
    }

    clickImage(){
        this.setState(prevState=>({
            active: !(prevState.active)
        }));

    }


    render(){
        const style = this.state.active ? {border: '3px solid green'}:{border: '3px solid black'};
        let  imgSrc = images.dog.src;
        return <img 
        style ={style} 
        src = {imgSrc}
        onClick={this.clickImage}
        width = '100px'
        height = '100px'
        />

    }
}

export default Image;