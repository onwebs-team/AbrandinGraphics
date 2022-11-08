import React from 'react';
import Navbar from '../../components/navbar/navbar-component'
import BannersComponent from '../../components/ourWork/banners/banners-component'

function BannersRoute(props) {
    return (
        <div>
            <Navbar />
            <BannersComponent />
        </div>
    );
}

export default BannersRoute;