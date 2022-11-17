import React from 'react';
import './Rebranding.scss'

import ImageRebranding1920 from './img/Desktop/1920w/ImageRebranding.png'
import ImageRebranding1728 from './img/Macbook/1728w/ImageRebranding.png'
import ImageRebranding1512 from './img/Macbook/1512w/ImageRebranding.png'
import ImageRebranding1440 from './img/Desktop/1440w/ImageRebranding.png'
import ImageRebranding1280 from './img/Macbook/1280w/ImageRebranding.png'

function Rebranding(props) {
    return (
        <div className='rebranding'>
            <div className="rebranding-photo">
                <div className='img-1920'><img src={ImageRebranding1920} alt="" /></div>
                <div className='img-1728'><img src={ImageRebranding1728} alt="" /></div>
                <div className='img-1512'><img src={ImageRebranding1512} alt="" /></div>
                <div className='img-1440'><img src={ImageRebranding1440} alt="" /></div>
                <div className='img-1280'><img src={ImageRebranding1280} alt="" /></div>
            </div>
            <div className="rebranding-info">
                <div className="rebranding-header"><h1>rebranding?</h1></div>
                <div className="rebranding-text">
                    <div>When the character of the brand changes,</div>
                    <div>when the trend passes or even just if you feel like it -</div>
                    <div>we’re here for you.</div>
                    
                    <div className='rebranding-newLine'>We believe that it is possible to maintain the visual design basics</div>
                    <div>of the existing branding -</div>
                    <div>but refresh it, renew it and move with our dynamic world.</div>

                    <div className='rebranding-newLine'>We will be happy to accompany you!</div>
                </div>
            </div>
        </div>
    );
}

export default Rebranding;
