import React from 'react';
import './selectpage.css';
import Category from '../components/categories';
import 'bootstrap/dist/css/bootstrap.css'

class Select extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="App">
        <h1 className = "title">Choose all you have</h1>
        <div style={{ display:"flex",alignItems: "center", justifyContent: "center"}} >
          <Category/>
        </div>
        {/* 이전 이후 버튼 */}
      </div>
    );
  }
}

export default Select;
