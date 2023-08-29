import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import NavBar from './components/NavBar';

const App = () => (
  <Router>
    <div className="App">
      <NavBar />
      <div className="content">
        <Switch>
          <Route path="/components/Calculator">
            <Calculator />
          </Route>
          <Route path="/components/Quotes">
            <Quotes />
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
