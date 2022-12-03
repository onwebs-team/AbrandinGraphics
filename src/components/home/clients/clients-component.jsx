import React, { useState, useEffect } from "react";
import './clients.scss';

let onwebs = require('./img2/Onwebs.png');
let primis = require('./img2/Primis.png');
let cobwebs = require('./img2/Cobwebs.png');
let trullion = require('./img2/Trullion.png');
let hasbara = require('./img2/Logo hasbara.png');
let medina = require('./img2/Logo medina.png');

const Clients = (props) => {

  const InfiniteSlider = function() {

    const ImagesContainer = document.querySelector('.clients');
    const ImagesScrollWidth = ImagesContainer.scrollWidth;
    const windowWidth = window.innerWidth
    let speed = 0
    if(windowWidth > 1512) {
      speed = 3
    } else if (windowWidth < 1512 && windowWidth > 1000) {
      speed = 2
    } else {
      speed = 1
    }
    console.log(speed)
    let width = 0;

    const slider = function(scroll) {
      const interval = setInterval(() => {
          ImagesContainer.scrollBy(scroll, 0); // X,Y Number
          width += scroll;
          // console.log(width)
          if(width > ImagesScrollWidth-3000) {
            clearInterval(interval);
            width = 0
            ImagesContainer.scrollTo({top: 0, left: 0});
            slider(scroll)
          }
      }, 10);
    }
    slider(speed);
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
    </div>
  );
}

export default Clients;