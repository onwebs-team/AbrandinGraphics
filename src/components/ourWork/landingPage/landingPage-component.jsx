import React, { useEffect }  from 'react';
import { useNavigate } from "react-router-dom";

import './Landing.scss'
import MacBookPro161728w1920 from './img/Desktop/1920w/MacBookPro161728w.webp'
import MacBookPro161728w1728 from './img/Macbook/1728w/MacBookPro161728w.webp'
import MacBookPro161728w1512 from './img/Macbook/1512w/MacBookPro161728w.webp'
import MacBookPro161728w1440 from './img/Desktop/1440w/MacBookPro161728w.webp'
import MacBookPro161728w1280 from './img/Macbook/1280w/MacBookPro161728w.webp'
import MacBookPro161728w1024 from './img/Tablet/1024w/MacBookPro161728w.webp'
import MacBookPro161728w834 from './img/Tablet/834w/MacBookPro161728w.webp'
import MacBookPro161728w430 from './img/iPhone/430w/MacBookPro161728w.webp'
import MacBookPro161728w390 from './img/iPhone/390w/MacBookPro161728w.webp'
import MacBookPro161728w360 from './img/Android/MacBookPro161728w.webp'

import iPadPro121024w1920 from './img/Desktop/1920w/iPadPro121024w.webp'
import iPadPro121024w1728 from './img/Macbook/1728w/iPadPro121024w.webp'
import iPadPro121024w1512 from './img/Macbook/1512w/iPadPro121024w.webp'
import iPadPro121024w1440 from './img/Desktop/1440w/iPadPro121024w.webp'
import iPadPro121024w1280 from './img/Macbook/1280w/iPadPro121024w.webp'
import iPadPro121024w1024 from './img/Tablet/1024w/iPadPro121024w.webp'
import iPadPro121024w834 from './img/Tablet/834w/iPadPro121024w.webp'
import iPadPro121024w430 from './img/iPhone/430w/iPadPro121024w.webp'
import iPadPro121024w390 from './img/iPhone/390w/iPadPro121024w.webp'
import iPadPro121024w360 from './img/Android/iPadPro121024w.webp'

import AndroidLarge360w1920 from './img/Desktop/1920w/AndroidLarge360w.webp'
import AndroidLarge360w1728 from './img/Macbook/1728w/AndroidLarge360w.webp'
import AndroidLarge360w1512 from './img/Macbook/1512w/AndroidLarge360w.webp'
import AndroidLarge360w1440 from './img/Desktop/1440w/AndroidLarge360w.webp'
import AndroidLarge360w1280 from './img/Macbook/1280w/AndroidLarge360w.webp'
import AndroidLarge360w1024 from './img/Tablet/1024w/AndroidLarge360w.webp'
import AndroidLarge360w834 from './img/Tablet/834w/AndroidLarge360w.webp'
import AndroidLarge360w430 from './img/iPhone/430w/AndroidLarge360w.webp'
import AndroidLarge360w390 from './img/iPhone/390w/AndroidLarge360w.webp'
import AndroidLarge360w360 from './img/Android/AndroidLarge360w.webp'


import Button from '../../button/button2/button2-component'
import Header from '../header/workHeader-component'
import Example from '../example/workExample-component'

function LandingComponent(props) {

    useEffect(() => window.scrollTo({top: 0, left: 0}), []);

    const navigate = useNavigate();
    const nextPage = () => {
        navigate("/print", { replace: true });
        window.scrollTo({top: 0, left: 0});
    }

    return (
        <div className='landing'>
            <Header header='landing pages' des='On Wordpress, Elementor, Wix, html - css' />
            <div className="landing-examples">
                <Example 
                    first='An example of a landing page for “Onwebs”.' 
                    second='A software house.' 
                    third='The idea was to create a young and dynamic vibe with seriousness and professionalism.' 
                />
                <div className="landing-pictures">
                    <div className='img-1920'><img className='landing-mac' src={MacBookPro161728w1920} alt="" /></div>
                    <div className='img-1728'><img className='landing-mac' src={MacBookPro161728w1728} alt="" /></div>
                    <div className='img-1512'><img className='landing-mac' src={MacBookPro161728w1512} alt="" /></div>
                    <div className='img-1440'><img className='landing-mac' src={MacBookPro161728w1440} alt="" /></div>
                    <div className='img-1280'><img className='landing-mac' src={MacBookPro161728w1280} alt="" /></div>
                    <div className='img-1024'><img className='landing-mac' src={MacBookPro161728w1024} alt="" /></div>
                    <div className='img-834'><img className='landing-mac' src={MacBookPro161728w834} alt="" /></div>
                    <div className='img-430'><img className='landing-mac' src={MacBookPro161728w430} alt="" /></div>
                    <div className='img-390'><img className='landing-mac' src={MacBookPro161728w390} alt="" /></div>
                    <div className='img-360'><img className='landing-mac' src={MacBookPro161728w360} alt="" /></div>
                </div>
                <div className="landing-two-pictures">
                    <div className='landing-pro'>
                        <div className='landing-device'>Tablet version</div>
                        <div className='img-1920'><img src={iPadPro121024w1920} alt="" /></div>
                        <div className='img-1728'><img src={iPadPro121024w1728} alt="" /></div>
                        <div className='img-1512'><img src={iPadPro121024w1512} alt="" /></div>
                        <div className='img-1440'><img src={iPadPro121024w1440} alt="" /></div>
                        <div className='img-1280'><img src={iPadPro121024w1280} alt="" /></div>
                        <div className='img-1024'><img src={iPadPro121024w1024} alt="" /></div>
                        <div className='img-834'><img src={iPadPro121024w834} alt="" /></div>
                        <div className='img-430'><img src={iPadPro121024w430} alt="" /></div>
                        <div className='img-390'><img src={iPadPro121024w390} alt="" /></div>
                        <div className='img-360'><img src={iPadPro121024w360} alt="" /></div>
                    </div>
                    <div className='landing-android'>
                        <div className='landing-device'>Mobile version</div>
                        <div className='img-1920'><img src={AndroidLarge360w1920} alt="" /></div>
                        <div className='img-1728'><img src={AndroidLarge360w1728} alt="" /></div>
                        <div className='img-1512'><img src={AndroidLarge360w1512} alt="" /></div>
                        <div className='img-1440'><img src={AndroidLarge360w1440} alt="" /></div>
                        <div className='img-1280'><img src={AndroidLarge360w1280} alt="" /></div>
                        <div className='img-1024'><img src={AndroidLarge360w1024} alt="" /></div>
                        <div className='img-834'><img src={AndroidLarge360w834} alt="" /></div>
                        <div className='img-430'><img src={AndroidLarge360w430} alt="" /></div>
                        <div className='img-390'><img src={AndroidLarge360w390} alt="" /></div>
                        <div className='img-360'><img src={AndroidLarge360w360} alt="" /></div>
                    </div>
                </div>
            </div>
            <div className="work-button"><Button text='NEXT' work={nextPage} /></div>
        </div>
    );
}

export default LandingComponent;