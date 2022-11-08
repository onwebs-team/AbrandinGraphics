import React from 'react';
import './Rebranding.scss'
import ImageRebranding from './ImageRebranding.png';

function Rebranding(props) {
    return (
        <div className='rebranding'>
            <div className="rebranding-photo">
                <img src={ImageRebranding} alt="" />
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
