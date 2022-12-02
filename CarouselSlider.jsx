import { useEffect } from "react";
import { useRef } from "react";
// import { CarouselItem } from "./Carouseltem";
import React from 'react';
 import './clients.css';
 
let onwebs = require('./img2/Onweb.png');
let primis = require('./img2/Primis.png');
let cobwebs = require('./img2/Cobwebs.png');
let trullion = require('./img2/Trullion.png');
let hasbara = require('./img2/Logo hasbara.png');
let medina = require('./img2/Logo medina.png');

export default function CarouselSlider(){
    
    const speed = 1;
    const sliderRef = useRef();
    const listRef = useRef();

    let width;
    let x = 0;
    let x2;
    let sliderRef2;

    function clone() {
        sliderRef2 = sliderRef.current.cloneNode(true);
        sliderRef.current.appendChild(sliderRef2);
        sliderRef2.style.left = `${width}px`;
      }

    function moveFirst(){
        x-=speed;
       if (width >= Math.abs(x)) {
            listRef.current.style.left = `${x}px`;
       } else {
           x = width;
       }
    }

    function moveSecond() {
        x2 -= speed;
    
        if (sliderRef2.offsetWidth >= Math.abs(x2)) {
            sliderRef2.style.left = `${x2}px`;
        } else {
          x2 = width;
        }
      }


    function carousel(){
        clone();
        let a = setInterval(moveFirst, 10);
        let b = setInterval(moveSecond, 10);
    }


    useEffect(()=>{
       width = listRef.current.offsetWidth;
       x2 = width;
        carousel();
    },[])


    
    
    return(
        <div className="carousel__slider" ref={sliderRef}>
            <div className="carousel__list" ref={listRef}>
                 
       <div className="carousel__item">
       <img class="item" src={primis}  alt=""/>
           
        </div>
        <div className="carousel__item">
      <img class="item" src={cobwebs}  alt=""/>
        
     </div>
     <div className="carousel__item">
     <img class="item" src={trullion}  alt=""/>
        
     </div>
     <div className="carousel__item">
     <img class="item" src={hasbara}  alt=""/>
        
     </div>
     <div className="carousel__item">
     <img class="item" src={medina}  alt=""/>
        
     </div>
     <div className="carousel__item">
     <img class="item" src={hasbara}  alt=""/>
        
   </div>
   <div className="carousel__item">
     <img class="item" src={onwebs}  alt=""/>
        
   </div>
            </div>
        </div>
    );
}


// return(
//     <div className="carousel__slider" ref={sliderRef}>
//         <div className="carousel__list" ref={listRef}>
//             {
//                 logos.map(logo=>(
//                     <CarouselItem key={logo} logo={logo}/>
//                 ))
//             }
//         </div>
//     </div>
// );
// }