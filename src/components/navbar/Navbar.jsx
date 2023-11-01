import React from 'react';
import './navbar.css';
import logo_svg from '../../assets/logo_svg.svg';

const Navbar = () => {
    return (
        <div className="community__navbar">
            <div className="community__navbar-links">
                <div className="community__navbar-links_logo">
                    <img src={logo_svg} alt="Logo"/>
                </div>
            </div>
        </div>
    ) 
}

export default Navbar