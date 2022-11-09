import React from 'react';
import Navbar from '../../components/navbar/navbar-component'
import SignsComponent from '../../components/ourWork/signs/signs-component'
import ContactUs from '../../components/contactUs/whiteContactUs';

function Signs(props) {
    return (
        <div>
            <Navbar />
            <SignsComponent />
            <ContactUs />
        </div>
    );
}

export default Signs;