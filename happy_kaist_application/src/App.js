import React from 'react';
import './App.css';


import MainPage from "./components/MainPage/main_page.js";
import DashBoard from "./components/Dashboard/Dashboard.jsx";


class App extends React.Component {
	
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
export default App;