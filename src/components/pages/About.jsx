import React from 'react';
import video from '../../assets/video.mp4';
import Spinner from '../layout/Spinner';

const About = () => {
    return (
        <div className='about-container'>
            {/* <h1>About JOA</h1> */}
            <video className='videoTag' poster={Spinner} autoPlay loop muted>
                <source src={video} type='video/mp4' />
            </video>
            <p id='joa'>좋아</p>
            <p id='meaning'>"JOA" signifie «j'aime ça» en coréen.</p>
            <p id='meaning'>Découvrons des lieux liés à la vraie culture coréenne à Paris!</p>
        </div>
    )
}

export default About;
