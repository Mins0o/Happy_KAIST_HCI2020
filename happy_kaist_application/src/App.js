import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Route } from 'react-router-dom';
import { Mainpage, Recipe } from 'pages';
// import MainPage from './components/minsoo/MainPage.js';
// import Dashboard from './components/Dashboard/Dashboard.jsx';


class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Mainpage}/>
                <Route path="/about" component={Recipe}/>
            </div>
        );
    }
}

export default App;