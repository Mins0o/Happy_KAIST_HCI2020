import React from 'react';
import HeaderBar from './HeaderBar.js';
import CardList from "./CardList.js";
import CardColumns from "react-bootstrap/CardColumns";
import {Button, ButtonToolbar} from 'react-bootstrap';
import {InfoModal} from '../Dashboard/InfoModal'
import {Manual} from '../manual/manualbox/index'
import * as di from '../Recipe/DisplayID.js';
import * as ch from '../checkout/checkoutbox/check.js';
import * as mc from './ManualCheck.js';



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
			manualShow:mc.getChecked()==0?true:false,

			displayId:1
		}
	}

	cardClick(id){
		this.setState({displayId:id})
		this.setState({modalShow:true})
		di.setDisplayID(id);
	}
	render() {
		mc.setChecked(1)
	ch.reset()
	  let modalClose = () => this.setState({modalShow:false})
	  let manualClose = () => this.setState({manualShow:false})	

	  return (
		<div style={{backgroundColor:"#2c3e50", display: "flex", alignItems: "center", justifyContent: "center"}}>
			<Manual
				show = {this.state.manualShow}
				onHide ={manualClose}
				/>
			<InfoModal
                show = {this.state.modalShow}
				onHide ={modalClose}
				displayId = {this.state.displayId}
                />
			<HeaderBar/>
			<div style={{width: "63vw",  alignItems: "center", justifyContent: "center"}}>
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
