import React from 'react';

function Service(props) {
    return (
        <div className='service'>
            <img src={props.img} alt="" />
            <h1>{props.name}</h1>
            <div>{props.description}</div>
        </div>
    );
}

export default Service;