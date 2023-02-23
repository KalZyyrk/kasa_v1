import React from 'react';
import Banner from '../components/Banner';
import bannerImg from '../assets/IMGAbout.jpg'
import DropDown from '../components/DropDown';
import aboutData from '../data/aboutData'

const About = () => {
    return (
        <div className='wrapper about'>
            <Banner imgSource={bannerImg} />
            <div className='about-container'>
                {aboutData.map((data, index) => {
                    return (
                        <DropDown id={index} title={data.title} content={data.content} />
                    )
                })}
            </div>
        </div>
    );
}

export default About;
