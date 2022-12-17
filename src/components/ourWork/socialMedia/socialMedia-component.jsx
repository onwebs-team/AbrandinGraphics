import React, { useEffect }  from 'react';
import { useNavigate } from "react-router-dom";

import './SocialMedia.scss'

import Button from '../../button/button2/button2-component'
import Header from '../header/workHeader-component'
import Example from '../example/workExample-component'

import HightlightsIconsRunning1920 from './img/Desktop/1920w/HightlightsIconsRunning.webp'
import HightlightsIconsRunning1728 from './img/Macbook/1728w/HightlightsIconsRunning.webp'
import HightlightsIconsRunning1512 from './img/Macbook/1512w/HightlightsIconsRunning.webp'
import HightlightsIconsRunning1440 from './img/Desktop/1440w/HightlightsIconsRunning.webp'
import HightlightsIconsRunning1280 from './img/Macbook/1280w/HightlightsIconsRunning.webp'
import HightlightsIconsRunning1024 from './img/Tablet/1024w/HightlightsIconsRunning.webp'
import HightlightsIconsRunning834 from './img/Tablet/834w/HightlightsIconsRunning.webp'
import HightlightsIconsRunning430 from './img/iPhone/430w/HightlightsIconsRunning.webp'
import HightlightsIconsRunning390 from './img/iPhone/390w/HightlightsIconsRunning.webp'
import HightlightsIconsRunning360 from './img/Android/HightlightsIconsRunning.webp'

import HightlightsIconsFood1920 from './img/Desktop/1920w/HightlightsIconsFood.webp'
import HightlightsIconsFood1728 from './img/Macbook/1728w/HightlightsIconsFood.webp'
import HightlightsIconsFood1512 from './img/Macbook/1512w/HightlightsIconsFood.webp'
import HightlightsIconsFood1440 from './img/Desktop/1440w/HightlightsIconsFood.webp'
import HightlightsIconsFood1280 from './img/Macbook/1280w/HightlightsIconsFood.webp'
import HightlightsIconsFood1024 from './img/Tablet/1024w/HightlightsIconsFood.jpg'
import HightlightsIconsFood834 from './img/Tablet/834w/HightlightsIconsFood.jpg'
import HightlightsIconsFood430 from './img/iPhone/430w/HightlightsIconsFood.jpg'
import HightlightsIconsFood390 from './img/iPhone/390w/HightlightsIconsFood.jpg'
import HightlightsIconsFood360 from './img/Android/HightlightsIconsFood.jpg'

import HightlightsIconsGym1920 from './img/Desktop/1920w/HightlightsIconsGym.webp'
import HightlightsIconsGym1728 from './img/Macbook/1728w/HightlightsIconsGym.webp'
import HightlightsIconsGym1512 from './img/Macbook/1512w/HightlightsIconsGym.webp'
import HightlightsIconsGym1440 from './img/Desktop/1440w/HightlightsIconsGym.webp'
import HightlightsIconsGym1280 from './img/Macbook/1280w/HightlightsIconsGym.webp'
import HightlightsIconsGym1024 from './img/Tablet/1024w/HightlightsIconsGym.webp'
import HightlightsIconsGym834 from './img/Tablet/834w/HightlightsIconsGym.webp'
import HightlightsIconsGym430 from './img/iPhone/430w/HightlightsIconsGym.webp'
import HightlightsIconsGym390 from './img/iPhone/390w/HightlightsIconsGym.webp'
import HightlightsIconsGym360 from './img/Android/HightlightsIconsGym.webp'

