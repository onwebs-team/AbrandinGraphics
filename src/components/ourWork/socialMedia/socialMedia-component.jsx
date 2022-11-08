import React from 'react';
import { useNavigate } from "react-router-dom";

import './SocialMedia.scss'

import Button from '../../button/button-component'
import Header from '../header/workHeader-component'
import Example from '../example/workExample-component'

import HightlightsIconsRunning from './img/HightlightsIconsRunning.jpg'
import HightlightsIconsFood from './img/HightlightsIconsFood.jpg'
import HightlightsIconsGym from './img/HightlightsIconsGym.jpg'
import HightlightsIconsMesitation from './img/HightlightsIconsMesitation.jpg'
import HightlightsIconsMartialArts from './img/HightlightsIconsMartialArts.jpg'
import Mockup from './img/Mockup.jpg'
import Post1 from './img/Post1.jpg'
import Post2 from './img/Post2.jpg'
import Post3 from './img/Post3.jpg'
import Post4 from './img/Post4.jpg'
import Post5 from './img/Post5.jpg'
import Post6 from './img/Post6.jpg'
import Post7 from './img/Post7.jpg'
import Post8 from './img/Post8.jpg'
import Post9 from './img/Post9.jpg'

function SocialMediaComponent(props) {

    const navigate = useNavigate();
    const nextPage = () => {
        navigate("/merchandise", { replace: true });
        window.scrollTo({top: 0, left: 0});
    }

    return (
        <div className='social'>
            <Header header='social media' des='Social Media' />
            <div className="social-examples">
                <Example 
                    first='Example of a Highlighs for “Coach”.' 
                    second='A fitness trainer who specializes in a healthy lifestyle.' 
                    third='We created for him a visual language for Instagram, which includes a design of the highlights area with icons.' 
                />
                <div className="social-five-pictures">
                    <img className='social-hightlight social-running' src={HightlightsIconsRunning} alt="" />
                    <img className='social-hightlight social-food' src={HightlightsIconsFood} alt="" />
                    <img className='social-hightlight social-gym' src={HightlightsIconsGym} alt="" />
                    <img className='social-hightlight social-mesitation' src={HightlightsIconsMesitation} alt="" />
                    <img className='social-hightlight social-arts' src={HightlightsIconsMartialArts} alt="" />
                </div>
                <div className="social-pictures">
                    <img className='social-mockup' src={Mockup} alt="" />
                </div>
                <Example 
                    first='An example of a Instagram posts Medina Studio.' 
                    second='Wedding dress design.' 
                    third='We wanted to convey an autumnal atmosphere according to the collection. Photos by: Dudi Hasson' 
                />
                <div className="social-three-pictures">
                    <img className='social-post social-post1' src={Post1} alt="" />
                    <img className='social-post social-post2' src={Post2} alt="" />
                    <img className='social-post social-post3' src={Post3} alt="" />
                </div>
                <div className="social-three-pictures">
                    <img className='social-post social-post4' src={Post4} alt="" />
                    <img className='social-post social-post5' src={Post5} alt="" />
                    <img className='social-post social-post6' src={Post6} alt="" />
                </div>
                <div className="social-three-pictures">
                    <img className='social-post social-post7' src={Post7} alt="" />
                    <img className='social-post social-post8' src={Post8} alt="" />
                    <img className='social-post social-post9' src={Post9} alt="" />
                </div>
            </div>
            <div className="social-button"><Button text='NEXT' work={nextPage} /></div>
        </div>
    );
}

export default SocialMediaComponent;