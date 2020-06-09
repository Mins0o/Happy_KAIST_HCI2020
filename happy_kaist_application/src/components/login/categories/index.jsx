import React from 'react';
import Utensil from '../utensils';
import Buttonbar from '../buttonbar';
import { Link } from 'react-router-dom';
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
		function temporary(){
			alert("You'll have to Sign In to use the full feature!");
		}
        return(
            <div className = "categoryForm">
                <Buttonbar oncategorySubmit = {this.oncategorySubmit}/>
                <div>
                    <Utensil state_num = {this.state.categoryState}/>
                </div>
                <div className = "category_buttonForm">
                    <Link to = "/create_account" className ="category_button">
                        <button className = "login_buttonStyle">Previous</button>   
                    </Link>
                    <Link to = "/mainpage" className ="category_button">
                        <button className = "login_buttonStyle" onClick={temporary}>Submit</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Category;