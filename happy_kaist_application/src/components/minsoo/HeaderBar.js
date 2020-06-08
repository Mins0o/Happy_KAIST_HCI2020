import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from "react-bootstrap/Image";
import { Link } from 'react-router-dom';
import './HeaderBar.css';
import * as ui from '../login/accountbox/userinfo.js';

class HeaderBar extends React.Component {
	render() {
		var username= ui.getUserName();
		return (
			<Navbar fixed="top" className = "navbar_bg" expand="lg" style={{height:"78px"}}>
				<Navbar.Brand>							
					Happy Kaist
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav"/>
				<Navbar.Collapse id="nav-bar">
					<Nav className="mr-auto">
						<Nav.Link>
							<Link to="/mainpage" style={{color: "#000000"}}>
								Home
							</Link>
						</Nav.Link>
					</Nav>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button style={{marginRight:"1vw"}} variant="outline-success">Search</Button>
					</Form>
					<span>
						<Form inline style={{marginBottom:"0px",padding:"0px",maxHeight:"3vw"}}>
							<Image src={require("../../images/userprofile.png")} style={{maxHeight:"2.1vw",margin:"0px"}} roundedCircle />
							<NavDropdown alignRight={1} style={{marginBottom:"0px",paddingBottom:"0px"}} title={"Hi "+username}>
								<NavDropdown.Item style={{width:"20vw"}}>T</NavDropdown.Item>
							</NavDropdown>
						</Form>
						<Form inline style={{padding:"0px",margin:"0px",width:"100%"}}>
							<Image src={require("../../images/expmeter.png")} style={{maxHeight:"0.5vw"}}  rounded/>
						</Form>
					</span>
				</Navbar.Collapse>
			</Navbar>
	  );
	}
}
export default HeaderBar;
