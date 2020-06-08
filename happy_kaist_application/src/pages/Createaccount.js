import React from 'react';
import './Createaccount.css';
import Accountbox from '../components/login/accountbox';

class Createaccount extends React.Component {
	
	render() {
	  return (
		<div>
            <h1 className = "title">Create your account</h1>
            <Accountbox/>
		</div>
	  );
	}
}
export default Createaccount;