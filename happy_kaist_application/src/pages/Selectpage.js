import React from 'react';
import './Selectpage.css';
import Category from '../components/login/categories';
import 'bootstrap/dist/css/bootstrap.css'

class Selectpage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="selectPage">
        <h1 className = "select_title">Choose all you have</h1>
        <div style={{ display:"flex",alignItems: "center", justifyContent: "center"}} >
          <Category/>
        </div>
      </div>
    );
  }
}

export default Selectpage;
