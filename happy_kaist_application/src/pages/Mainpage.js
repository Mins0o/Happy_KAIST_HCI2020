import React from 'react';


import Mainpage from "./components/Mainpage/main_page.js";
import Dashboard from "./components/Dashboard/Dashboard.jsx";


class Mainpage extends React.Component {
	
	render() {
	  return (

		<div className="App">
		<br/><br/><br/>
			<Mainpage/>
			<Dashboard/>
		</div>

	  );
	}
}
export default Mainpage;
