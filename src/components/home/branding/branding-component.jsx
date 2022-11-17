import React from 'react';
import Button from "../../button/button-component"
import './Branding.scss'

import Sticker1920 from './img/Desktop/1920w/Sticker.png'
import Sticker1728 from './img/Macbook/1728w/Sticker.png'
import Sticker1512 from './img/Macbook/1512w/Sticker.png'
import Sticker1440 from './img/Desktop/1440w/Sticker.png'
import Sticker1280 from './img/Macbook/1280w/Sticker.png'
import Sticker1024 from './img/Tablet/1024w/Sticker.png'
import Sticker834 from './img/Tablet/834w/Sticker.png'
import Sticker430 from './img/iPhone/430w/Sticker.png'
import Sticker390 from './img/iPhone/390w/Sticker.png'
import Sticker360 from './img/Android/Sticker.png'

function Branding(props) {

    const scroll = () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

    return (
        <div className='branding-container'>
            <div className="branding-sticker">
                <div className='img-1920'><img src={Sticker1920} alt="" /></div>
                <div className='img-1728'><img src={Sticker1728} alt="" /></div>
                <div className='img-1512'><img src={Sticker1512} alt="" /></div>
                <div className='img-1440'><img src={Sticker1440} alt="" /></div>
                <div className='img-1280'><img src={Sticker1280} alt="" /></div>
                <div className='img-1024'><img src={Sticker1024} alt="" /></div>
                <div className='img-834'><img src={Sticker834} alt="" /></div>
                <div className='img-430'><img src={Sticker430} alt="" /></div>
                <div className='img-390'><img src={Sticker390} alt="" /></div>
                <div className='img-360'><img src={Sticker360} alt="" /></div>
            </div>
            <div className='branding-info'>
                <div className="branding-text">
                    <h1>we also do branding from scratch!</h1>
                </div>
                <div className="branding-button"><Button text={'CONTACT US'} work={scroll} /></div>
            </div>
        </div>
    );
}

export default Branding;