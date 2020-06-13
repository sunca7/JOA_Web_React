import React from 'react';
import video from '../../assets/video.mp4';

const About = () => {
    return (
        <div className='about-container'>
            {/* <h1>About JOA</h1> */}
            <video className='videoTag' autoPlay loop muted>
                <source src={video} type='video/mp4' />
            </video>
            <p id='joa'>좋아</p>
            <p id='meaning'>"JOA" means 'I like it' in Korean.</p>
            <p id='meaning'>Let's discover places related to real korean culture in Paris!</p>
        </div>
    )
}

export default About;
