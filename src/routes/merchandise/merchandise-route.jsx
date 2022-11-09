import React from 'react';
import Navbar from '../../components/navbar/navbar-component'
import MerchandiseComponent from '../../components/ourWork/merchandise/merchandise-component'
import ContactUs from '../../components/contactUs/whiteContactUs';

function Merchandise(props) {
    return (
        <div>
            <Navbar />
            <MerchandiseComponent />
            <ContactUs />
        </div>
    );
}

export default Merchandise;