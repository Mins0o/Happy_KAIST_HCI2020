import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import { Mainpage, Recipe, Loginpage, Selectpage } from './pages';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/login" component={Loginpage}/>
                    <Route path="/select" component={Selectpage}/>
                    <Route path="/mainpage" component={Mainpage}/>
                    <Route path="/recipe" component={Recipe}/>
                    <Redirect exact from="/" to="login" />
                </div>                
            </Router>
        );
    }
}

export default App;