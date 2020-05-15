import React, { Fragment, useEffect, useState, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.scss";
import JoaState from './context/joa/JoaState';
import Home from "./components/Home";
import About from './components/pages/About'
import Contact from './components/pages/Contact';
import Category from './components/Category';
import Detail from './components/Detail';
import EventCategory from './components/EventCategory';
import Navbar from './components/layout/Navbar';
import Spinner from './components/layout/Spinner';

const App = () => {

  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);

  return (
    <JoaState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container" style={{padding : '50px', width : '70vw', height: '70wh', marginLeft: 'auto', marginRight : 'auto' }}>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/contact' component={Contact}/>
              {/* <Route exact path='/Events' render={props => ( 
                <EventCategory { ...props } categoryItems={events} />
              )}/> */}
              <Route exact path='/:categoryName' component={Category} />
              <Route exact path='/details/:id' component={Detail}/>
            </Switch>
            </div>
        </div>
        </Router>
    </JoaState>
  );
}

export default App;
