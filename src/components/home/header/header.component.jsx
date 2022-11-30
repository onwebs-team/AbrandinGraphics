import React from 'react';
import './Header.scss'
import HeaderButton from "../../button/HeaderButton/headerButton-component"

// import ImageHeader from './img/ImageHeader.png'
import ImageHeader1920 from './img/Desktop/1920w/ImageHeader.png'
import ImageHeader1728 from './img/Macbook/1728w/ImageHeader.png'
import ImageHeader1512 from './img/Macbook/1512w/ImageHeader.png'
import ImageHeader1440 from './img/Desktop/1440w/ImageHeader.png'
import ImageHeader1280 from './img/Macbook/1280w/ImageHeader.png'

function Header(props) {

    const scroll = () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

    return (
        <div className="header">
            <div className='header-container'>
                <div className="header-info">
                    <div className="header-text">
                        <div>we are a</div>
                        <div>branding & graphics</div>
                        <div>design studio</div>
                    </div>
                    <div className="header-button">
                        <HeaderButton text={'CONTACT US'} work={scroll} />
                    </div>
                </div>
                <div className="header-photo">
                    <div className='img-1920'><img src={ImageHeader1920} alt="" /></div>
                    <div className='img-1728'><img src={ImageHeader1728} alt="" /></div>
                    <div className='img-1512'><img src={ImageHeader1512} alt="" /></div>
                    <div className='img-1440'><img src={ImageHeader1440} alt="" /></div>
                    <div className='img-1280'><img src={ImageHeader1280} alt="" /></div>
                    <div className='img-1024'><img src={ImageHeader1280} alt="" /></div>
                    <div className='img-834'><img src={ImageHeader1280} alt="" /></div>
                </div>
            </div>
        </div>
    );
}

export default Header;