import React, { useEffect }  from 'react';
import { useNavigate } from "react-router-dom";

import './website.css'
import pic11920 from './img-2/Desktop/1920w/Collection SS22.webp'
import pic11728 from './img-2/Macbook/1728w/Collection SS22.webp'
import pic11512 from './img-2/Macbook/1512w/Collection SS22.webp'
import pic11440 from './img-2/Desktop/1440w/Collection SS22.webp'
import pic11280 from './img-2/Macbook/1280w/Collection SS22.webp'
import pic11024 from './img-2/Tablet/1024w/Collection SS22.webp'
import pic1834 from './img-2/Tablet/834w/Collection SS22.webp'
import pic1430 from './img-2/iPhone/430w/Collection SS22.webp'
import pic1390 from './img-2/iPhone/390w/Collection SS22.webp'
import pic1360 from './img-2/Android/Collection SS22.webp'

import pic21920 from './img-2/Desktop/1920w/Hompage.webp'
import pic21728 from './img-2/Macbook/1728w/Hompage.webp'
import pic21512 from './img-2/Macbook/1512w/Hompage.webp'
import pic21440 from './img-2/Desktop/1440w/Hompage.webp'
import pic21280 from './img-2/Macbook/1280w/Hompage.webp'
import pic21024 from './img-2/Tablet/1024w/Hompage.webp'
import pic2834 from './img-2/Tablet/834w/Hompage.webp'
import pic2430 from './img-2/iPhone/430w/Hompage.webp'
import pic2390 from './img-2/iPhone/390w/Hompage.webp'
import pic2360 from './img-2/Android/Hompage.webp'


import Button from '../../button/button2/button2-component'
import Header from '../header/workHeader-component'
import Example from '../example/workExample-component'

function WebsitesComponent(props) {

    useEffect(() => window.scrollTo({top: 0, left: 0}), []);

    const navigate = useNavigate();
    const nextPage = () => {
        navigate("/banners", { replace: true });
        window.scrollTo({top: 0, left: 0});
    }

    return (
        <div className='website'>
            <Header header='website' des='On Wordpress, Elementor, Wix, html - css' />
            <div className="website-examples">
                <Example 
                    first=' An example of a website for Medina Studio.' 
                    second='A site that is both a portfolio and an ecommerce together.' 
                    third='The challenge was to combine both, while presenting an impressive display of the images and a user-friendly characterization.' 
                />
                <div className="website-one-pictures">
                    <div className='img-1920'><img className='website-post' src={pic21920} alt="" /></div>
                    <div className='img-1728'><img className='website-post' src={pic21728} alt="" /></div>
                    <div className='img-1512'><img className='website-post' src={pic21512} alt="" /></div>
                    <div className='img-1440'><img className='website-post' src={pic21440} alt="" /></div>
                    <div className='img-1280'><img className='website-post' src={pic21280} alt="" /></div>
                    <div className='img-1024'><img className='website-post' src={pic21024} alt="" /></div>
                    <div className='img-834'><img className='website-post' src={pic2834} alt="" /></div>
                    <div className='img-430'><img className='website-post' src={pic2430} alt="" /></div>
                    <div className='img-390'><img className='website-post' src={pic2390} alt="" /></div>
                    <div className='img-360'><img className='website-post' src={pic2360} alt="" /></div>
                </div>

                <div className="website-pictures">
                    <div className='img-1920'><img className='website-hasbara' src={pic11920} alt="" /></div>
                    <div className='img-1728'><img className='website-hasbara' src={pic11728} alt="" /></div>
                    <div className='img-1512'><img className='website-hasbara' src={pic11512} alt="" /></div>
                    <div className='img-1440'><img className='website-hasbara' src={pic11440} alt="" /></div>
                    <div className='img-1280'><img className='website-hasbara' src={pic11280} alt="" /></div>
                    <div className='img-1024'><img className='website-hasbara' src={pic11024} alt="" /></div>
                    <div className='img-834'><img className='website-hasbara' src={pic1834} alt="" /></div>
                    <div className='img-430'><img className='website-hasbara' src={pic1430} alt="" /></div>
                    <div className='img-390'><img className='website-hasbara' src={pic1390} alt="" /></div>
                    <div className='img-360'><img className='website-hasbara' src={pic1360} alt="" /></div>
                </div>
               
            </div>
            <div className="work-button"><Button text='NEXT' work={nextPage} /></div>
        </div>
    );
}

export default WebsitesComponent;



// An example of a website for Medina Studio.
// A site that is both a portfolio and an ecommerce together.
// The challenge was to combine both, while presenting an impressive display of the images and a user-friendly characterization.