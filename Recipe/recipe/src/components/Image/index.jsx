import React from 'react';
import anjeng from './anjeng.jpg'

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
        const style = this.state.active ? {border: '1px solid black'}:{};
        return <img 
        style ={style} 
        src = {anjeng}
        onClick={this.clickImage}
        />

    }
}

export default Image;