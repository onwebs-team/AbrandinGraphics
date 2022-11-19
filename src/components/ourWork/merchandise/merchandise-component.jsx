import React, { useEffect }  from 'react';
import { useNavigate } from "react-router-dom";

import './Merchandise.scss'

import Button from '../../button/button2/button2-component'
import Header from '../header/workHeader-component'
import Example from '../example/workExample-component'

import PicOnot from './img/PicOnot.jpg'
import PicOnot1920 from './img/Desktop/1920w/PicOnot.jpg'
import PicOnot1728 from './img/Macbook/1728w/PicOnot.jpg'
import PicOnot1512 from './img/Macbook/1512w/PicOnot.jpg'
import PicOnot1440 from './img/Desktop/1440w/PicOnot.jpg'
import PicOnot1280 from './img/Macbook/1280w/PicOnot.jpg'
import PicOnot1024 from './img/Tablet/1024w/PicOnot.jpg'
import PicOnot834 from './img/Tablet/834w/PicOnot.jpg'
import PicOnot430 from './img/iPhone/430w/PicOnot.jpg'
import PicOnot390 from './img/iPhone/390w/PicOnot.jpg'
import PicOnot360 from './img/Android/PicOnot.jpg'

function MerchandiseComponent(props) {

    useEffect(() => window.scrollTo({top: 0, left: 0}), []);

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
                    <div className='img-1920'><img className='merchandise-img' src={PicOnot1920} alt="" /></div>
                    <div className='img-1728'><img className='merchandise-img' src={PicOnot1728} alt="" /></div>
                    <div className='img-1512'><img className='merchandise-img' src={PicOnot1512} alt="" /></div>
                    <div className='img-1440'><img className='merchandise-img' src={PicOnot1440} alt="" /></div>
                    <div className='img-1280'><img className='merchandise-img' src={PicOnot1280} alt="" /></div>
                    <div className='img-1024'><img className='merchandise-img' src={PicOnot1024} alt="" /></div>
                    <div className='img-834'><img className='merchandise-img' src={PicOnot834} alt="" /></div>
                    <div className='img-430'><img className='merchandise-img' src={PicOnot430} alt="" /></div>
                    <div className='img-390'><img className='merchandise-img' src={PicOnot390} alt="" /></div>
                    <div className='img-360'><img className='merchandise-img' src={PicOnot360} alt="" /></div>
                </div>
            </div>
            <div className="work-button"><Button text='NEXT' work={nextPage} /></div>
        </div>
    );
}

export default MerchandiseComponent;