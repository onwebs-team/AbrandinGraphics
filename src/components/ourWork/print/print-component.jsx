import React from 'react';
import { useNavigate } from "react-router-dom";

import './prints.css'
import Post from './img-3/Business card.png'

import HasbaraPost from './img-3/Pic 1.png'
import HasbaraPost2 from './img-3/Pic 2.png'

import Button from '../../button/button-component'
import Header from '../header/workHeader-component'
import Example from '../example/workExample-component'

function PrintComponent(props) {

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
                    <img className='print-post' src={Post} alt="" />
                    
                </div>
                <Example 
                    first='Example of a products for “Orbach” -' 
                    second='Law firm.' 
                    third='We chose the color gray because there is always a gray area between justice and injustice. The products are white to represent optimism.' 
                />
                <div className="print-pictures">
                    <img className='print-hasbara' src={HasbaraPost} alt="" />
                    <img className='print-hasbara' src={HasbaraPost2} alt="" />

                </div>
               
            </div>
            <div className="print-button"><Button text='NEXT' work={nextPage} /></div>
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