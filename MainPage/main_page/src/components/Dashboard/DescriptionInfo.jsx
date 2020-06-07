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
            <Tabs
            fill
            id="controlled-tab-example"
            activeKey={this.key}
            onSelect={(k) => this.setKey(k)}
            >
                <Tab eventKey="home" title="Information">
                    <div id="information"></div>
                </Tab>
                <Tab eventKey="profile" title="Review">
                    <div id="reviews">
                        <ReviewPost/>
                        <ReviewPost/>
                        <ReviewPost/>
                        <ReviewPost/>
                    </div>
                </Tab>
                </Tabs>
        </div>  
        )
    }
}

export default DescriptionInfo