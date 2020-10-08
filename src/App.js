import React from 'react';
import {Route,Switch} from 'react-router-dom'
import './App.css';
import LandingPage from './Components/BJLP';
import Table from './Components/Table'
import Rules from './Components/Rules'

function App() {
  return (
    <div className="App">
     <Switch>
        <Route exact={true} path='/'><LandingPage /></Route>
        <Route exact={true} path='/game'><Table /></Route>
        <Route exact={true} path='/rules'><Rules /></Route>
      </Switch>
      
    </div>
  );
}

export default App;
