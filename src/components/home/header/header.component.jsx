import React from 'react';
import './Header.scss'
import Button from "../../button/button-component"
import ImageHeader from './ImageHeader.png'

function Header(props) {
    return (
        <div className="header">
            <div className='header-container'>
                <div className="header-info">
                    <div className="header-text">
                        <div>we are a</div>
                        <div>branding & marketing</div>
                        <div>design studio</div>
                    </div>
                    <div className="header-button">
                        <Button text={'CONTACT US'}/>
                    </div>
                </div>
                <div className="header-photo">
                    <img src={ImageHeader} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Header;