import React from 'react';
import logo from '../logo.svg';
import burger from '../images/burger.jpg';
import HeaderBar from '../components/minsoo/HeaderBar.js';
import './Recipe.css';
//import './styles.css';
import { render } from '@testing-library/react';
import { Link } from 'react-router-dom';
import imgList from '../data/image_list.json'
import * as di from '../components/Recipe/DisplayID.js';


import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


import ImagesIngredients from '../components/Recipe/ImagesIngredients';
import ImagesUtensils from '../components/Recipe/ImagesUtensils';
import RecipeText from '../components/Recipe/RecipeText';


class Recipe extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      //imgIngredients:[['bun', 'bun', 'bun', 'bun'],['bun','bun', 'bun']],
      displayID: di.getDisplayID(),
      utensils: ['pan', 'pan', 'pan', 'pan'],
      inCount: 0,
      //recipe: 'this is the recipe'
    }
  }
  render(){
    var  displayID   = di.getDisplayID();
    console.log(displayID);
    //const displayIDstr = displayID.toString();
    //const  img  = img_list.imgIngredients.toString().imgIngredients;
    const { utensils } = this.state;
    const { inCount } = this.state;
    return (
      <div className="App">
        <HeaderBar/>
        <br/><br/><br/><br/>
        <Container>
          <Row><Col></Col></Row>
          <Row>
            <Col>
            <img src={require("../images/"+(displayID+1).toString()+".png")} alt={imgList[displayID].name} style={{width:'300px', height:'300px', borderRadius:'40px' }}/>
            </Col>
            <Col><div id="title">{imgList[displayID].name}</div><br></br>
              <Link to="/checkout">
                <Button variant="primary" className='proceed'>Proceed to Checkout</Button>
              </Link>{' '}</Col>
            <Col>
            
            </Col>
          </Row>
          <Row><Col></Col></Row>
        </Container>
        <br></br>
        <div id="tabs-container">
          <Tabs fill defaultActiveKey="home" transition={false}>
            <Tab eventKey="home" title="Ingredients">
              
              <div id='img-container'>
              <ImagesIngredients style = {{width:'100px', height:'100px'}} imgIngredients = {imgList[displayID].imgIngredients} qty = {imgList[displayID].qty}/>
              </div>
             
            </Tab>
            <Tab eventKey="profile" title="Utensils">
              <div id='img-container2'>
              <ImagesUtensils style = {{width:'100px', height:'100px'}} utensils = {utensils}/>
              </div>
            </Tab>
            <Tab eventKey="contact" title="Recipe">
              <RecipeText></RecipeText>
            </Tab>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default Recipe;