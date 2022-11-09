import React from 'react';
import Navbar from '../../components/navbar/navbar-component'
import LandingComponent from '../../components/ourWork/landingPage/landingPage-component'
import ContactUs from '../../components/contactUs/whiteContactUs';

function Landing(props) {
    return (
        <div>
            <Navbar />
            <LandingComponent />
            <ContactUs />
        </div>
    );
}

export default Landing;