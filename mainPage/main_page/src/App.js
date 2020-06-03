import React from 'react';
import './App.css';
import HeaderBar from './components/HeaderBar.js';
import CardList from "./components/CardList.js";
import CardColumns from "react-bootstrap/CardColumns";
import Dashboard from './components/Dashboard/dashboard.jsx';

class App extends React.Component {
	state={
		menulist:[
		{
			id: 1,
			
		},
		{
			id: 2,
			
		},
		{
			id: 3,
			
		},
		{
			id: 4,
			
		},
		{
			id: 5,
			
		},
		{
			id: 6,
			
		},
		{
			id: 7,
			
		},
		{
			id: 8,
			
		},
		{
			id: 9,
			
		},
		
		]
	}
	render() {
	  return (
		// <div className="App">
		// 	<h1>Hi</h1>
		// 	<HeaderBar/>
		// 	<CardColumns>
		// 		<CardList menus={this.state.menulist}/>
		// 	</CardColumns>
		// 	<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
		// </div>

		<Dashboard></Dashboard>
	  );
	}
}
export default App;
