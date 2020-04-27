import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.scss";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Home />
        </header>
      </div>
    </Router>
  );
}

export default App;
