import React from "react";
import "./Navbar.css";

import { Link } from "react-scroll";
const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name"></div>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: "none" }}>
                        <Link
                            spy='true'
                            to='about-me'
                            smooth={true}
                            activeClass="activeClass"
                        >
                            <li>ABOUT ME</li>
                        </Link>
                        <Link
                            spy='true'
                            to='Skills'
                            smooth={true}
                            activeClass="activeClass"
                        >
                            <li>SKILLS</li>
                        </Link>
                        

                        <Link
                            spy='true'
                            to='Experience'
                            smooth={true}
                            activeClass="activeClass"
                        >
                            <li>EXPERIENCE</li>
                        </Link>

                        <Link
                            spy='true'
                            to='Contact'
                            smooth={true}
                            activeClass="activeClass"
                        >
                            <li>CONTACTS</li>
                        </Link>


                    </ul>
                </div>
                {/* <Link
                    spy='true'
                    to='Contact'
                    smooth={true}
                    activeClass="activeClass">
                    <button className="button n-button">Contact</button>
                </Link> */}
            </div>
        </div>
    );
};
export default Navbar;
