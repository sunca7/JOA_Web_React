import React, { useEffect, useContext } from 'react';
import Categories from '../Categories';
import JoaContext from '../../context/joa/joaContext';
import Spinner from '../layout/Spinner';

const Home = () => {
  const joaContext = useContext(JoaContext);
  
  useEffect(() => {
    joaContext.getPlaces();
    joaContext.getEvents();
    joaContext.getCategories();
  // eslint-diable-next-line
}, [])
 
  return (
    <div className="container" style={{padding : '50px', width : '70vw', height: '70wh', marginLeft: 'auto', marginRight : 'auto' }}>
      <Categories />
    </div>
  )
}

export default Home;
