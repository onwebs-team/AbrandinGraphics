import React from 'react';
import Navbar from '../../components/navbar/navbar-component'
import WebsitesComponent from '../../components/ourWork/websites/websites-component'
import ContactUs from '../../components/contactUs/whiteContactUs';

function Websites(props) {
    return (
        <div>
            <Navbar />
            <WebsitesComponent />
            <ContactUs />
        </div>
    );
}

export default Websites;