import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.scss";
import Home from "./components/Home";
import JoaState from './context/joa/JoaState';

function App() {
  return (
    // <JoaState>
    <Router>
      <div className="App">
        <header className="App-header">
          <Home />
        </header>
      </div>
    </Router>
    // </JoaState>
  );
}

export default App;
