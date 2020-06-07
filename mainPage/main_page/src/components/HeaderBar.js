
import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from "react-bootstrap/Image";

class HeaderBar extends React.Component {
	render() {
		let username="Micky";
		return (
			<Navbar fixed="top" bg="light" expand="lg" style={{height:"4.5vw"}}>
				<Navbar.Brand href="#home">Happy Kaist</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="nav-bar">
					<Nav className="mr-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">Link</Nav.Link>
						<NavDropdown title="Dropdown" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button style={{marginRight:"1vw"}} variant="outline-success">Search</Button>
					</Form>
					<span>
						<Form inline style={{marginBottom:"0px",padding:"0px",maxHeight:"3vw"}}>
							<Image src={require("../image_sources/userprofile.png")} style={{maxHeight:"2.1vw",margin:"0px"}} roundedCircle />
							<NavDropdown style={{marginBottom:"0px",paddingBottom:"0px"}} title={"Hi "+username}>
								<NavDropdown.Item>Trial1</NavDropdown.Item>
							</NavDropdown>
						</Form>
						<Form inline style={{padding:"0px",margin:"0px",width:"100%"}}>
							<Image src={require("../image_sources/expmeter.png")} style={{maxHeight:"0.5vw"}}  rounded/>
						</Form>
					</span>
				</Navbar.Collapse>
			</Navbar>
	  );
	}
}
export default HeaderBar;
