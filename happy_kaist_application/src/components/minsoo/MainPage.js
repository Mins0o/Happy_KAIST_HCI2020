import React from 'react';
import HeaderBar from './HeaderBar.js';
import CardList from "./CardList.js";
import CardColumns from "react-bootstrap/CardColumns";
import {Button, ButtonToolbar} from 'react-bootstrap';
import {InfoModal} from '../Dashboard/InfoModal'



class MainPage extends React.Component {
	constructor(props){
		super(props);
		this.state={

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
			],

			modalShow:false,

			displayId:1,
		}
	}

	cardClick(id){
		this.setState({displayId:id})
		this.setState({modalShow:true})
	}
	render() {
	  let modalClose = () => this.setState({modalShow:false})
	  return (
		<div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
			<InfoModal
                show = {this.state.modalShow}
				onHide ={modalClose}
				displayId = {this.state.displayId}
                />  
			<HeaderBar/>
			<div style={{width: "79vw",  alignItems: "center", justifyContent: "center"}}>
				<br/><br/><br/><br/>
				<CardColumns style={{columnCount:"3"}}>
					<CardList menus={this.state.menulist}
							  cardClick={this.cardClick.bind(this)}/>
				</CardColumns>
			</div>
		</div>
	  );
	}
}
export default MainPage;
