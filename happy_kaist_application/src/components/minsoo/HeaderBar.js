import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from "react-bootstrap/Image";
import Tool from '../login/tool';
import { Link } from 'react-router-dom';
import * as ut from '../login/utensils/ut.js';
import './HeaderBar.css';
import * as ui from '../login/accountbox/userinfo.js';
import * as s from "./Signed.js";

class HeaderBar extends React.Component {
	render() {
		var username= ui.getUserName();
		var choose1=s.get()? "none": "span";
		var choose2=s.get()? "span":"none";
		var utArray = [];
		for( var i = 0; i < 12; i++){
			if(ut.utGetCheck(i)){
				utArray.push(i);
			}
		}
		function logout(){
			s.set(0);
		}
		return (
			<Navbar fixed="top" className = "navbar_bg" expand="lg" style={{height:"78px"}}>
			
				<Link to="/mainpage" style={{color: "#000000"}}>
					<Navbar.Brand>							
					<img style={{height:"25px"}} src={require("../../images/"+"apron-logo-01.png")}/>
					</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav"/>
				<Navbar.Collapse id="nav-bar">
					<Nav className="mr-auto">
						<Nav.Link>
							<Link to="/mainpage" style={{color: "#000000"}}>
							{/* <img style={{height:"25px"}} src={require("../../images/"+"setHome.png")}/> */}
							</Link>
						</Nav.Link>
					</Nav>
					<Form inline>
						{/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
						{/* <Button style={{marginRight:"1vw"}} variant="outline-success">Search</Button> */}
					</Form>
					<Nav.Link style={{display:choose1}}>
						<Link to="/login" style={{color: "#000000"}}>
							Sign In
						</Link>
					</Nav.Link>
					<Nav.Link style={{display:choose1}}>
						<Link to="/create_account" style={{color: "#000000"}}>
							Sign Up
						</Link>
					</Nav.Link>
					<span style={{display:choose2}}>
						<Form inline style={{marginBottom:"0px",padding:"0px",maxHeight:"3vw"}}>
							<Image src={require("../../images/userprofile-male-01.png")} style={{maxHeight:"2.1vw",margin:"0px"}} roundedCircle />
							<NavDropdown alignRight={1} style={{marginBottom:"0px",paddingBottom:"0px"}} title={"Hi "+username}>
								<NavDropdown.Item style={{width:"22vw"}}>
									<div style={{display:"block",margin:"auto",alignItems:"right"}} className="text-right">
										<Link disabled={0} to="/login" style={{color: "#000000"}} onClick={logout}>
											Log Out
										</Link>
									</div>
									<div disabled={1}>
										<span>
											<Image src={require("../../images/userprofile-male-01.png")} style={{maxHeight:"6vw",margin:"0px"}} roundedCircle />
										</span>
										<span style={{float:"right"}}>
											<div>{"Hi "+username}<br/></div>
											<div>EXP:</div><Image src={require("../../images/expmeter.png")} style={{maxHeight:"0.5vw"}}  rounded/> <div style={{fontSize:"0.9vw"}}>[LEVEL 1] 0/100</div>
										</span>
									</div>
									<div style={{display:"block",margin:"auto"}} disabled={1}>
										<br/><br/>
										<div style={{display:"block",margin:"auto"}}>
											<Link to="/select">
												<Image style={{maxWidth:"5.5vw", margin:"0.5vw"}} src = {require("../../images/addUtensil.png")} roundedCircle />
											</Link>
											<Image style={{maxWidth:"5.5vw", margin:"0.5vw"}} src = {ut.utImg(utArray[0])} roundedCircle />
											<Image style={{maxWidth:"5.5vw", margin:"0.5vw"}} src = {ut.utImg(utArray[1])} roundedCircle />
										</div>
										<div style={{display:"block",margin:"auto"}}>
											<Image style={{maxWidth:"5.5vw", margin:"0.5vw"}} src = {ut.utImg(utArray[2])} roundedCircle />
											<Image style={{maxWidth:"5.5vw", margin:"0.5vw"}} src = {ut.utImg(utArray[3])} roundedCircle />
											<Image style={{maxWidth:"5.5vw", margin:"0.5vw"}} src = {ut.utImg(utArray[4])} roundedCircle />
										</div>
										<div style={{display:"block",margin:"auto"}}>
											<Image style={{maxWidth:"5.5vw", margin:"0.5vw"}} src = {ut.utImg(utArray[5])} roundedCircle />
											<Image style={{maxWidth:"5.5vw", margin:"0.5vw"}} src = {ut.utImg(utArray[6])} roundedCircle />
											<Image style={{maxWidth:"5.5vw", margin:"0.5vw"}} src = {ut.utImg(utArray[7])} roundedCircle />
										</div>
										<div style={{display:"block",margin:"auto"}}>
											<Image style={{maxWidth:"5.5vw", margin:"0.5vw"}} src = {ut.utImg(utArray[8])} roundedCircle />
											<Image style={{maxWidth:"5.5vw", margin:"0.5vw"}} src = {ut.utImg(utArray[9])} roundedCircle />
											<Image style={{maxWidth:"5.5vw", margin:"0.5vw"}} src = {ut.utImg(utArray[10])} roundedCircle />
										</div>
										<div style={{display:"block",margin:"auto"}}>
											<Image style={{maxWidth:"5.5vw", margin:"0.5vw"}} src = {ut.utImg(utArray[11])} roundedCircle />
										</div>
									</div>
								</NavDropdown.Item>
							</NavDropdown>
						</Form>
						<Form inline style={{padding:"0px",margin:"0px",width:"100%"}}>
							<div>EXP :</div><div id="blankDiv">la</div><Image src={require("../../images/expmeter.png")} style={{maxHeight:"0.5vw"}}  rounded/> <div id="blankDiv">a</div><div style={{fontSize:"0.9vw"}}>0/100</div>
						</Form>
					</span>
				</Navbar.Collapse>
			</Navbar>
	  );
	}
}
export default HeaderBar;
/*

										<Tool style={{maxWidth:"5.5vw"}} utensil_num = {0}/>
										<Tool style={{maxWidth:"5.5vw"}} utensil_num = {1}/>
										<Tool style={{maxWidth:"5.5vw"}} utensil_num = {2}/>
										<Tool style={{maxWidth:"5.5vw"}} utensil_num = {3}/>
										<Tool style={{maxWidth:"5.5vw"}} utensil_num = {4}/>
										<Tool style={{maxWidth:"5.5vw"}} utensil_num = {5}/>
										<Tool style={{maxWidth:"5.5vw"}} utensil_num = {6}/>
										<Tool style={{maxWidth:"5.5vw"}} utensil_num = {7}/>
										<Tool style={{maxWidth:"5.5vw"}} utensil_num = {8}/>
										<Tool style={{maxWidth:"5.5vw"}} utensil_num = {9}/>
										<Tool style={{maxWidth:"5.5vw"}} utensil_num = {10}/>
										<Tool style={{maxWidth:"5.5vw"}} utensil_num = {11}/>
*/
