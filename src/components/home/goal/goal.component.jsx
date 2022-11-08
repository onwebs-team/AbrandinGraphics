import React from 'react';
import './goal.scss';
import Logo from './img/challenge accepted.png'
import Button from '../../button/button-component'

function Goal() {

    const scroll = () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    
    return (
        <div className='goal'>
            <div className="goal-green">
                <h2>our goal</h2>
                <p> Is to make the world a more beautifal place </p>
                <div className="goal-button"><Button text='CONTACT US' work={scroll} /></div>
            </div>
            <div className="goal-img">
                <img src={Logo} alt="React Logo"/>
            </div>
        </div>
    );
}

export default Goal;