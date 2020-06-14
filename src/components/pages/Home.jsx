import React, { useEffect, useContext } from 'react';
import "./Pages.scss";
import Categories from '../Categories';
import JoaContext from '../../context/joa/joaContext';
import Spinner from '../layout/Spinner';
import { animateScroll as scroll } from 'react-scroll';

const Home = () => {
  const joaContext = useContext(JoaContext);
  const { getCategories } = joaContext;
  
  useEffect(() => {
    getCategories();
  // eslint-diable-next-line
}, [])
 
  return (
    <div className='home-container'>
      <div className='categories' >
        <Categories />
      </div>
    </div>
  )
}

export default Home;
