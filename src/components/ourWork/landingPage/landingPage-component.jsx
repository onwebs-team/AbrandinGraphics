import React from 'react';
import './Landing.scss'
import MacBookPro161728w from './img/MacBookPro161728w.jpg'
import iPadPro121024w from './img/iPadPro121024w.jpg'
import AndroidLarge360w from './img/AndroidLarge360w.jpg'

import Button from '../../button/button-component'
import Header from '../header/workHeader-component'
import Example from '../example/workExample-component'

function LandingComponent(props) {
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
                    <img className='landing-mac' src={MacBookPro161728w} alt="" />
                </div>
                <div className="landing-two-pictures">
                    <div className='landing-pro'>
                        <div className='landing-device'>Tablet version</div>
                        <img src={iPadPro121024w} alt="" />
                    </div>
                    <div className='landing-android'>
                        <div className='landing-device'>Mobile version</div>
                        <img src={AndroidLarge360w} alt="" />
                    </div>
                </div>
            </div>
            <div className="landing-button"><Button text='NEXT' /></div>
        </div>
    );
}

export default LandingComponent;