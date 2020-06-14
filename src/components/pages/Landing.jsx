import React, { useEffect, useContext } from 'react';
import "./Pages.scss";
import JoaContext from '../../context/joa/joaContext';
import { animateScroll as scroll } from 'react-scroll';
import { Link } from "react-router-dom";

const Landing = () => {
//   const joaContext = useContext(JoaContext);
//   const { getCategories } = joaContext;
  
//   useEffect(() => {
//     getCategories();
//   // eslint-diable-next-line
// }, [])
 
  return (
      <div className='hello-container'>
        <p className='title'> 안녕</p>
        <p id='meaning'> "Ahn Nyeong"</p>
        <p id='meaning'>*Salut</p>
        <Link to='/home'>
            <a className="button1" onClick={() => scroll.scrollToBottom()}>Enter</a>
        </Link>
        {/* <a href="something" class="button1">Enter</a> */}
      </div>
  )
}

export default Landing;