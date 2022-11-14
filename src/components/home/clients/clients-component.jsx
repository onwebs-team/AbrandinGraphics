import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './clients.css';


let onwebs = require('./img2/Onweb.png');
let primis = require('./img2/Primis.png');
let cobwebs = require('./img2/Cobwebs.png');
let trullion = require('./img2/Trullion.png');
let hasbara = require('./img2/Logo hasbara.png');
let medina = require('./img2/Logo medina.png');

class clients extends Component{
  render(){
    const settings = {
     
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return(
      <div className="mainContainer">
       
        <Slider {...settings}>
          <div className="container">
            <img src={onwebs}  alt=""/>
          </div>
          <div className="container">
            <img src={primis}  alt="" />
          </div>
          <div className="container">
            <img src={cobwebs}  alt="" />
          </div>
          <div className="container">
            <img src={trullion}  alt="" />
          </div>
          <div className="container">
            <img src={hasbara}  alt="" />
          </div>
          <div className="container">
            <img src={medina}  alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default clients;