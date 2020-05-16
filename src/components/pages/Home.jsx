import React, { Fragment, useEffect, useState, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Categories from '../Categories';
import db from '../../db/index';
import JoaState from '../../context/joa/JoaState';
import Category from '../Category';
import JoaContext from '../../context/joa/joaContext';
import Spinner from '../layout/Spinner';

const Home = (props) => {
  const joaContext = useContext(JoaContext);
  
  useEffect(() => {
    joaContext.getPlaces();
    joaContext.getEvents();
    joaContext.getCategories();
  // eslint-diable-next-line
}, [])
 
  return (
    <div className="container" style={{padding : '50px', width : '70vw', height: '70wh', marginLeft: 'auto', marginRight : 'auto' }}>
      <Categories getCategory={props.getCategory} categories={props.categories} />
    </div>
  )
}

export default Home;
