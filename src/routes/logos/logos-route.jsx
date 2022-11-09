import React from 'react';
import Navbar from '../../components/navbar/navbar-component'
import LogosComponent from '../../components/ourWork/logos/logos-component'
import ContactUs from '../../components/contactUs/whiteContactUs';
function Logos(props) {
    return (
        <div>
            <Navbar />
            <LogosComponent />
            <ContactUs />
        </div>
    );
}

export default Logos;