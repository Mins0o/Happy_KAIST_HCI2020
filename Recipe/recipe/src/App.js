import React from 'react';
import logo from './logo.svg';
import burger from './burger.jpg';
import './App.css';
//import './styles.css';
import { render } from '@testing-library/react';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Images from './components/Images';

//import Tabs from './components/Tabs';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ingredients:['anjeng', 'anjeng', 'anjeng'],
      //utensils: [],
      //recipe: 'this is the recipe'
    }
  }
  render(){
    const { ingredients } = this.state;
    return (
      <div className="App">
        <br></br>
        <Container>
          <Row><Col></Col></Row>
          <Row>
            <Col>
            <img src={burger} alt="Burger"/>
            </Col>
            <Col><div id="title">Burger</div><br></br>
            <button id="checkout">Proceed to Checkout</button></Col>
            <Col> </Col>
          </Row>
          <Row><Col></Col></Row>
        </Container>
        <br></br>
        <div id="tabs-container">
          <Tabs fill defaultActiveKey="home" transition={false} id="noanim-tab-example">
            <Tab eventKey="home" title="Ingredients">
              <div id = 'img-container'>
              <Images style = {{width:'100px', height:'100px'}} ingredients = {ingredients}/>
              </div>
            </Tab>
            <Tab eventKey="profile" title="Utensils">
              utensils
            </Tab>
            <Tab eventKey="contact" title="Recipe">
              recipe
            </Tab>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default App;
