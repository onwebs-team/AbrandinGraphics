import React, { useEffect }  from 'react';
import { useNavigate } from "react-router-dom";

import './Signs.scss'

import Button from '../../button/button2/button2-component'
import Header from '../header/workHeader-component'
import Example from '../example/workExample-component'

import SignPic from './img/SignPic.jpg'

function SignsComponent(props) {

    useEffect(() => window.scrollTo({top: 0, left: 0}), []);

    const navigate = useNavigate();
    const nextPage = () => {
        navigate("/socialmedia", { replace: true });
        window.scrollTo({top: 0, left: 0});
    }

    return (
        <div className='signs'>
            <Header header='signs' des='In any resolution and material' />
            <div className="signs-examples">
                <Example 
                    first='Example of a sign for “Coach”.' 
                    second='A fitness trainer who specializes in a healthy lifestyle.' 
                    third='We decided to use authoritative colors, a friendly font and an aesthetic that represents cleanliness.' 
                />
                <div className="signs-pictures">
                    <img className='signs-img' src={SignPic} alt="" />
                </div>
            </div>
            <div className="work-button"><Button text='NEXT' work={nextPage} /></div>
        </div>
    );
}

export default SignsComponent;