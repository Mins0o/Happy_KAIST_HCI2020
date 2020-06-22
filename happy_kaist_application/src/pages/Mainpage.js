import React from 'react';

import MainPage from "../components/minsoo/MainPage.js";
import Manual from "../components/manual/manualbox"
// import Dashboard from "./components/Dashboard/Dashboard.jsx";

class Mainpage extends React.Component {
	
	render() {
	  return (

		<div className="App">
			<MainPage/>
			{/* <Manual/> */}
			{/* <Dashboard/> */}
		</div>

	  );
	}
}
export default Mainpage;
