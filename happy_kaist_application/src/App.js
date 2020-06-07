import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Mainpage, Recipe } from 'pages';


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