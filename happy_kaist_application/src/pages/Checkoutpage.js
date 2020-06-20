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
                        <th>Buy/Rent</th>
                        <th>Count</th>
                        <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
						{ch.getIngredientCount("bun") > 0 ?  <Tablebar tname = {"bun"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("bun")}/>:null}
						{ch.getIngredientCount("groundbeef") > 0 ?  <Tablebar tname = {"groundbeef"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("groundbeef")}/>:null}
						{ch.getIngredientCount("gochujang") > 0 ?  <Tablebar tname = {"gochujang"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("gochujang")}/>:null}
						{ch.getIngredientCount("carrot") > 0 ?  <Tablebar tname = {"carrot"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("carrot")}/>:null}
						{ch.getIngredientCount("beansprout") > 0 ?  <Tablebar tname = {"beansprout"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("beansprout")}/>:null}
						{ch.getIngredientCount("spinich") > 0 ?  <Tablebar tname = {"spinich"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("spinich")}/>:null}
						{ch.getIngredientCount("shiitake mushroom") > 0 ?  <Tablebar tname = {"shiitake mushroom"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("shiitake mushroom")}/>:null}
						{ch.getIngredientCount("sea salt") > 0 ?  <Tablebar tname = {"sea salt"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("sea salt")}/>:null}
						{ch.getIngredientCount("egg") > 0 ?  <Tablebar tname = {"egg"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("egg")}/>:null}
						{ch.getIngredientCount("sugar") > 0 ?  <Tablebar tname = {"sugar"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("sugar")}/>:null}
						{ch.getIngredientCount("soy sauce") > 0 ?  <Tablebar tname = {"soy sauce"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("soy sauce")}/>:null}
						{ch.getIngredientCount("garlic") > 0 ?  <Tablebar tname = {"garlic"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("garlic")}/>:null}
						{ch.getIngredientCount("sesame oil") > 0 ?  <Tablebar tname = {"sesame oil"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("sesame oil")}/>:null}
						{ch.getIngredientCount("seaweed") > 0 ?  <Tablebar tname = {"seaweed"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("seaweed")}/>:null}
						{ch.getIngredientCount("roasted sesame seed") > 0 ?  <Tablebar tname = {"roasted sesame seed"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("roasted sesame seed")}/>:null}
						{ch.getIngredientCount("avocado") > 0 ?  <Tablebar tname = {"avocado"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("avocado")}/>:null}
						{ch.getIngredientCount("tomato") > 0 ?  <Tablebar tname = {"tomato"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("tomato")}/>:null}
						{ch.getIngredientCount("bell peppers") > 0 ?  <Tablebar tname = {"bell peppers"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("bell peppers")}/>:null}
						{ch.getIngredientCount("lime") > 0 ?  <Tablebar tname = {"lime"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("lime")}/>:null}
						{ch.getIngredientCount("coriander") > 0 ?  <Tablebar tname = {"coriander"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("coriander")}/>:null}
						{ch.getIngredientCount("salt pepper") > 0 ?  <Tablebar tname = {"salt pepper"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("salt pepper")}/>:null}
						{ch.getIngredientCount("chia seeds") > 0 ?  <Tablebar tname = {"chia seeds"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("chia seeds")}/>:null}
						{ch.getIngredientCount("parsley") > 0 ?  <Tablebar tname = {"parsley"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("parsley")}/>:null}
						{ch.getIngredientCount("potato") > 0 ?  <Tablebar tname = {"potato"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("potato")}/>:null}
						{ch.getIngredientCount("butter") > 0 ?  <Tablebar tname = {"butter"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("butter")}/>:null}
						{ch.getIngredientCount("sour cream") > 0 ?  <Tablebar tname = {"sour cream"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("sour cream")}/>:null}
						{ch.getIngredientCount("green pea") > 0 ?  <Tablebar tname = {"green pea"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("green pea")}/>:null}
						{ch.getIngredientCount("canola oil") > 0 ?  <Tablebar tname = {"canola oil"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("canola oil")}/>:null}
						{ch.getIngredientCount("kimchi") > 0 ?  <Tablebar tname = {"kimchi"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("kimchi")}/>:null}
						{ch.getIngredientCount("pork belly") > 0 ?  <Tablebar tname = {"pork belly"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("pork belly")}/>:null}
						{ch.getIngredientCount("tofu") > 0 ?  <Tablebar tname = {"tofu"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("tofu")}/>:null}
						{ch.getIngredientCount("dried anchovies") > 0 ?  <Tablebar tname = {"dried anchovies"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("dried anchovies")}/>:null}
						{ch.getIngredientCount("onion") > 0 ?  <Tablebar tname = {"onion"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("onion")}/>:null}
						{ch.getIngredientCount("spring onion") > 0 ?  <Tablebar tname = {"spring onion"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("spring onion")}/>:null}
						{ch.getIngredientCount("dried kelp") > 0 ?  <Tablebar tname = {"dried kelp"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("dried kelp")}/>:null}
						{ch.getIngredientCount("noodle") > 0 ?  <Tablebar tname = {"noodle"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("noodle")}/>:null}
						{ch.getIngredientCount("shallots") > 0 ?  <Tablebar tname = {"shallots"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("shallots")}/>:null}
						{ch.getIngredientCount("shrimp") > 0 ?  <Tablebar tname = {"shrimp"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("shrimp")}/>:null}
						{ch.getIngredientCount("cabbage") > 0 ?  <Tablebar tname = {"cabbage"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("cabbage")}/>:null}
						{ch.getIngredientCount("chilli") > 0 ?  <Tablebar tname = {"chilli"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("chilli")}/>:null}
						{ch.getIngredientCount("ham") > 0 ?  <Tablebar tname = {"ham"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("ham")}/>:null}
						{ch.getIngredientCount("lettuce") > 0 ?  <Tablebar tname = {"lettuce"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("lettuce")}/>:null}
						{ch.getIngredientCount("bacon") > 0 ?  <Tablebar tname = {"bacon"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("bacon")}/>:null}
						{ch.getIngredientCount("knive") > 0 ?  <Tablebar tname = {"knive"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("knive")}/>:null}
						{ch.getIngredientCount("frying pan") > 0 ?  <Tablebar tname = {"frying pan"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("frying pan")}/>:null}
						{ch.getIngredientCount("spatula") > 0 ?  <Tablebar tname = {"spatula"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("spatula")}/>:null}
						{ch.getIngredientCount("stove") > 0 ?  <Tablebar tname = {"stove"} ttype = {"Buy"} tcount = {ch.getIngredientCount("bun")} tprice = {"$" + ch.getIngredientPrice("stove")}/>:null}


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
