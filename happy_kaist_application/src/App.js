import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Mainpage, Recipe } from './pages';
// import MainPage from './components/minsoo/MainPage.js';
// import Dashboard from './components/Dashboard/Dashboard.jsx';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/mainpage" component={Mainpage}/>
                    <Route path="/recipe" component={Recipe}/>
                </div>                
            </Router>
        );
    }
}

export default App;