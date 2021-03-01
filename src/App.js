
import React from 'react';
import LandingPage from "./LandingPage/LandingPage";
import {Route, Switch } from 'react-router-dom';
import Search from './Search/Search';


function App() {
  
  return (
    <div className="App">
      <Switch>
        <Route path="/search" component={Search} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
