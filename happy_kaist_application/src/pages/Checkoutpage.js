import React from 'react';
import './Checkoutpage.css';
import HeaderBar from '../components/minsoo/HeaderBar.js';
import Table from 'react-bootstrap/Table';
import Tablebar from '../components/checkout/tablebar';
import Button from 'react-bootstrap/Button';
import Popup from '../components/checkout/checkoutbox';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
	
	render() {
	  return (
		<div className = "checkout">
            <HeaderBar/>
            <div className = "tableForm">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Count</th>
                        <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                      <Tablebar tnum = {1} tname = {"tomato"} ttype = {"Buy"} tcount = {1} tprice = {1.3}/>
                      <Tablebar tnum = {1} tname = {"tomato"} ttype = {"Buy"} tcount = {1} tprice = {1.3}/>
                      <Tablebar tnum = {1} tname = {"tomato"} ttype = {"Buy"} tcount = {1} tprice = {1.3}/>
                      <tr>
                      <td colSpan="4">total</td>
                      <td>4.22</td>
                      </tr>
                    </tbody>
                </Table>
                <div className = "paymentButton">
                  <Button onClick = {this.togglePopup.bind(this)}>pay a charge</Button>
                </div>
            </div>      
        {this.state.showPopup ? 
          <Popup
            text='Close Me'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }      
		</div>
	  );
	}
}
export default Checkout;