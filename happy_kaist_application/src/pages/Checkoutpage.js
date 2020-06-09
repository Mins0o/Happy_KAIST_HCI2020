import React from 'react';
import './Checkoutpage.css';
import HeaderBar from '../components/minsoo/HeaderBar.js';
import Table from 'react-bootstrap/Table';
import Tablebar from '../components/checkout/tablebar';
import Button from 'react-bootstrap/Button';
import Popup from '../components/checkout/checkoutbox';
import * as ch from '../components/checkout/checkoutbox/check.js';
import { Link } from 'react-router-dom';


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
                        <th>Name</th>
                        <th>Type</th>
                        <th>Count</th>
                        <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                      {ch.getIngredientCount("bun") > 0 ? 
                      <Tablebar tname = {"bun"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("bun")}/> : null}
                      {ch.getIngredientCount("ham") > 0 ? 
                      <Tablebar tname = {"ham"} ttype = {"Buy"} tcount = {ch.getIngredientCount("ham")} tprice = {"$" + ch.getIngredientPrice("ham")}/> : null}
                      {ch.getIngredientCount("lettuce") > 0 ? 
                      <Tablebar tname = {"lettuce"} ttype = {"Buy"} tcount = {ch.getIngredientCount("lettuce")} tprice = {"$" + ch.getIngredientPrice("lettuce")}/> : null}
                      {ch.getIngredientCount("bacon") > 0 ? 
                      <Tablebar tname = {"bacon"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bacon")} tprice = {"$" + ch.getIngredientPrice("bacon")}/> : null}
                      {ch.getIngredientCount("knive") > 0 ? 
                      <Tablebar tname = {"knive"} ttype = {"Rent"} tcount = {ch.getIngredientCount("knive")} tprice = {"$" + ch.getIngredientPrice("knive")}/> : null}
                      {ch.getIngredientCount("frying pan") > 0 ? 
                      <Tablebar tname = {"frying pan"} ttype = {"Rent"} tcount = {ch.getIngredientCount("frying pan")} tprice = {"$" + ch.getIngredientPrice("frying pan")}/> : null}
                      {ch.getIngredientCount("spatula") > 0 ? 
                      <Tablebar tname = {"spatula"} ttype = {"Rent"} tcount = {ch.getIngredientCount("spatula")} tprice = {"$" + ch.getIngredientPrice("spatula")}/> : null}
                      {ch.getIngredientCount("stove") > 0 ? 
                      <Tablebar tname = {"stove"} ttype = {"Rent"} tcount = {ch.getIngredientCount("stove")} tprice = {"$" + ch.getIngredientPrice("stove")}/> : null}
                      <tr>
                      <td colSpan="3">Total</td>
                      <td>${ch.sum()}</td>
                      </tr>
                    </tbody>
                </Table>
                <div className = "paymentButtonForm">
				  <Link to="/recipe" >
					<Button className = "paymentButton" style={{marginRight:"1em"}}variant="secondary">Back</Button>
				  </Link>
                  <Button  className = "paymentButton" onClick = {this.togglePopup.bind(this)}>Proceed to Payment</Button>
                </div>
            </div>      
        {this.state.showPopup ? 
          <Popup
            text='...'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }      
		</div>
	  );
	}
}
export default Checkout;
