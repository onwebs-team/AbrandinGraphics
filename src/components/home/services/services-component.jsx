import React from 'react';
import Service from './service/service-component';
import './Services.scss'

import IconWebsite from './Icons/IconWebsite.png'
import IconBanners from './Icons/IconBanners.png'
import IconLP from './Icons/IconLP.png'
import IconPrint from './Icons/IconPrint.png'
import IconLogos from './Icons/IconLogos.png'
import IconPresentations from './Icons/IconPresentations.png'
import IconSigns from './Icons/IconSigns.png'
import IconSocialMedia from './Icons/IconSocialMedia.png'
import IconMerchandise from './Icons/IconMerchandise.png'


function Services(props) {

    const services = [
        {
            name: 'Websites',
            description: 'On Wordpress, Wix, html - css',
            img: IconWebsite
        },
        {
            name: 'Banners',
            description: 'Of any size and media',
            img: IconBanners
        },
        {
            name: 'Landing Pages',
            description: 'On Wordpress, Wix, html - css',
            img: IconLP
        },
        {
            name: 'Print',
            description: 'Business cards, books, notebooks, etc.',
            img: IconPrint
        },
        {
            name: 'Logos',
            description: 'For any type of business',
            img: IconLogos
        },
        {
            name: 'Presentations',
            description: 'Stunning slides',
            img: IconPresentations
        },
        {
            name: 'Signs',
            description: 'In any resolution and material',
            img: IconSigns
        },
        {
            name: 'Social Media',
            description: 'Visual language',
            img: IconSocialMedia
        },
        {
            name: 'Merchandise',
            description: 'Just choose',
            img: IconMerchandise
        },
    ]

    return (
        <div className="services">
            <div className='services-container'>
                <div className="service-header">
                    <h1>what are we doing?</h1>
                    <div>We design everyting.</div>
                </div>
                <div className="services">
                    {services.map((s, i) => <Service name={s.name} description={s.description} img={s.img} key={i} />)}
                </div>
            </div>
        </div>
    );
}

export default Services;