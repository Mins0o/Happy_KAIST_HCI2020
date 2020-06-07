import React from 'react';
import * as ut from './ut.js';
import Image from 'react-bootstrap/Image'
import './index.css';

class Utensil extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            select1: false,
            select2: false, 
            select3: false,
            select4: false,
            select: [
                {
                    id: 1,
                    selecetd: false
                },
                {
                    id: 2,
                    selected: false
                }]
        }
    }

    render(){
        const{utensil_num} = this.props;
        const u1 = (utensil_num - 1) * 4;
        const u2 = (utensil_num - 1) * 4 + 1;
        const u3 = (utensil_num - 1) * 4 + 2;
        const u4 = (utensil_num - 1) * 4 + 3;
        // const s = this.state.select.map(info => info.id === 1? !info.selecetd: false);
        // this.setState(state => ({
        //     ...state, 
        //     select: [
        //         ...state.select.slice(0, 1), 
        //         {id: 1, selected: false},
        //         ...state.slice(2)
        //     ]
        // }));
        // console.log(s);

        return(
            <div>
                <div className = "utensilsForm">
                    <div className = "utensil">
                        <p>
                            <Image src = {ut.utImg(u1)}                      
                            roundedCircle
                            className = {this.state.select1 ? "selected" : "noSelected"}
                            onClick = {() => this.setState({select1: ut.utCheck(u1)})}/>
                            
                        </p>
                        {ut.utName((utensil_num - 1) * 4)}
                    </div>
                    <div className = "utensil">
                        <p>
                            <Image src = {ut.utImg(u2)}
                            roundedCircle
                            className = {this.state.select2 ? "selected" : "noSelected"}
                            onClick = {() => this.setState({select2: ut.utCheck(u2)})}/>
                        </p>
                        {ut.utName(u2)}
                    </div>
                    <div className = "utensil">
                        <p>
                            <Image src = {ut.utImg(u3)}
                            roundedCircle
                            className = {this.state.select3 ? "selected" : "noSelected"}
                            onClick = {() => this.setState({select3: ut.utCheck(u3)})}/>
                        </p>
                        {ut.utName(u3)}
                    </div>
                    <div className = "utensil">
                        <p>
                            <Image src = {ut.utImg(u4)}
                            roundedCircle
                            className = {this.state.select4 ? "selected" : "noSelected"}
                            onClick = {() => this.setState({select4: ut.utCheck(u4)})}/>
                        </p>
                        {ut.utName(u4)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Utensil;