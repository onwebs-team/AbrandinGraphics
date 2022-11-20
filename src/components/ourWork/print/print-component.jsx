import React, { useEffect }  from 'react';
import { useNavigate } from "react-router-dom";

import './prints.css'
import Post1920 from './img-3/Desktop/1920w/Business card.png'
import Post1728 from './img-3/Macbook/1728w/Business card.png'
import Post1512 from './img-3/Macbook/1512w/Business card.png'
import Post1440 from './img-3/Desktop/1440w/Business card.png'
import Post1280 from './img-3/Macbook/1280w/Business card.png'
import Post1024 from './img-3/Tablet/1024w/Business card.png'
import Post834 from './img-3/Tablet/834w/Business card.png'
import Post430 from './img-3/iPhone/430w/Business card.png'
import Post390 from './img-3/iPhone/390w/Business card.png'
import Post360 from './img-3/Android/Business card.png'

import HasbaraPost1920 from './img-3/Desktop/1920w/Pic 1.png'
import HasbaraPost1728 from './img-3/Macbook/1728w/Pic 1.png'
import HasbaraPost1512 from './img-3/Macbook/1512w/Pic 1.png'
import HasbaraPost1440 from './img-3/Desktop/1440w/Pic 1.png'
import HasbaraPost1280 from './img-3/Macbook/1280w/Pic 1.png'
import HasbaraPost1024 from './img-3/Tablet/1024w/Pic 1.png'
import HasbaraPost834 from './img-3/Tablet/834w/Pic 1.png'
import HasbaraPost430 from './img-3/iPhone/430w/Pic 1.png'
import HasbaraPost390 from './img-3/iPhone/390w/Pic 1.png'
import HasbaraPost360 from './img-3/Android/Pic 1.png'

import HasbaraPost21920 from './img-3/Desktop/1920w/Pic 2.png'
import HasbaraPost21728 from './img-3/Macbook/1728w/Pic 2.png'
import HasbaraPost21512 from './img-3/Macbook/1512w/Pic 2.png'
import HasbaraPost21440 from './img-3/Desktop/1440w/Pic 2.png'
import HasbaraPost21280 from './img-3/Macbook/1280w/Pic 2.png'
import HasbaraPost21024 from './img-3/Tablet/1024w/Pic 2.png'
import HasbaraPost2834 from './img-3/Tablet/834w/Pic 2.png'
import HasbaraPost2430 from './img-3/iPhone/430w/Pic 2.png'
import HasbaraPost2390 from './img-3/iPhone/390w/Pic 2.png'
import HasbaraPost2360 from './img-3/Android/Pic 2.png'

import Button from '../../button/button2/button2-component'
import Header from '../header/workHeader-component'
import Example from '../example/workExample-component'

function PrintComponent(props) {

    useEffect(() => window.scrollTo({top: 0, left: 0}), []);

    const navigate = useNavigate();
    const nextPage = () => {
        navigate("/logos", { replace: true });
        window.scrollTo({top: 0, left: 0});
    }

    return (
        <div className='prints'>
            <Header header='prints' des='Business cards, books, notebooks, etc.' />
            <div className="print-examples">
                <Example 
                    first='Example of a business card for “Coach”.' 
                    second='A fitness trainer who specializes in a healthy lifestyle.' 
                    third='We decided to use authoritative colors, a friendly font and an aesthetic that represents cleanliness.' 
                />
                <div className="print-two-pictures">
                    <div className='img-1920'><img className='print-post' src={Post1920} alt="" /></div>
                    <div className='img-1728'><img className='print-post' src={Post1728} alt="" /></div>
                    <div className='img-1512'><img className='print-post' src={Post1512} alt="" /></div>
                    <div className='img-1440'><img className='print-post' src={Post1440} alt="" /></div>
                    <div className='img-1280'><img className='print-post' src={Post1280} alt="" /></div>
                    <div className='img-1024'><img className='print-post' src={Post1024} alt="" /></div>
                    <div className='img-834'><img className='print-post' src={Post834} alt="" /></div>
                    <div className='img-430'><img className='print-post' src={Post430} alt="" /></div>
                    <div className='img-390'><img className='print-post' src={Post390} alt="" /></div>
                    <div className='img-360'><img className='print-post' src={Post360} alt="" /></div>
                </div>
                <div className='new-example'>
                    <Example 
                        first='Example of a products for “Orbach” -' 
                        second='Law firm.' 
                        third='We chose the color gray because there is always a gray area between justice and injustice. The products are white to represent optimism.' 
                    />
                </div>
                <div className="print-pictures">
                    <div className='img-1920'><img className='print-hasbara' src={HasbaraPost1920} alt="" /></div>
                    <div className='img-1728'><img className='print-hasbara' src={HasbaraPost1728} alt="" /></div>
                    <div className='img-1512'><img className='print-hasbara' src={HasbaraPost1512} alt="" /></div>
                    <div className='img-1440'><img className='print-hasbara' src={HasbaraPost1440} alt="" /></div>
                    <div className='img-1280'><img className='print-hasbara' src={HasbaraPost1280} alt="" /></div>
                    <div className='img-1024'><img className='print-hasbara' src={HasbaraPost1024} alt="" /></div>
                    <div className='img-834'><img className='print-hasbara' src={HasbaraPost834} alt="" /></div>
                    <div className='img-430'><img className='print-hasbara' src={HasbaraPost430} alt="" /></div>
                    <div className='img-390'><img className='print-hasbara' src={HasbaraPost390} alt="" /></div>
                    <div className='img-360'><img className='print-hasbara' src={HasbaraPost360} alt="" /></div>
                    <div className='img-1920'><img className='print-hasbara' src={HasbaraPost21920} alt="" /></div>
                    <div className='img-1728'><img className='print-hasbara' src={HasbaraPost21728} alt="" /></div>
                    <div className='img-1512'><img className='print-hasbara' src={HasbaraPost21512} alt="" /></div>
                    <div className='img-1440'><img className='print-hasbara' src={HasbaraPost21440} alt="" /></div>
                    <div className='img-1280'><img className='print-hasbara' src={HasbaraPost21280} alt="" /></div>
                    <div className='img-1024'><img className='print-hasbara' src={HasbaraPost21024} alt="" /></div>
                    <div className='img-834'><img className='print-hasbara' src={HasbaraPost2834} alt="" /></div>
                    <div className='img-430'><img className='print-hasbara' src={HasbaraPost2430} alt="" /></div>
                    <div className='img-390'><img className='print-hasbara' src={HasbaraPost2390} alt="" /></div>
                    <div className='img-360'><img className='print-hasbara' src={HasbaraPost2360} alt="" /></div>
                </div>
               
            </div>
            <div className="work-button"><Button text='NEXT' work={nextPage} /></div>
        </div>
    );
}

export default PrintComponent;



// Example of a business card for “Coach”.
// A fitness trainer who specializes in a healthy lifestyle.
// We decided to use authoritative colors, a friendly font and an aesthetic that represents cleanliness.




// Example of a products for “Orbach” -
// Law firm.
// We chose the color gray because there is always a gray area between justice and injustice. The products are white to represent optimism.