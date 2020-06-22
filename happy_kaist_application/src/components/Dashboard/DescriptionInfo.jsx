import React, {Component} from 'react';
import {Tab,Tabs,Image} from 'react-bootstrap';
import './InfoModal.css';
import ReviewPost from './ReviewPost';
import RecipeText from '../Recipe/RecipeText/index'

class DescriptionInfo extends Component{
    constructor(props){
        super(props);
        this.state ={
            key : "home",
        }

        this.setKey = this.setKey.bind(this);
    }

    setKey(a){
        this.setState({key:a})
    }

    render(){
        return(
        <div className ="description-container">
            <div id="border-left"/>
            <Tabs
            fill
            id="controlled-tab-example"
            activeKey={this.key}
            onSelect={(k) => this.setKey(k)}
            >
                <Tab eventKey="home" title="Recipe">
                    <div id="recipes">
                    <RecipeText></RecipeText>
                        {/* <div id="core-info"> <img style={{maxWidth:"70%"}} src={require("../../images/"+"info-png.png")}/> </div> */}
                        {/* <div id="extra-utensils">Extra Tools Required<br/><img src={require("./spatula.jpg")} style={{width:'150px', height:'150px' }}/></div> */}
                    </div>
                </Tab>
                <Tab eventKey="info" title="Information">
                    <div id="information">
                        <div id="core-info"> <img style={{maxWidth:"80%"}} src={require("../../images/"+"info-png-01.png")}/> </div>
                        <div id="extra-utensils">Extra Tools Required<br/><img src={require("./spatula.jpg")} style={{width:'50px', height:'50px' }}/><br/><p>Spatula</p></div>
                    </div>
                </Tab>
                
                <Tab eventKey="reviews" title="Review">
                    <div id="reviews">
                        <ReviewPost id={1}/>
                        <ReviewPost id={2}/>
                        <ReviewPost id={3}/>
                        <ReviewPost id={4}/>
                    </div>
                </Tab>
                </Tabs>
        </div>  
        )
    }
}

export default DescriptionInfo