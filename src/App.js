import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.scss";
import JoaState from './context/joa/JoaState';
import Landing from "./components/pages/Landing";
import Home from "./components/pages/Home";
import About from './components/pages/About'
import Contact from './components/pages/Contact';
import Category from './components/Category';
import Detail from './components/Detail';
import EventDetail from './components/EventDetails';
import EventCategory from './components/EventCategory';
import Navbar from './components/layout/Navbar';
import Spinner from './components/layout/Spinner';

const App = () => {
  
  return (
    <JoaState>
      <Router>
        <div className="App">
          <div className='nav'>
            <Navbar />
          </div>
          <div className="container">
            <Switch>
              <Route exact path='/' component={Landing}/>
              <Route exact path='/home' component={Home}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/contact' component={Contact}/>
              <Route exact path='/Events' component={EventCategory} />
              <Route exact path='/event/:id' component={EventDetail}/>
              <Route exact path='/:name' component={Category} />
              <Route exact path='/details/:id' component={Detail}/>
            </Switch>
            </div>
        </div>
        </Router>
    </JoaState>
  );
}

export default App;
