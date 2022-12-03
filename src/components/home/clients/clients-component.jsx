import React, { useState, useEffect } from "react";
import './clients.scss';

let onwebs = require('./img2/Onwebs.png');
let primis = require('./img2/Primis.png');
let cobwebs = require('./img2/Cobwebs.png');
let trullion = require('./img2/Trullion.png');
let hasbara = require('./img2/Logo hasbara.png');
let medina = require('./img2/Logo medina.png');

const Clients = () => {

  const InfiniteSlider = function() {

    const ImagesContainer = document.querySelector('.clients');
    const windowWidth = window.innerWidth
    const offsetWidth = ImagesContainer.offsetWidth;
    const scrollWidth = ImagesContainer.scrollWidth;

    let speedPixel = 0
    let repeatEveryMSec = 0
    if(windowWidth > 1512) {
      speedPixel = 2
      repeatEveryMSec = 10
    } else if(windowWidth <= 1512 && windowWidth > 1000) {
      speedPixel = 1
      repeatEveryMSec = 10
    } else {
      speedPixel = 1
      repeatEveryMSec = 15
    }
    
    let width = 0;

    const slider = function(scroll, repeatEveryMSec) {
      const interval = setInterval(() => {
          ImagesContainer.scrollBy(scroll, 0);
          width += scroll;
          console.log(offsetWidth + ImagesContainer.scrollLeft);
          console.log('scrollWidth = '+scrollWidth);
          if(offsetWidth + ImagesContainer.scrollLeft >= scrollWidth) {
            clearInterval(interval);
            width = 0
            ImagesContainer.scrollTo({top: 0, left: 0});
            slider(scroll)
          }
      }, repeatEveryMSec);
    }
    slider(speedPixel, repeatEveryMSec);
  }

  useEffect(() => {
    InfiniteSlider()
  }, [])

  const images = [
    {
      name: 'onwebs',
      desktop: onwebs
    },
    {
      name: 'primis',
      desktop: primis
    },
    {
      name: 'cobwebs',
      desktop: cobwebs
    },
    {
      name: 'trullion',
      desktop: trullion
    },
    {
      name: 'hasbara',
      desktop: hasbara
    },
    {
      name: 'medina',
      desktop: medina
    },
  ]

  return (
    <div className="clients">
      {images.map((img,i) =>
        <div key={i}  className="client">
          <img src={img.desktop} className={img.name}/>
        </div>
      )}
      {images.map((img,i) =>
        <div key={i}  className="client">
          <img src={img.desktop} className={img.name}/>
        </div>
      )}
      {images.map((img,i) =>
        <div key={i}  className="client">
          <img src={img.desktop} className={img.name}/>
        </div>
      )}
      {images.map((img,i) =>
        <div key={i}  className="client">
          <img src={img.desktop} className={img.name}/>
        </div>
      )}
      {images.map((img,i) =>
        <div key={i}  className="client">
          <img src={img.desktop} className={img.name}/>
        </div>
      )}
      {images.map((img,i) =>
        <div key={i}  className="client">
          <img src={img.desktop} className={img.name}/>
        </div>
      )}
      {images.map((img,i) =>
        <div key={i}  className="client">
          <img src={img.desktop} className={img.name}/>
        </div>
      )}
      {images.map((img,i) =>
        <div key={i}  className="client">
          <img src={img.desktop} className={img.name}/>
        </div>
      )}
      {images.map((img,i) =>
        <div key={i}  className="client">
          <img src={img.desktop} className={img.name}/>
        </div>
      )}
      {images.map((img,i) =>
        <div key={i}  className="client">
          <img src={img.desktop} className={img.name}/>
        </div>
      )}
    </div>
  );
}

export default Clients;