import React from 'react';
import './About.css';
import Glasses from '../../img/glasses.png'
import Card from '../Card/Card'
import resume from './resume.pdf'
import About from '../../img/about.png'
import About2 from '../../img/about2.png'


import { motion } from 'framer-motion'


const Services = () => {

    const transition = { duratation: 2, type: 'spring' };


    return (
        <div className='services' id='about-me'>
            {/* left side */}
            <div className='awesome'>
                <span>About me</span>
                <span>A self-starter who always eager to learn new skills <br />and expand his knowledge</span>
                <span>As a passionate Software Student I love to write code.

                    Using <br />an analytical mindset I am able to analyze information, <br /> identify and solve problems.
                </span>
                <a href={resume} download>
                    <button className='button s-button'>Download CV</button>
                </a>
                <div className='blur s-blur1' style={{ background: '#ABF1FF94' }}></div>
            </div>
            {/* right side */}
            <div className='cards'>
                {/* first card */}
                <motion.div
                    initial={{ left: '25rem' }}
                    whileInView={{ left: '14rem' }}
                    transition={transition}
                >
                    <Card emoji={About}
                        heading={'About me'}
                        detail={'Gaming, Movies, Sports, Traveling, Reading'}
                    />
                </motion.div>
                {/* second card */}
                <motion.div
                    initial={{ left: "-11rem", top: "12rem" }}
                    whileInView={{ left: "-4rem" }}
                    transition={transition}

                    style={{ top: '12rem', left: '-4rem' }}>
                    <Card emoji={Glasses}
                        heading={'As a Developer'}
                        detail={'HTML&CSS, JavaScript, React, Rest API, GitHub'}
                    />
                </motion.div>
                {/* third card */}
                <motion.div
                    initial={{ top: "19rem", left: "25rem" }}
                    whileInView={{ left: "12rem" }}
                    transition={transition}
                    style={{ top: '19rem', left: '12rem' }}>
                    <Card emoji={About2}
                        heading={'More about me'}
                        detail={'Team player, Self-starter, Fast learner, Analytical thinking, Problem solver '}
                    />
                </motion.div>
                <div className='blur s-blur2' style={{ background: 'var(--purple)' }}> </div>
            </div>

        </div>
    )
}
export default Services;