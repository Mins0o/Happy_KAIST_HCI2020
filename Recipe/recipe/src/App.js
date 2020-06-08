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
import Button from 'react-bootstrap/Button';


import ImagesIngredients from './components/ImagesIngredients';
import ImagesUtensils from './components/ImagesUtensils';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ingredients:['anjeng', 'anjeng', 'anjeng'],
      utensils: ['pan', 'pan', 'pan', 'pan'],
      inCount: 0,
      //recipe: 'this is the recipe'
    }
  }
  render(){
    const { ingredients } = this.state;
    const { utensils } = this.state;
    const { inCount } = this.state;
    return (
      <div className="App">
        <br></br>
        <Container>
          <Row><Col></Col></Row>
          <Row>
            <Col>
            <img src={burger} alt="Burger" border-radius='40px' style={{width:'300px', height:'300px' }}/>
            </Col>
            <Col><div id="title">Burger</div><br></br>
            <Button variant="primary" className='proceed'>Proceed to Checkout</Button>{' '}</Col>
            <Col>
            
            </Col>
          </Row>
          <Row><Col></Col></Row>
        </Container>
        <br></br>
        <div id="tabs-container">
          <Tabs fill defaultActiveKey="home" transition={false} id="noanim-tab-example">
            <Tab eventKey="home" title="Ingredients">
              <div id='img-container'>
              <ImagesIngredients style = {{width:'100px', height:'100px'}} ingredients = {ingredients} inCount={inCount}/>
              </div>
            </Tab>
            <Tab eventKey="profile" title="Utensils">
              <div id='img-container2'>
              <ImagesUtensils style = {{width:'100px', height:'100px'}} utensils = {utensils}/>
              </div>
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