import HightlightsIconsMesitation1920 from './img/Desktop/1920w/HightlightsIconsMesitation.webp'
import HightlightsIconsMesitation1728 from './img/Macbook/1728w/HightlightsIconsMesitation.webp'
import HightlightsIconsMesitation1512 from './img/Macbook/1512w/HightlightsIconsMesitation.webp'
import HightlightsIconsMesitation1440 from './img/Desktop/1440w/HightlightsIconsMesitation.webp'
import HightlightsIconsMesitation1280 from './img/Macbook/1280w/HightlightsIconsMesitation.webp'
import HightlightsIconsMesitation1024 from './img/Tablet/1024w/HightlightsIconsMesitation.webp'
import HightlightsIconsMesitation834 from './img/Tablet/834w/HightlightsIconsMesitation.webp'
import HightlightsIconsMesitation430 from './img/iPhone/430w/HightlightsIconsMesitation.webp'
import HightlightsIconsMesitation390 from './img/iPhone/390w/HightlightsIconsMesitation.webp'
import HightlightsIconsMesitation360 from './img/Android/HightlightsIconsMesitation.webp'

import HightlightsIconsMartialArts1920 from './img/Desktop/1920w/HightlightsIconsMartialArts.webp'
import HightlightsIconsMartialArts1728 from './img/Macbook/1728w/HightlightsIconsMartialArts.webp'
import HightlightsIconsMartialArts1512 from './img/Macbook/1512w/HightlightsIconsMartialArts.webp'
import HightlightsIconsMartialArts1440 from './img/Desktop/1440w/HightlightsIconsMartialArts.webp'
import HightlightsIconsMartialArts1280 from './img/Macbook/1280w/HightlightsIconsMartialArts.webp'
import HightlightsIconsMartialArts1024 from './img/Tablet/1024w/HightlightsIconsMartialArts.webp'
import HightlightsIconsMartialArts834 from './img/Tablet/834w/HightlightsIconsMartialArts.webp'
import HightlightsIconsMartialArts430 from './img/iPhone/430w/HightlightsIconsMartialArts.webp'
import HightlightsIconsMartialArts390 from './img/iPhone/390w/HightlightsIconsMartialArts.webp'
import HightlightsIconsMartialArts360 from './img/Android/HightlightsIconsMartialArts.webp'

import Mockup1920 from './img/Desktop/1920w/Mockup.png'
import Mockup1728 from './img/Macbook/1728w/Mockup.png'
import Mockup1512 from './img/Macbook/1512w/Mockup.png'
import Mockup1440 from './img/Desktop/1440w/Mockup.png'
import Mockup1280 from './img/Macbook/1280w/Mockup.png'
import Mockup1024 from './img/Tablet/1024w/Mockup.png'
import Mockup834 from './img/Tablet/834w/Mockup.png'
import Mockup430 from './img/iPhone/430w/Mockup.png'
import Mockup390 from './img/iPhone/390w/Mockup.png'
import Mockup360 from './img/Android/Mockup.png'

import Post11920 from './img/Desktop/1920w/Post1.webp'
import Post11728 from './img/Macbook/1728w/Post1.webp'
import Post11512 from './img/Macbook/1512w/Post1.webp'
import Post11440 from './img/Desktop/1440w/Post1.webp'
import Post11280 from './img/Macbook/1280w/Post1.webp'
import Post11024 from './img/Tablet/1024w/Post1.webp'
import Post1834 from './img/Tablet/834w/Post1.webp'
import Post1430 from './img/iPhone/430w/Post1.webp'
import Post1390 from './img/iPhone/390w/Post1.webp'
import Post1360 from './img/Android/Post1.webp'

import Post21920 from './img/Desktop/1920w/Post2.webp'
import Post21728 from './img/Macbook/1728w/Post2.webp'
import Post21512 from './img/Macbook/1512w/Post2.webp'
import Post21440 from './img/Desktop/1440w/Post2.webp'
import Post21280 from './img/Macbook/1280w/Post2.webp'
import Post21024 from './img/Tablet/1024w/Post2.webp'
import Post2834 from './img/Tablet/834w/Post2.webp'
import Post2430 from './img/iPhone/430w/Post2.webp'
import Post2390 from './img/iPhone/390w/Post2.webp'
import Post2360 from './img/Android/Post2.webp'

