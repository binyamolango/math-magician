import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import NavBar from './components/NavBar';

const App = () => (
  <Router>
    <div className="App">
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/components/Calculator" element={<Calculator />} />
          <Route path="/components/Quotes" element={<Quotes />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
