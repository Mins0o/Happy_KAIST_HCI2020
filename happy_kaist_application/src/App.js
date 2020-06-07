import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import { Mainpage, Recipe } from './pages';
import MainPage from './components/minsoo/MainPage.js'


class App extends Component {
    render() {
        return (
            <div>
                {/* <Route exact path="/" component={Mainpage}/> */}
                {/* <Route path="/about" component={Recipe}/> */}

				<MainPage/>
            </div>
        );
    }
}

export default App;