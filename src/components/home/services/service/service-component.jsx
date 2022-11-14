import React from 'react';
import { Link } from "react-router-dom";

function Service(props) {
    return (
        <Link className='service' to={props.link}>
            <img src={props.img} alt="" />
            <h1>{props.name}</h1>
            <div>{props.description}</div>
        </Link>
    );
}

export default Service;