import Post31920 from './img/Desktop/1920w/Post3.webp'
import Post31728 from './img/Macbook/1728w/Post3.webp'
import Post31512 from './img/Macbook/1512w/Post3.webp'
import Post31440 from './img/Desktop/1440w/Post3.webp'
import Post31280 from './img/Macbook/1280w/Post3.webp'
// import Post31024 from './img/Tablet/1024w/Post3.jpg'
// import Post3834 from './img/Tablet/834w/Post3.jpg'
// import Post3430 from './img/iPhone/430w/Post3.jpg'
import Post3390 from './img/iPhone/390w/Post3.jpg'
import Post3360 from './img/Android/Post3.jpg'

import Post41920 from './img/Desktop/1920w/Post4.webp'
import Post41728 from './img/Macbook/1728w/Post4.webp'
import Post41512 from './img/Macbook/1512w/Post4.webp'
import Post41440 from './img/Desktop/1440w/Post4.webp'
import Post41280 from './img/Macbook/1280w/Post4.webp'
import Post41024 from './img/Tablet/1024w/Post4.webp'
import Post4834 from './img/Tablet/834w/Post4.webp'
import Post4430 from './img/iPhone/430w/Post4.webp'
import Post4390 from './img/iPhone/390w/Post4.webp'
import Post4360 from './img/Android/Post4.webp'

import Post51920 from './img/Desktop/1920w/Post5.webp'
import Post51728 from './img/Macbook/1728w/Post5.webp'
import Post51512 from './img/Macbook/1512w/Post5.webp'
import Post51440 from './img/Desktop/1440w/Post5.webp'
import Post51280 from './img/Macbook/1280w/Post5.webp'
import Post51024 from './img/Tablet/1024w/Post5.webp'
import Post5834 from './img/Tablet/834w/Post5.webp'
import Post5430 from './img/iPhone/430w/Post5.webp'
import Post5390 from './img/iPhone/390w/Post5.webp'
import Post5360 from './img/Android/Post5.webp'

import Post61920 from './img/Desktop/1920w/Post6.webp'
import Post61728 from './img/Macbook/1728w/Post6.webp'
import Post61512 from './img/Macbook/1512w/Post6.webp'
import Post61440 from './img/Desktop/1440w/Post6.webp'
import Post61280 from './img/Macbook/1280w/Post6.jpg'
import Post61024 from './img/Tablet/1024w/Post6.jpg'
import Post6834 from './img/Tablet/834w/Post6.jpg'
import Post6430 from './img/iPhone/430w/Post6.jpg'
import Post6390 from './img/iPhone/390w/Post6.jpg'
import Post6360 from './img/Android/Post6.jpg'

import Post71920 from './img/Desktop/1920w/Post7.webp'
import Post71728 from './img/Macbook/1728w/Post7.webp'
import Post71512 from './img/Macbook/1512w/Post7.webp'
import Post71440 from './img/Desktop/1440w/Post7.webp'
import Post71280 from './img/Macbook/1280w/Post7.webp'
import Post71024 from './img/Tablet/1024w/Post7.webp'
import Post7834 from './img/Tablet/834w/Post7.webp'
import Post7430 from './img/iPhone/430w/Post7.webp'
import Post7390 from './img/iPhone/390w/Post7.webp'
import Post7360 from './img/Android/Post7.webp'

import Post81920 from './img/Desktop/1920w/Post8.webp'
import Post81728 from './img/Macbook/1728w/Post8.webp'
import Post81512 from './img/Macbook/1512w/Post8.webp'
import Post81440 from './img/Desktop/1440w/Post8.webp'
import Post81280 from './img/Macbook/1280w/Post8.webp'
import Post81024 from './img/Tablet/1024w/Post8.webp'
import Post8834 from './img/Tablet/834w/Post8.webp'
import Post8430 from './img/iPhone/430w/Post8.webp'
import Post8390 from './img/iPhone/390w/Post8.webp'
import Post8360 from './img/Android/Post8.webp'

