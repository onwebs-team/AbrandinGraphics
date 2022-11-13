import React from 'react';
import './workExample.scss'

function Example(props) {
    return (
        <div className="work-example-text">
            <div>{props.first}</div>
            <div>{props.second}</div>
            <div>{props.third}</div>
        </div>
    );
}

export default Example;