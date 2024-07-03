import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <div>
                <Link to="/">Home</Link>
            </div>

            <div>
                <div >
                    <Link to="/resume">Resume</Link>
                    <Link to="/projects">Projects</Link>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;