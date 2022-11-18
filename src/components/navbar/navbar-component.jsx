import React from 'react';
import { useNavigate } from "react-router-dom";
import "./Navbar.scss"

import logo1920 from './img/Desktop/1920w/Logo.png'
import logo1728 from './img/Macbook/1728w/Logo.png'
import logo1512 from './img/Macbook/1512w/Logo.png'
import logo1440 from './img/Desktop/1440w/Logo.png'
import logo1280 from './img/Macbook/1280w/Logo.png'
import logo1024 from './img/Tablet/1024w/Logo.png'
import logo834 from './img/Tablet/834w/Logo.png'
import logo430 from './img/iPhone/430w/Logo.png'
import logo390 from './img/iPhone/390w/Logo.png'
import logo360 from './img/Android/Logo.png'

function Navbar(props) {

    const navigate = useNavigate();
    const homePage = () => navigate("/", { replace: true });

    return (
        <div className='navbar'>
            <div className='img-1920'><img onClick={homePage} src={logo1920} alt="" /></div>
            <div className='img-1728'><img onClick={homePage} src={logo1728} alt="" /></div>
            <div className='img-1512'><img onClick={homePage} src={logo1512} alt="" /></div>
            <div className='img-1440'><img onClick={homePage} src={logo1440} alt="" /></div>
            <div className='img-1280'><img onClick={homePage} src={logo1280} alt="" /></div>
            <div className='img-1024'><img onClick={homePage} src={logo1024} alt="" /></div>
            <div className='img-834'><img onClick={homePage} src={logo834} alt="" /></div>
            <div className='img-430'><img onClick={homePage} src={logo430} alt="" /></div>
            <div className='img-390'><img onClick={homePage} src={logo390} alt="" /></div>
            <div className='img-360'><img onClick={homePage} src={logo360} alt="" /></div>
        </div>
    );
}

export default Navbar;