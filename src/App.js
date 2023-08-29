import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import NavBar from './components/NavBar';
import Home from './components/Home';

const App = () => (
  <Router>
    <div className="App">
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/Quotes" element={<Quotes />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
