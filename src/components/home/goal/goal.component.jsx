import React from 'react';
import './goal.scss';
import Logo from './img/challenge accepted.png'
import Button from '../../button/button-component'

function Goal() {
    return (
        <div className='goal'>
            <div className="goal-green">
                <h2>our goal</h2>
                <p> Is to make the world a more beautifal place </p>
                <div className="goal-button"><Button text='CONTACT US' /></div>
            </div>
            <div className="goal-img">
                <img src={Logo} alt="React Logo"/>
            </div>
        </div>
    );
}

export default Goal;