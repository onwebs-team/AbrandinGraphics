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
            img: IconWebsite,
            link: '/websites'
        },
        {
            name: 'Banners',
            description: 'Of any size and media',
            img: IconBanners,
            link: '/banners'
        },
        {
            name: 'Landing Pages',
            description: 'On Wordpress, Wix, html - css',
            img: IconLP,
            link: '/landing'
        },
        {
            name: 'Print',
            description: 'Business cards, books, notebooks, etc.',
            img: IconPrint,
            link: '/print'
        },
        {
            name: 'Logos',
            description: 'For any type of business',
            img: IconLogos,
            link: '/logos'
        },
        {
            name: 'Presentations',
            description: 'Stunning slides',
            img: IconPresentations,
            link: '/presentations'
        },
        {
            name: 'Signs',
            description: 'In any resolution and material',
            img: IconSigns,
            link: '/signs'
        },
        {
            name: 'Social Media',
            description: 'Visual language',
            img: IconSocialMedia,
            link: '/socialmedia'
        },
        {
            name: 'Merchandise',
            description: 'Just choose',
            img: IconMerchandise,
            link: '/merchandise'
        },
    ]

    return (
        <div className='services-container'>
            <div className="service-header">
                <h1>what are we doing?</h1>
                <div>We design everyting.</div>
            </div>
            <div className="services">
                {services.map((s, i) => <Service name={s.name} description={s.description} img={s.img} link={s.link} key={i} />)}
            </div>
        </div>
    );
}

export default Services;