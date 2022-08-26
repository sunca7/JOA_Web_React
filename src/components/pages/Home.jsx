import React, { useEffect, useContext } from 'react';
import "./Pages.scss";
import Categories from '../Categories';
import JoaContext from '../../context/joa/joaContext';

const Home = () => {
  const joaContext = useContext(JoaContext);
  const { getCategories } = joaContext;
  
  useEffect(() => {
    getCategories();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
