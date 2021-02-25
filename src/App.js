import React from 'react'
import LandingPage from "./LandingPage/LandingPage";
import {Route, Switch } from 'react-router-dom'
import SearchResults from './LandingPage/SearchResults/SearchResults'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/search" component={SearchResults} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
