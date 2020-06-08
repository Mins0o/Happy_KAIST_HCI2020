import React from 'react';
import './Checkoutpage.css';
import HeaderBar from '../components/minsoo/HeaderBar.js';
import Table from 'react-bootstrap/Table';

class Checkout extends React.Component {
	
	render() {
	  return (
		<div className = "checkout">
            <HeaderBar/>
            <br/><br/><br/><br/>
            <div className = "tableForm">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Buy or Rent</th>
                        <th>Count</th>
                        <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@mdo</td>
                        </tr>
                    </tbody>
                </Table>
            </div>            
		</div>
	  );
	}
}
export default Checkout;