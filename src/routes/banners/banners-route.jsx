import React from 'react';
import Navbar from '../../components/navbar/navbar-component'
import BannersComponent from '../../components/ourWork/banners/banners-component'
import ContactUs from '../../components/contactUs/whiteContactUs';

function BannersRoute(props) {
    return (
        <div>
            <Navbar />
            <BannersComponent />
            <ContactUs />
        </div>
    );
}

export default BannersRoute;