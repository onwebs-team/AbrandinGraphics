import React from 'react';
import Navbar from '../../components/navbar/navbar-component'
import LandingComponent from '../../components/ourWork/landingPage/landingPage-component'

function Landing(props) {
    return (
        <div>
            <Navbar />
            <LandingComponent />
        </div>
    );
}

export default Landing;