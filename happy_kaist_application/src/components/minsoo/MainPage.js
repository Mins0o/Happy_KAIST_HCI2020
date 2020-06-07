import React from 'react';
import HeaderBar from './HeaderBar.js';
import CardList from "./CardList.js";
import CardColumns from "react-bootstrap/CardColumns";

class MainPage extends React.Component {
	state={
		menulist:[
		{id: 1},
		{id: 2},
		{id: 3},
		{id: 4},
		{id: 5},
		{id: 6},
		{id: 7},
		{id: 8},
		{id: 9},
		{id: 10},
		]
	}
	render() {
	  return (
		<div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
			<HeaderBar/>
			<div style={{width: "79vw",  alignItems: "center", justifyContent: "center"}}>
				<br/><br/><br/>
				<CardColumns style={{columnCount:"3"}}>
					<CardList menus={this.state.menulist}/>
				</CardColumns>
			</div>
		</div>
	  );
	}
}
export default MainPage;
