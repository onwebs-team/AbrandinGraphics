import React, { useEffect }  from 'react';
import { useNavigate } from "react-router-dom";

import './Signs.scss'

import Button from '../../button/button2/button2-component'
import Header from '../header/workHeader-component'
import Example from '../example/workExample-component'

import SignPic1920 from './img/Desktop/1920w/SignPic.jpg'
import SignPic1728 from './img/Macbook/1728w/SignPic.jpg'
import SignPic1512 from './img/Macbook/1512w/SignPic.jpg'
import SignPic1440 from './img/Desktop/1440w/SignPic.jpg'
import SignPic1280 from './img/Macbook/1280w/SignPic.jpg'
import SignPic1024 from './img/Tablet/1024w/SignPic.jpg'
import SignPic834 from './img/Tablet/834w/SignPic.jpg'
import SignPic430 from './img/iPhone/430w/SignPic.jpg'
import SignPic390 from './img/iPhone/390w/SignPic.jpg'
import SignPic360 from './img/Android/SignPic.jpg'

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
                    <div className='img-1920'><img className='signs-img' src={SignPic1920} alt="" /></div>
                    <div className='img-1728'><img className='signs-img' src={SignPic1728} alt="" /></div>
                    <div className='img-1512'><img className='signs-img' src={SignPic1512} alt="" /></div>
                    <div className='img-1440'><img className='signs-img' src={SignPic1440} alt="" /></div>
                    <div className='img-1280'><img className='signs-img' src={SignPic1280} alt="" /></div>
                    <div className='img-1024'><img className='signs-img' src={SignPic1024} alt="" /></div>
                    <div className='img-834'><img className='signs-img' src={SignPic834} alt="" /></div>
                    <div className='img-430'><img className='signs-img' src={SignPic430} alt="" /></div>
                    <div className='img-390'><img className='signs-img' src={SignPic390} alt="" /></div>
                    <div className='img-360'><img className='signs-img' src={SignPic360} alt="" /></div>
                </div>
            </div>
            <div className="work-button"><Button text='NEXT' work={nextPage} /></div>
        </div>
    );
}

export default SignsComponent;