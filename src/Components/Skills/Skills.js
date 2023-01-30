import React from 'react';
import './Skills.css';

// import Upwork from '../../img/Upwork.png'
import ReactImg from '../../img/react.png'
import Develope from '../../img/develope.png'
import CSS from '../../img/css.png'
import JavaScript from '../../img/javascript.png'
import HTML from '../../img/html.png'

const Work = () => {
    return <div className='works' id='Skills'>
        <div className='awesome'>
            <span>Some of my skills</span>
            <span>Front-end skill set:</span>
            <span>
                HTML&CSS 
                <br />
                JAVASCRIPT
                <br />
               REACT
                <br />
                REST API, GIT, UNIT TESTS
            </span>

            <div className='blur s-blur1' style={{ background: '#ABF1FF94' }}></div>
        </div>
        {/* right side */}
        <div className='w-right'>
            <div className='w-mainCircle'>
                <div className='w-secCircle'>
                    <img src={JavaScript} alt="" />
                </div>
                <div className='w-secCircle'>
                    <img src={ReactImg} alt="" />
                </div>
                <div className='w-secCircle'>
                    <img src={Develope} alt="" />
                </div>
                <div className='w-secCircle'>
                    <img src={HTML} alt="" />
                </div>
                <div className='w-secCircle'>
                    <img src={CSS} alt="" />
                </div>
            </div>
            {/* background Circles */}
            <div className='w-backCircle blueCircle'></div>
            <div className='w-backCircle yellowCircle'></div>
        </div>
    </div>

}
export default Work