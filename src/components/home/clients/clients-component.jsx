import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './clients.css';


import onwebs1920 from './img2/Desktop/1920w/Onweb.png'
import onwebs1728 from './img2/Macbook/1728w/Onweb.png'
import onwebs1512 from './img2/Macbook/1512w/Onweb.png'
import onwebs1440 from './img2/Desktop/1440w/Onweb.png'
import onwebs1280 from './img2/Macbook/1280w/Onweb.png'

import primis1920 from './img2/Desktop/1920w/Primis.png'
import primis1728 from './img2/Macbook/1728w/Primis.png'
import primis1512 from './img2/Macbook/1512w/Primis.png'
import primis1440 from './img2/Desktop/1440w/Primis.png'
import primis1280 from './img2/Macbook/1280w/Primis.png'
import primis1024 from './img2/Tablet/1024w/Primis.png'
import primis834 from './img2/Tablet/834w/Primis.png'
import primis430 from './img2/iPhone/430w/Primis.png'
import primis390 from './img2/iPhone/390w/Primis.png'
import primis360 from './img2/Android/Primis.png'

import cobwebs1920 from './img2/Desktop/1920w/Cobwebs.png'
import cobwebs1728 from './img2/Macbook/1728w/Cobwebs.png'
import cobwebs1512 from './img2/Macbook/1512w/Cobwebs.png'
import cobwebs1440 from './img2/Desktop/1440w/Cobwebs.png'
import cobwebs1280 from './img2/Macbook/1280w/Cobwebs.png'
import cobwebs1024 from './img2/Tablet/1024w/Cobwebs.png'
import cobwebs834 from './img2/Tablet/834w/Cobwebs.png'
import cobwebs430 from './img2/iPhone/430w/Cobwebs.png'
import cobwebs390 from './img2/iPhone/390w/Cobwebs.png'
import cobwebs360 from './img2/Android/Cobwebs.png'

import trullion1920 from './img2/Desktop/1920w/Trullion.png'
import trullion1728 from './img2/Macbook/1728w/Trullion.png'
import trullion1512 from './img2/Macbook/1512w/Trullion.png'
import trullion1440 from './img2/Desktop/1440w/Trullion.png'
import trullion1280 from './img2/Macbook/1280w/Trullion.png'
import trullion1024 from './img2/Tablet/1024w/Trullion.png'
import trullion834 from './img2/Tablet/834w/Trullion.png'

// let hasbara = require('./img2/Logo hasbara.png');
// let medina = require('./img2/Logo medina.png');


class clients extends Component{
  render(){
    const settings = {
     
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 4,
      autoplay: true,
      speed: 10000,
      autoplaySpeed: 100,
      cssEase: "linear"
    };
    return(
      <div className="mainContainer">
      
        <Slider {...settings}>
          <div className="container">
            <div className='img-1920'><img src={onwebs1920} alt="" /></div>
            <div className='img-1728'><img src={onwebs1728} alt="" /></div>
            <div className='img-1512'><img src={onwebs1512} alt="" /></div>
            <div className='img-1440'><img src={onwebs1440} alt="" /></div>
            <div className='img-1280'><img src={onwebs1280} alt="" /></div>
            {/* <div className='img-1024'><img src={onwebs1024} alt="" /></div>
            <div className='img-834'><img src={onwebs834} alt="" /></div>
            <div className='img-430'><img src={onwebs430} alt="" /></div>
            <div className='img-390'><img src={onwebs390} alt="" /></div>
            <div className='img-360'><img src={onwebs360} alt="" /></div> */}
          </div>
          <div className="container">
            <div className='img-1920'><img src={primis1920} alt="" /></div>
            <div className='img-1728'><img src={primis1728} alt="" /></div>
            <div className='img-1512'><img src={primis1512} alt="" /></div>
            <div className='img-1440'><img src={primis1440} alt="" /></div>
            <div className='img-1280'><img src={primis1280} alt="" /></div>
            <div className='img-1024'><img src={primis1024} alt="" /></div>
            <div className='img-834'><img src={primis834} alt="" /></div>
            <div className='img-430'><img src={primis430} alt="" /></div>
            <div className='img-390'><img src={primis390} alt="" /></div>
            <div className='img-360'><img src={primis360} alt="" /></div>
          </div>
          <div className="container">
            <div className='img-1920'><img src={cobwebs1920} alt="" /></div>
            <div className='img-1728'><img src={cobwebs1728} alt="" /></div>
            <div className='img-1512'><img src={cobwebs1512} alt="" /></div>
            <div className='img-1440'><img src={cobwebs1440} alt="" /></div>
            <div className='img-1280'><img src={cobwebs1280} alt="" /></div>
            <div className='img-1024'><img src={cobwebs1024} alt="" /></div>
            <div className='img-834'><img src={cobwebs834} alt="" /></div>
            <div className='img-430'><img src={cobwebs430} alt="" /></div>
            <div className='img-390'><img src={cobwebs390} alt="" /></div>
            <div className='img-360'><img src={cobwebs360} alt="" /></div>
          </div>
          <div className="container">
            <div className='img-1920'><img src={trullion1920} alt="" /></div>
            <div className='img-1728'><img src={trullion1728} alt="" /></div>
            <div className='img-1512'><img src={trullion1512} alt="" /></div>
            <div className='img-1440'><img src={trullion1440} alt="" /></div>
            <div className='img-1280'><img src={trullion1280} alt="" /></div>
            <div className='img-1024'><img src={trullion1024} alt="" /></div>
            <div className='img-834'><img src={trullion834} alt="" /></div>
            {/* <div className='img-430'><img src={trullion430} alt="" /></div>
            <div className='img-390'><img src={trullion390} alt="" /></div>
            <div className='img-360'><img src={trullion360} alt="" /></div> */}
          </div>
          {/* <div className="container">
            <img src={hasbara}  alt="" />
          </div>
          <div className="container">
            <img src={medina}  alt="" />
          </div> */}
        </Slider>
      </div>
    );
  }
}

export default clients;