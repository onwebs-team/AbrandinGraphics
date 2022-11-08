import React from 'react';
import { useNavigate } from "react-router-dom";

import './Logos.scss'

import Button from '../../button/button-component'
import Header from '../header/workHeader-component'
import Example from '../example/workExample-component'

import Picmama1 from './img/Picmama1.jpg'
import Picmama2 from './img/Picmama2.jpg'
import Picorbach1 from './img/Picorbach1.jpg'
import Picorbach2 from './img/Picorbach2.jpg'
import Picb91 from './img/Picb91.jpg'
import Picb92 from './img/Picb92.jpg'

function LogosComponent(props) {

    const navigate = useNavigate();
    const nextPage = () => {
        navigate("/presentations", { replace: true });
        window.scrollTo({top: 0, left: 0});
    }

    return (
        <div className='logos'>
            <Header header='logos' des='For any type of business' />
            <div className="logos-examples">
                <Example 
                    first='An example of logo for the "Mama" winery,' 
                    second='an Italian family winery from the Golan Mountains.' 
                    third='We took the letters M and A and arranged them in an interesting way. The burgundy color is classic and romantic. Just like wine.' 
                />
                <div className="logos-two-pictures">
                    <img className='logos-img logos-img-left' src={Picmama1} alt="" />
                    <img className='logos-img logos-img-right' src={Picmama2} alt="" />
                </div>
                <Example 
                    first='Example of a logo card for “Orbach” -' 
                    second='Law firm who specializes in energy and infrastructure.' 
                    third='The logo is round to represent energy and looks like a road to show infrastructure.' 
                />
                <div className="logos-two-pictures">
                    <img className='logos-img logos-img-left' src={Picorbach1} alt="" />
                    <img className='logos-img logos-img-right' src={Picorbach2} alt="" />
                </div>
                <Example 
                    first='An example of logo for the "Mama" winery,' 
                    second='an Italian family winery from the Golan Mountains.' 
                    third='We took the letters M and A and arranged them in an interesting way. The burgundy color is classic and romantic. Just like wine.' 
                />
                <div className="logos-two-pictures">
                    <img className='logos-img logos-img-left' src={Picb91} alt="" />
                    <img className='logos-img logos-img-right' src={Picb92} alt="" />
                </div>
            </div>
            <div className="logos-button"><Button text='NEXT' work={nextPage}/></div>
        </div>
    );
}

export default LogosComponent;




