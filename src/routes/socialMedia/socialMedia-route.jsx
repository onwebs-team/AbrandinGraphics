import React from 'react';
import Navbar from '../../components/navbar/navbar-component'
import SocialMediaComponent from '../../components/ourWork/socialMedia/socialMedia-component'
import ContactUs from '../../components/contactUs/whiteContactUs';

function SocialMedia(props) {
    return (
        <div>
            <Navbar />
            <SocialMediaComponent />
            <ContactUs />
        </div>
    );
}

export default SocialMedia;