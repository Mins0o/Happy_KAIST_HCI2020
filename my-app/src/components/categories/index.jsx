import React from 'react';
import Utensil from '../utensils';
import Buttonbar from '../buttonbar';
import './index.css';

class Category extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            categoryState: 1
        }
        this.oncategorySubmit = this.oncategorySubmit.bind(this);
    }

    oncategorySubmit(categoryState){
        this.setState(prevState => ({
            categoryState: categoryState
        }));
    }
    
    render(){
        return(
            <div className = "form">
                <Buttonbar oncategorySubmit = {this.oncategorySubmit}/>
                <div>
                    <Utensil utensil_num = {this.state.categoryState}/> 
                </div>
            </div>
        )
    }
}

export default Category;