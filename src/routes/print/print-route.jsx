import React from 'react';
import Navbar from '../../components/navbar/navbar-component'
import PrintComponent from '../../components/ourWork/print/print-component'
import ContactUs from '../../components/contactUs/whiteContactUs';

function Print(props) {
    return (
        <div>
            <Navbar />
            <PrintComponent />
            <ContactUs />
        </div>
    );
}

export default Print;