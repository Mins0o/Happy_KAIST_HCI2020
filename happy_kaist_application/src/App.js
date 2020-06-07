import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Mainpage, Recipe, Loginpage, Selectpage } from './pages';
// import MainPage from './components/minsoo/MainPage.js';
// import Dashboard from './components/Dashboard/Dashboard.jsx';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Mainpage}/>
                    <Route path="/recipe" component={Recipe}/>
                    <Route path="/login" component={Loginpage}/>
                    <Route path="/select" component={Selectpage}/>
                </div>                
            </Router>
        );
    }
}

export default App;