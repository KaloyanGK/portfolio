import React from 'react';
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Pic from '../../img/k4.png'
import thumbup from '../../img/thumbup.png'
import glassesimoji from '../../img/glassesimoji.png'
import Floating from '../Floating/Floating'
import PC from '../../img/pc.png'

import { motion } from 'framer-motion'
import { Link } from "react-scroll";


const Intro = () => {

    const transition = { duratation: 2, type: 'spring' };

    return <div className='intro'>
        <div className='i-left'>
            <div className='i-name'>
                <span >Hi! I am</span>
                <span >Kaloyan Karagyozov</span>
                <span>I'm a passionate Software Engineering student. Using
                    an analytical mindset I am able to analyze information,
                    identify and solve problems. At present learning
                    JavaScript/React depths and heading to full stack dev.
                </span>
            </div>
            <Link
                spy='true'
                to='Contact'
                smooth={true}
                activeClass="activeClass">
                <button className='button i-button'>Reach me</button>
            </Link>
            <div className='i-icons'>
                <img src={Github} alt='' />
                <img src={LinkedIn} alt='' />
                <img src={Instagram} alt='' />
            </div>
        </div>
        <div className='i-right'>
            <img src={Vector1} alt='' />
            <img src={Vector2} alt='' />
            <img src={Pic} alt=''  />
            <motion.img
                initial={{ left: '-36%' }}
                whileInView={{ left: '-24%' }}
                transition={transition}
                src={glassesimoji} alt='' />
            <motion.div
                initial={{ top: '-4%', left: '-74%' }}
                whileInView={{ left: '68%' }}
                transition={transition}

                style={{ top: '-4%', left: '80%' }}>
                <Floating image={PC} txt1='Passionate' txt2='Developer' />
            </motion.div>
            <motion.div
                initial={{ top: '18rem', left: '9rem' }}
                whileInView={{ left: '0' }}
                transition={transition}


                style={{ top: '60%' }}>
                <Floating image={thumbup} txt1='Practice' txt2='makes perfect' />
            </motion.div>
            <div className='blur' style={{ background: 'rgb(238 210 255' }}></div>
            <div className='blur' style={{ background: '#C1F5FF', top: '10rem', width: '21rem', height: '11rem', left: '-9rem' }}></div>
        </div>
    </div>
}
export default Intro;
