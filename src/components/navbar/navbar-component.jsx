import React from 'react';
import { useNavigate } from "react-router-dom";
import "./Navbar.scss"
import logo from './Logo.png'

function Navbar(props) {

    const navigate = useNavigate();
    const homePage = () => navigate("/", { replace: true });

    return (
        <div className='navbar'>
            <img onClick={homePage} src={logo} alt="" />
        </div>
    );
}

export default Navbar;