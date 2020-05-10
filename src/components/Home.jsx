import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './layout/Navbar';
import Categories from './Categories';
import db from '../db/index';
import About from './pages/About'
import Contact from './pages/Contact';
import Category from './Category';
import Detail from './Detail';
import EventCategory from './EventCategory';
import JoaState from '../context/joa/JoaState';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [places, setPlaces] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedId, setSelectedId] = useState('');
  const [selectedPlace, setSelectedPlace] = useState({});
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
  
    db.collection("categories")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach((doc) => (
          categories.push({
            id: doc.id,
            name: doc.data().name,
            order: doc.data().order,
            picture: doc.data().picture,
            type : doc.data().type
          })
      ));
      setCategories(categories);
      });
    
      db.collection("places")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          places.push(doc.data());
        });
        setPlaces(places);
      });

      db.collection("events")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          events.push(doc.data());
        });
        console.log("events ", events);
        setEvents(events);
      });
    }, []);

  const getCategory = async id => {
    console.log("select category in home ", id);
    let res  = await places.filter(i => i.category_id === id);
    setSelectedCategory(res);
    console.log("selected category map places ", selectedCategory);
  };

  const getPlace = async id => {
    setLoading(true);
    let placeInfo = {};
    placeInfo = await places.filter(place => place.id === id);

    setSelectedPlace(placeInfo[0]);
    setLoading(false);
    console.log("selected place ", selectedPlace);
  };
  
  return (
    <Router>
      <div style={{display : 'block'}}>
        <Navbar />
        <div className="container" style={{padding : '50px'}}>
          <Switch>
              <Route exact path='/' render={(props) => (
                <Fragment>
                  <Categories categories={categories} getCategory={getCategory} />
                </Fragment>
              )}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/contact' component={Contact}/>
              {/* <Route exact path='/Events' render={props => ( 
                <EventCategory { ...props } categoryItems={events} />
              )}/> */}
              <Route exact path='/:categoryName' render={props => ( 
                <Category { ...props } categoryItems={selectedCategory} />
              )}/>
              <Route exact path='/details/:id' render={props => ( 
                <Detail { ...props } place={selectedPlace} getPlace={getPlace} loading={loading}/>
              )}/>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default Home;
