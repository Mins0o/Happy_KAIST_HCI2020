import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import { Loginpage, Selectpage, Createaccount, Mainpage, Recipe} from './pages';


class App extends Component {
    render() {
        return (
            <Router>
                <div className = "happy_apron">
                    <Route path = "/login" component = {Loginpage}/>
                    <Route path = "/create_account" component = {Createaccount}/>
                    <Route path = "/select" component = {Selectpage}/>
                    <Route path = "/mainpage" component = {Mainpage}/>
                    <Route path = "/recipe" component = {Recipe}/>
                    <Redirect exact from = "/" to="login" />
                </div>                
            </Router>
        );
    }
}

export default App;