import React from 'react';
import './Button2.scss'

function Button(props) {

    const behavior = () => props.work();

    return (
        <div className='button2'>
            <button onClick={behavior}>{props.text}</button>
        </div>
    );
}

export default Button;