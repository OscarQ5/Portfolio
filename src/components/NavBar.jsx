import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">Home</Link>
            </div>

            <div className="navbar-menu">
                <div className="navbar-start">
                    <Link className="navbar-item" to="/resume">Resume</Link>
                    <Link className="navbar-item" to="/projects">Projects</Link>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;