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
      <div className='hello-container'>
        <p className='title'> 안녕</p>
        <p className='info'> "Ahn Nyeong"</p>
        <p className='info'>*Salut</p>
        <a className="button1" onClick={() => scroll.scrollToBottom()}>Enter</a>
        {/* <a href="something" class="button1">Enter</a> */}
      </div>
      <div className='categories' >
        <Categories />
      </div>
    </div>
  )
}

export default Home;
