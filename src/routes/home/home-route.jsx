import React from 'react';
import Navbar from '../../components/navbar/navbar-component';
import Header from '../../components/home/header/header.component';
import Services from '../../components/home/services/services-component';
import Branding from '../../components/home/branding/branding-component';
import Rebranding from '../../components/home/rebranding/rebranding-component';
import Quote from '../../components/home/quote/quote-component';
import Clients from '../../components/home/clients/clients-component';
import ContactUs from '../../components/contactUs/contactUs';

function Home(props) {
    return (
        <div>
            <Navbar />
            <Header />
            <Services />
            <Branding />
            <Rebranding />
            <Quote />
            <Clients />
            <ContactUs />
        </div>
    );
}

export default Home;