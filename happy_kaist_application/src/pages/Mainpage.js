import React from 'react';


import MainPage from "./components/MainPage/main_page.js";
import DashBoard from "./components/DashBoard/DashBoard.jsx";


class Mainpage extends React.Component {
	
	render() {
	  return (

		<div className="App">
		<br/><br/><br/>
			<MainPage/>
			<DashBoard/>
		</div>

	  );
	}
}
export default Mainpage;
