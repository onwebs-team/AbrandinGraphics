import React from 'react';
import "./Navbar.scss"
import logo from './Logo.png'

function Navbar(props) {
    return (
        <div className='navbar'>
            <img src={logo} alt="" />
        </div>
    );
}

export default Navbar;