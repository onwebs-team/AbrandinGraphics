import React from 'react';
import './HeaderButton.scss'

function HeaderButton(props) {

    const behavior = () => props.work();

    return (
        <div className='header-button'>
            <button onClick={behavior}>{props.text}</button>
        </div>
    );
}

export default HeaderButton;