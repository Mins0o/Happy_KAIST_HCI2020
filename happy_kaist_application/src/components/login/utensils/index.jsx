import React from 'react';
import Tool from '../tool';
import './index.css';

class Utensil extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const{state_num} = this.props;

        return(
            <div>
                {state_num == 1 ?
                <div className = "utensilsForm">
                    <Tool utensil_num = {0}/>
                    <Tool utensil_num = {1}/>
                    <Tool utensil_num = {2}/>
                    <Tool utensil_num = {3}/>
                </div> : null}
                {state_num == 2 ?
                <div className = "utensilsForm">
                    <Tool utensil_num = {4}/>
                    <Tool utensil_num = {5}/>
                    <Tool utensil_num = {6}/>
                    <Tool utensil_num = {7}/>
                </div> : null}
                {state_num == 3 ?
                <div className = "utensilsForm">
                    <Tool utensil_num = {8}/>
                    <Tool utensil_num = {9}/>
                    <Tool utensil_num = {10}/>
                    <Tool utensil_num = {11}/>
                </div> : null}
            </div>
        )
    }
}

export default Utensil;