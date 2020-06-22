import React from 'react';
import './Checkoutpage.css';
import HeaderBar from '../components/minsoo/HeaderBar.js';
import Table from 'react-bootstrap/Table';
import Tablebar from '../components/checkout/tablebar';
import Button from 'react-bootstrap/Button';
import Popup from '../components/checkout/checkoutbox';
import * as ch from '../components/checkout/checkoutbox/check.js';
import { Link } from 'react-router-dom';
import * as di from '../components/Recipe/DisplayID.js';
import imgList from '../data/image_list.json';


class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
      displayID: di.getDisplayID()
    };
    
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

	
	render() {
    var  displayID   = di.getDisplayID();
    var imgIngredients = imgList[displayID].imgIngredients;
	  return (
		<div className = "checkout">
            <HeaderBar/>
           
            <div className = "tableForm">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Item</th>
                        <th>Buy/Rent</th>
                        <th>Count</th>
                        <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                    {imgIngredients.map(group=>{return(
                      group.map(value=>{
                        var tableData = null;
                        if (ch.getIngredientCount(value.ing) > 0) {
                          tableData= 
                            <tr>
                            <td>{value.ing[0].toUpperCase()+value.ing.substring(1)}</td>
                            <td>Buy</td>
                            <td>{ch.getIngredientCount(value.ing)}</td>
                            <td>{"$" + ch.getIngredientPrice(value.ing)}</td>
                            </tr> 
                        }
                        return tableData 
                      })
                      
                    )
                    })}
                    {ch.getIngredientCount("knife") > 0 ? 
                      <Tablebar tname = {"Knife"} ttype = {"Rent"} tcount = {ch.getIngredientCount("knife")} tprice = {"$" + ch.getIngredientPrice("knife")}/> : null}
                      {ch.getIngredientCount("frying pan") > 0 ? 
                      <Tablebar tname = {"Frying pan"} ttype = {"Rent"} tcount = {ch.getIngredientCount("frying pan")} tprice = {"$" + ch.getIngredientPrice("frying pan")}/> : null}
                      {ch.getIngredientCount("spatula") > 0 ? 
                      <Tablebar tname = {"Spatula"} ttype = {"Rent"} tcount = {ch.getIngredientCount("spatula")} tprice = {"$" + ch.getIngredientPrice("spatula")}/> : null}
                      {ch.getIngredientCount("stove") > 0 ? 
                      <Tablebar tname = {"Stove"} ttype = {"Rent"} tcount = {ch.getIngredientCount("stove")} tprice = {"$" + ch.getIngredientPrice("stove")}/> : null}
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
                <br></br>
                <br></br>
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