import Post91920 from './img/Desktop/1920w/Post9.webp'
import Post91728 from './img/Macbook/1728w/Post9.webp'
import Post91512 from './img/Macbook/1512w/Post9.webp'
import Post91440 from './img/Desktop/1440w/Post9.webp'
import Post91280 from './img/Macbook/1280w/Post9.webp'
import Post91024 from './img/Tablet/1024w/Post9.jpg'
import Post9834 from './img/Tablet/834w/Post9.jpg'
import Post9430 from './img/iPhone/430w/Post9.jpg'
import Post9390 from './img/iPhone/390w/Post9.jpg'
import Post9360 from './img/Android/Post9.jpg'


function SocialMediaComponent(props) {

    useEffect(() => window.scrollTo({top: 0, left: 0}), []);

    const navigate = useNavigate();
    const nextPage = () => {
        navigate("/merchandise", { replace: true });
        window.scrollTo({top: 0, left: 0});
    }

    return (
        <div className='social'>
            <Header header='social media' des='Visual language' />
            <div className="social-examples">
                <Example 
                    first='Example of a Highlighs for “Coach”.' 
                    second='A fitness trainer who specializes in a healthy lifestyle.' 
                    third='We created for him a visual language for Instagram, which includes a design of the highlights area with icons.' 
                />
                <div className="social-five-pictures">
                    <div className="social-two-pictures">
                        <div className='img-1920'><img className='social-hightlight social-running social-hightlight-first' src={HightlightsIconsRunning1920} alt="" /></div>
                        <div className='img-1728'><img className='social-hightlight social-running social-hightlight-first' src={HightlightsIconsRunning1728} alt="" /></div>
                        <div className='img-1512'><img className='social-hightlight social-running social-hightlight-first' src={HightlightsIconsRunning1512} alt="" /></div>
                        <div className='img-1440'><img className='social-hightlight social-running social-hightlight-first' src={HightlightsIconsRunning1440} alt="" /></div>
                        <div className='img-1280'><img className='social-hightlight social-running social-hightlight-first' src={HightlightsIconsRunning1280} alt="" /></div>
                        <div className='img-1024'><img className='social-hightlight social-running social-hightlight-first' src={HightlightsIconsRunning1024} alt="" /></div>
                        <div className='img-834'><img className='social-hightlight social-running social-hightlight-first' src={HightlightsIconsRunning834} alt="" /></div>
                        <div className='img-430'><img className='social-hightlight social-running social-hightlight-first' src={HightlightsIconsRunning430} alt="" /></div>
                        <div className='img-390'><img className='social-hightlight social-running social-hightlight-first' src={HightlightsIconsRunning390} alt="" /></div>
                        <div className='img-360'><img className='social-hightlight social-running social-hightlight-first' src={HightlightsIconsRunning360} alt="" /></div>

                        <div className='img-1920'><img className='social-hightlight social-food social-hightlight-second' src={HightlightsIconsFood1920} alt="" /></div>
                        <div className='img-1728'><img className='social-hightlight social-food social-hightlight-second' src={HightlightsIconsFood1728} alt="" /></div>
                        <div className='img-1512'><img className='social-hightlight social-food social-hightlight-second' src={HightlightsIconsFood1512} alt="" /></div>
                        <div className='img-1440'><img className='social-hightlight social-food social-hightlight-second' src={HightlightsIconsFood1440} alt="" /></div>
                        <div className='img-1280'><img className='social-hightlight social-food social-hightlight-second' src={HightlightsIconsFood1280} alt="" /></div>
                        <div className='img-1024'><img className='social-hightlight social-food social-hightlight-second' src={HightlightsIconsFood1024} alt="" /></div>
                        <div className='img-834'><img className='social-hightlight social-food social-hightlight-second' src={HightlightsIconsFood834} alt="" /></div>
                        <div className='img-430'><img className='social-hightlight social-food social-hightlight-second' src={HightlightsIconsFood430} alt="" /></div>
                        <div className='img-390'><img className='social-hightlight social-food social-hightlight-second' src={HightlightsIconsFood390} alt="" /></div>
                        <div className='img-360'><img className='social-hightlight social-food social-hightlight-second' src={HightlightsIconsFood360} alt="" /></div>
                    </div>
                    <div className="social-two-pictures">

                        <div className='img-1920'><img className='social-hightlight social-gym social-hightlight-first' src={HightlightsIconsGym1920} alt="" /></div>
                        <div className='img-1728'><img className='social-hightlight social-gym social-hightlight-first' src={HightlightsIconsGym1728} alt="" /></div>
                        <div className='img-1512'><img className='social-hightlight social-gym social-hightlight-first' src={HightlightsIconsGym1512} alt="" /></div>
                        <div className='img-1440'><img className='social-hightlight social-gym social-hightlight-first' src={HightlightsIconsGym1440} alt="" /></div>
                        <div className='img-1280'><img className='social-hightlight social-gym social-hightlight-first' src={HightlightsIconsGym1280} alt="" /></div>
                        <div className='img-1024'><img className='social-hightlight social-gym social-hightlight-first' src={HightlightsIconsGym1024} alt="" /></div>
                        <div className='img-834'><img className='social-hightlight social-gym social-hightlight-first' src={HightlightsIconsGym834} alt="" /></div>
                        <div className='img-430'><img className='social-hightlight social-gym social-hightlight-first' src={HightlightsIconsGym430} alt="" /></div>
                        <div className='img-390'><img className='social-hightlight social-gym social-hightlight-first' src={HightlightsIconsGym390} alt="" /></div>
                        <div className='img-360'><img className='social-hightlight social-gym social-hightlight-first' src={HightlightsIconsGym360} alt="" /></div>

                        <div className='img-1920'><img className='social-hightlight social-mesitation social-hightlight-second' src={HightlightsIconsMesitation1920} alt="" /></div>
                        <div className='img-1728'><img className='social-hightlight social-mesitation social-hightlight-second' src={HightlightsIconsMesitation1728} alt="" /></div>
                        <div className='img-1512'><img className='social-hightlight social-mesitation social-hightlight-second' src={HightlightsIconsMesitation1512} alt="" /></div>
                        <div className='img-1440'><img className='social-hightlight social-mesitation social-hightlight-second' src={HightlightsIconsMesitation1440} alt="" /></div>
                        <div className='img-1280'><img className='social-hightlight social-mesitation social-hightlight-second' src={HightlightsIconsMesitation1280} alt="" /></div>
                        <div className='img-1024'><img className='social-hightlight social-mesitation social-hightlight-second' src={HightlightsIconsMesitation1024} alt="" /></div>
                        <div className='img-834'><img className='social-hightlight social-mesitation social-hightlight-second' src={HightlightsIconsMesitation834} alt="" /></div>
                        <div className='img-430'><img className='social-hightlight social-mesitation social-hightlight-second' src={HightlightsIconsMesitation430} alt="" /></div>
                        <div className='img-390'><img className='social-hightlight social-mesitation social-hightlight-second' src={HightlightsIconsMesitation390} alt="" /></div>
                        <div className='img-360'><img className='social-hightlight social-mesitation social-hightlight-second' src={HightlightsIconsMesitation360} alt="" /></div>
                    </div>

                    <div className='img-1920'><img className='social-hightlight social-arts' src={HightlightsIconsMartialArts1920} alt="" /></div>
                    <div className='img-1728'><img className='social-hightlight social-arts' src={HightlightsIconsMartialArts1728} alt="" /></div>
                    <div className='img-1512'><img className='social-hightlight social-arts' src={HightlightsIconsMartialArts1512} alt="" /></div>
                    <div className='img-1440'><img className='social-hightlight social-arts' src={HightlightsIconsMartialArts1440} alt="" /></div>
                    <div className='img-1280'><img className='social-hightlight social-arts' src={HightlightsIconsMartialArts1280} alt="" /></div>
                    <div className='img-1024'><img className='social-hightlight social-arts' src={HightlightsIconsMartialArts1024} alt="" /></div>
                    <div className='img-834'><img className='social-hightlight social-arts' src={HightlightsIconsMartialArts834} alt="" /></div>
                    <div className='img-430'><img className='social-hightlight social-arts' src={HightlightsIconsMartialArts430} alt="" /></div>
                    <div className='img-390'><img className='social-hightlight social-arts' src={HightlightsIconsMartialArts390} alt="" /></div>
                    <div className='img-360'><img className='social-hightlight social-arts' src={HightlightsIconsMartialArts360} alt="" /></div>
                </div>
                <div className="social-pictures">

                    <div className='img-1920'><img className='social-mockup' src={Mockup1920} alt="" /></div>
                    <div className='img-1728'><img className='social-mockup' src={Mockup1728} alt="" /></div>
                    <div className='img-1512'><img className='social-mockup' src={Mockup1512} alt="" /></div>
                    <div className='img-1440'><img className='social-mockup' src={Mockup1440} alt="" /></div>
                    <div className='img-1280'><img className='social-mockup' src={Mockup1280} alt="" /></div>
                    <div className='img-1024'><img className='social-mockup' src={Mockup1024} alt="" /></div>
                    <div className='img-834'><img className='social-mockup' src={Mockup834} alt="" /></div>
                    <div className='img-430'><img className='social-mockup' src={Mockup430} alt="" /></div>
                    <div className='img-390'><img className='social-mockup' src={Mockup390} alt="" /></div>
                    <div className='img-360'><img className='social-mockup' src={Mockup360} alt="" /></div>
                </div>
                <div className='new-example'>
                    <Example 
                        first='An example of a Instagram posts Medina Studio.' 
                        second='Wedding dress design.' 
                        third='We wanted to convey an autumnal atmosphere according to the collection. Photos by: Dudi Hasson' 
                    />
                </div>
                <div className="social-three-pictures">

                    <div className='img-1920'><img className='social-post social-post1' src={Post11920} alt="" /></div>
                    <div className='img-1728'><img className='social-post social-post1' src={Post11728} alt="" /></div>
                    <div className='img-1512'><img className='social-post social-post1' src={Post11512} alt="" /></div>
                    <div className='img-1440'><img className='social-post social-post1' src={Post11440} alt="" /></div>
                    <div className='img-1280'><img className='social-post social-post1' src={Post11280} alt="" /></div>
                    <div className='img-1024'><img className='social-post social-post1' src={Post11024} alt="" /></div>
                    <div className='img-834'><img className='social-post social-post1' src={Post1834} alt="" /></div>
                    <div className='img-430'><img className='social-post social-post1' src={Post1430} alt="" /></div>
                    <div className='img-390'><img className='social-post social-post1' src={Post1390} alt="" /></div>
                    <div className='img-360'><img className='social-post social-post1' src={Post1360} alt="" /></div>

                    <div className='img-1920'><img className='social-post social-post-right social-post2' src={Post21920} alt="" /></div>
                    <div className='img-1728'><img className='social-post social-post-right social-post2' src={Post21728} alt="" /></div>
                    <div className='img-1512'><img className='social-post social-post-right social-post2' src={Post21512} alt="" /></div>
                    <div className='img-1440'><img className='social-post social-post-right social-post2' src={Post21440} alt="" /></div>
                    <div className='img-1280'><img className='social-post social-post-right social-post2' src={Post21280} alt="" /></div>
                    <div className='img-1024'><img className='social-post social-post-right social-post2' src={Post21024} alt="" /></div>
                    <div className='img-834'><img className='social-post social-post-right social-post2' src={Post2834} alt="" /></div>
                    <div className='img-430'><img className='social-post social-post-right social-post2' src={Post2430} alt="" /></div>
                    <div className='img-390'><img className='social-post social-post-right social-post2' src={Post2390} alt="" /></div>
                    <div className='img-360'><img className='social-post social-post-right social-post2' src={Post2360} alt="" /></div>

                    <div className='img-1920'><img className='social-post social-post-right social-post3' src={Post31920} alt="" /></div>
                    <div className='img-1728'><img className='social-post social-post-right social-post3' src={Post31728} alt="" /></div>
                    <div className='img-1512'><img className='social-post social-post-right social-post3' src={Post31512} alt="" /></div>
                    <div className='img-1440'><img className='social-post social-post-right social-post3' src={Post31440} alt="" /></div>
                    <div className='img-1280'><img className='social-post social-post-right social-post3' src={Post31280} alt="" /></div>
                    {/* <div className='img-1024'><img className='social-post social-post-right social-post3' src={Post31024} alt="" /></div>
                    <div className='img-834'><img className='social-post social-post-right social-post3' src={Post3834} alt="" /></div>
                    <div className='img-430'><img className='social-post social-post-right social-post3' src={Post3430} alt="" /></div> */}
                    <div className='img-390'><img className='social-post social-post-right social-post3' src={Post3390} alt="" /></div>
                    <div className='img-360'><img className='social-post social-post-right social-post3' src={Post3360} alt="" /></div>
                </div>
                <div className="social-three-pictures">

                    <div className='img-1920'><img className='social-post social-post4' src={Post41920} alt="" /></div>
                    <div className='img-1728'><img className='social-post social-post4' src={Post41728} alt="" /></div>
                    <div className='img-1512'><img className='social-post social-post4' src={Post41512} alt="" /></div>
                    <div className='img-1440'><img className='social-post social-post4' src={Post41440} alt="" /></div>
                    <div className='img-1280'><img className='social-post social-post4' src={Post41280} alt="" /></div>
                    <div className='img-1024'><img className='social-post social-post4' src={Post41024} alt="" /></div>
                    <div className='img-834'><img className='social-post social-post4' src={Post4834} alt="" /></div>
                    <div className='img-430'><img className='social-post social-post4' src={Post4430} alt="" /></div>
                    <div className='img-390'><img className='social-post social-post4' src={Post4390} alt="" /></div>
                    <div className='img-360'><img className='social-post social-post4' src={Post4360} alt="" /></div>

                    <div className='img-1920'><img className='social-post social-post-right social-post5' src={Post51920} alt="" /></div>
                    <div className='img-1728'><img className='social-post social-post-right social-post5' src={Post51728} alt="" /></div>
                    <div className='img-1512'><img className='social-post social-post-right social-post5' src={Post51512} alt="" /></div>
                    <div className='img-1440'><img className='social-post social-post-right social-post5' src={Post51440} alt="" /></div>
                    <div className='img-1280'><img className='social-post social-post-right social-post5' src={Post51280} alt="" /></div>
                    <div className='img-1024'><img className='social-post social-post-right social-post5' src={Post51024} alt="" /></div>
                    <div className='img-834'><img className='social-post social-post-right social-post5' src={Post5834} alt="" /></div>
                    <div className='img-430'><img className='social-post social-post-right social-post5' src={Post5430} alt="" /></div>
                    <div className='img-390'><img className='social-post social-post-right social-post5' src={Post5390} alt="" /></div>
                    <div className='img-360'><img className='social-post social-post-right social-post5' src={Post5360} alt="" /></div>

                    <div className='img-1920'><img className='social-post social-post-right social-post6' src={Post61920} alt="" /></div>
                    <div className='img-1728'><img className='social-post social-post-right social-post6' src={Post61728} alt="" /></div>
                    <div className='img-1512'><img className='social-post social-post-right social-post6' src={Post61512} alt="" /></div>
                    <div className='img-1440'><img className='social-post social-post-right social-post6' src={Post61440} alt="" /></div>
                    <div className='img-1280'><img className='social-post social-post-right social-post6' src={Post61280} alt="" /></div>
                    <div className='img-1024'><img className='social-post social-post-right social-post6' src={Post61024} alt="" /></div>
                    <div className='img-834'><img className='social-post social-post-right social-post6' src={Post6834} alt="" /></div>
                    <div className='img-430'><img className='social-post social-post-right social-post6' src={Post6430} alt="" /></div>
                    <div className='img-390'><img className='social-post social-post-right social-post6' src={Post6390} alt="" /></div>
                    <div className='img-360'><img className='social-post social-post-right social-post6' src={Post6360} alt="" /></div>
                </div>
                <div className="social-three-pictures">

                    <div className='img-1920'><img className='social-post social-post7' src={Post71920} alt="" /></div>
                    <div className='img-1728'><img className='social-post social-post7' src={Post71728} alt="" /></div>
                    <div className='img-1512'><img className='social-post social-post7' src={Post71512} alt="" /></div>
                    <div className='img-1440'><img className='social-post social-post7' src={Post71440} alt="" /></div>
                    <div className='img-1280'><img className='social-post social-post7' src={Post71280} alt="" /></div>
                    <div className='img-1024'><img className='social-post social-post7' src={Post71024} alt="" /></div>
                    <div className='img-834'><img className='social-post social-post7' src={Post7834} alt="" /></div>
                    <div className='img-430'><img className='social-post social-post7' src={Post7430} alt="" /></div>
                    <div className='img-390'><img className='social-post social-post7' src={Post7390} alt="" /></div>
                    <div className='img-360'><img className='social-post social-post7' src={Post7360} alt="" /></div>

                    <div className='img-1920'><img className='social-post social-post-right social-post8' src={Post81920} alt="" /></div>
                    <div className='img-1728'><img className='social-post social-post-right social-post8' src={Post81728} alt="" /></div>
                    <div className='img-1512'><img className='social-post social-post-right social-post8' src={Post81512} alt="" /></div>
                    <div className='img-1440'><img className='social-post social-post-right social-post8' src={Post81440} alt="" /></div>
                    <div className='img-1280'><img className='social-post social-post-right social-post8' src={Post81280} alt="" /></div>
                    <div className='img-1024'><img className='social-post social-post-right social-post8' src={Post81024} alt="" /></div>
                    <div className='img-834'><img className='social-post social-post-right social-post8' src={Post8834} alt="" /></div>
                    <div className='img-430'><img className='social-post social-post-right social-post8' src={Post8430} alt="" /></div>
                    <div className='img-390'><img className='social-post social-post-right social-post8' src={Post8390} alt="" /></div>
                    <div className='img-360'><img className='social-post social-post-right social-post8' src={Post8360} alt="" /></div>

                    <div className='img-1920'><img className='social-post social-post-right social-post9' src={Post91920} alt="" /></div>
                    <div className='img-1728'><img className='social-post social-post-right social-post9' src={Post91728} alt="" /></div>
                    <div className='img-1512'><img className='social-post social-post-right social-post9' src={Post91512} alt="" /></div>
                    <div className='img-1440'><img className='social-post social-post-right social-post9' src={Post91440} alt="" /></div>
                    <div className='img-1280'><img className='social-post social-post-right social-post9' src={Post91280} alt="" /></div>
                    <div className='img-1024'><img className='social-post social-post-right social-post9' src={Post91024} alt="" /></div>
                    <div className='img-834'><img className='social-post social-post-right social-post9' src={Post9834} alt="" /></div>
                    <div className='img-430'><img className='social-post social-post-right social-post9' src={Post9430} alt="" /></div>
                    <div className='img-390'><img className='social-post social-post-right social-post9' src={Post9390} alt="" /></div>
                    <div className='img-360'><img className='social-post social-post-right social-post9' src={Post9360} alt="" /></div>
                </div>
            </div>
            <div className="work-button"><Button text='NEXT' work={nextPage} /></div>
        </div>
    );
}

export default SocialMediaComponent;