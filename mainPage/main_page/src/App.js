import React from 'react';
import './App.css';

import MainPage from "./components/main_page.js";

class App extends React.Component {
	
	render() {
	  return (
		<div className="App">
		<br/><br/><br/>
			<MainPage/>
		</div>
	  );
	}
}
export default App;
