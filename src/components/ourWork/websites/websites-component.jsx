import React from 'react';
import { useNavigate } from "react-router-dom";

import './website.css'
import pic1 from './img-2/Collection SS22.jpg'
import pic2 from './img-2/Hompage.jpg'

import Button from '../../button/button-component'
import Header from '../header/workHeader-component'
import Example from '../example/workExample-component'

function WebsitesComponent(props) {

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
                    <img className='website-post' src={pic2} alt="" />
                </div>

                <div className="website-pictures">
                    <img className='website-hasbara' src={pic1} alt="" />
                </div>
               
            </div>
            <div className="website-button"><Button text='NEXT' work={nextPage} /></div>
        </div>
    );
}

export default WebsitesComponent;



// An example of a website for Medina Studio.
// A site that is both a portfolio and an ecommerce together.
// The challenge was to combine both, while presenting an impressive display of the images and a user-friendly characterization.