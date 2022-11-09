import React from 'react';
import Navbar from '../../components/navbar/navbar-component'
import PresentationsComponent from '../../components/ourWork/presentations/presentations-component'
import ContactUs from '../../components/contactUs/whiteContactUs';

function Presentations(props) {
    return (
        <div>
            <Navbar />
            <PresentationsComponent />
            <ContactUs />
        </div>
    );
}

export default Presentations;