import React from 'react';
import './Button.scss'

function Button(props) {
    return (
        <div className='button'>
            <button>{props.text}</button>
        </div>
    );
}

export default Button;