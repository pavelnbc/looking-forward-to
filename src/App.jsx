import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import NewDesireContainer from './containers/NewDesireContainer';

class App extends Component {
    render() {
        return (
            <main className="app">
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route path="/new-desire" component={NewDesireContainer}/>
                </Switch>
            </main>
        )
    }
}

export default App
