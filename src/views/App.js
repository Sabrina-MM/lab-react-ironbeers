import React from 'react';
import Home from '../components/Home';
import ListOfBeers from '../components/ListOfBeers';
import SingleBeer from '../components/SingleBeer';
import NewBeer from '../components/NewBeer';
import RandomBeers from '../components/RandomBeers';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../css/App.css';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/ListOfBeers" exact component={ListOfBeers} />
          <Route path="/RandomBeers" exact component={RandomBeers} />
          <Route path="/SingleBeer" exact component={SingleBeer} />
          <Route path="/NewBeer" exact component={NewBeer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
