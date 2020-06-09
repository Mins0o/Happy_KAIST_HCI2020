import React, {Component} from 'react';
import {Tab,Tabs} from 'react-bootstrap';
import './InfoModal.css';
import ReviewPost from './ReviewPost';

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
                <Tab eventKey="home" title="Information">
                    <div id="information">
                        <div id="core-info"> <img style={{maxWidth:"70%"}} src={require("../../images/"+"info-png.png")}/> </div>
                        <div id="extra-utensils">Extra Tools Required</div>
                    </div>
                </Tab>
                <Tab eventKey="profile" title="Review">
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