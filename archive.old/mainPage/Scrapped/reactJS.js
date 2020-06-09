'use strict';

class reactMainPage extends React.Component {
	render() {
		return (
			<div className = "reactMainPage">
				<h1>HELLO</h1>
				<MenuItem/>
			</div>
		);
	}
}

class MenuItem extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello</h1>
			</div>
		);
	}
}

export default reactMainPage;

ReactDOM.render(e(reactMainPage), document.querySelector('#reactTest'));