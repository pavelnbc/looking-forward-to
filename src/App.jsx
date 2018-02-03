import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import NewDesireContainer from './containers/NewDesireContainer';

function App() {
    return (
        <main className="app">
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route path="/new-desire" component={NewDesireContainer}/>
            </Switch>
        </main>
    )
}

export default App
