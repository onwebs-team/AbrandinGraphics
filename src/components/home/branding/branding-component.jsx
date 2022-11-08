import React from 'react';
import Button from "../../button/button-component"
import Sticker from './Sticker.png'
import './Branding.scss'

function Branding(props) {
    return (
        <div className='branding-container'>
            <div className="branding-sticker"><img src={Sticker} alt="" /></div>
            <div className='branding-info'>
                <div className="branding-text">
                    <h1>we also do branding from scratch!</h1>
                </div>
                <div className="branding-button"><Button text={'CONTACT US'}/></div>
            </div>
        </div>
    );
}

export default Branding;