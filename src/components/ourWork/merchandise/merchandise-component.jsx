import React from 'react';
import { useNavigate } from "react-router-dom";

import './Merchandise.scss'

import Button from '../../button/button-component'
import Header from '../header/workHeader-component'
import Example from '../example/workExample-component'

import PicOnot from './img/PicOnot.jpg'

function MerchandiseComponent(props) {

    const navigate = useNavigate();
    const nextPage = () => {
        navigate("/websites", { replace: true });
        window.scrollTo({top: 0, left: 0});
    }

    return (
        <div className='merchandise'>
            <Header header='merchandise' des='Just choose' />
            <div className="merchandise-examples">
                <Example 
                    first='Example of shirts for “Onot”.' 
                    second='A nursery in the style of the establishment of the State of Israel.' 
                    third='The employees wanted two shirts - for gils and boys.' 
                />
                <div className="merchandise-pictures">
                    <img className='merchandise-img' src={PicOnot} alt="" />
                </div>
            </div>
            <div className="merchandise-button"><Button text='NEXT' work={nextPage} /></div>
        </div>
    );
}

export default MerchandiseComponent;