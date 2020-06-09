import React from 'react';
import './Checkoutpage.css';
import HeaderBar from '../components/minsoo/HeaderBar.js';
import Table from 'react-bootstrap/Table';
import Tablebar from '../components/checkout/tablebar';
import Button from 'react-bootstrap/Button';
import Popup from '../components/checkout/checkoutbox';
import * as ch from '../components/checkout/checkoutbox/check.js';


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
                        <th></th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Count</th>
                        <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                      {ch.getIngredientCount("bun") > 0 ? 
                      <Tablebar tnum = {''} tname = {"bun"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("bun")}/> : null}
                      {ch.getIngredientCount("ham") > 0 ? 
                      <Tablebar tnum = {''} tname = {"ham"} ttype = {"Buy"} tcount = {ch.getIngredientCount("ham")} tprice = {"$" + ch.getIngredientPrice("ham")}/> : null}
                      {ch.getIngredientCount("lettuce") > 0 ? 
                      <Tablebar tnum = {''} tname = {"lettuce"} ttype = {"Buy"} tcount = {ch.getIngredientCount("lettuce")} tprice = {"$" + ch.getIngredientPrice("lettuce")}/> : null}
                      {ch.getIngredientCount("bacon") > 0 ? 
                      <Tablebar tnum = {''} tname = {"bacon"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bacon")} tprice = {"$" + ch.getIngredientPrice("bacon")}/> : null}
                      <Tablebar tnum = {''} tname = {"spatula"} ttype = {"Rent"} tcount = {1} tprice = {"$2"}/>
                      <tr>
                      <td colSpan="4">total</td>
                      <td>${ch.sum()}</td>
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