import React, {Component} from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';
import {InfoModal} from './InfoModal';

class Dashboard extends Component{
    constructor(props){
    super(props);
    this.state ={
        modalShow:false
    }
    this.openModal = this.openModal.bind(this);
    }

    openModal(){
        this.setState({modalShow:true})
    }

    render(){
    let modalClose = () => this.setState({modalShow:false})
        return(
            <div>
            <ButtonToolbar>
                <Button
                variant='primary'
                onClick= {this.openModal} >
                Open Modal    
                </Button>  

                <InfoModal
                show = {this.state.modalShow}
                onHide ={modalClose}
                />  
            </ButtonToolbar>
            </div>
        )};
}

export default Dashboard

