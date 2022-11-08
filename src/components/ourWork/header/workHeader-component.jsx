import React from 'react';
import './WorkHeader.scss'

function Header(props) {
    return (
        <div>
            <div className='work-header'>{props.header}</div>
            <div className='work-des'>{props.des}</div>
        </div>
    );
}

export default Header;