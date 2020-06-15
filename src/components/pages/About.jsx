import React from 'react';
import video from '../../assets/video.mp4';

const About = () => {
    return (
        <div className='about-container'>
            {/* <h1>About JOA</h1> */}
            <div className='text'>
                <p id='joa'>좋아</p>
                <p id='meaning'>"JOA" signifie «j'aime ça» en coréen.</p>
                <p id='meaning'>Découvrons des lieux liés à la vraie culture coréenne à Paris!</p>
            </div>
            {/* <video className='videoTag' autoPlay loop muted>
                <source src={video} type='video/mp4' />
            </video> */}
        </div>
    )
}

export default About;
