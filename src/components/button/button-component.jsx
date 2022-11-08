import React from 'react';
import './Button.scss'

function Button(props) {

    const behavior = () => props.work();

    return (
        <div className='button'>
            <button onClick={behavior}>{props.text}</button>
        </div>
    );
}

export default Button;