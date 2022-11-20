import React, { useEffect }  from 'react';
import { useNavigate } from "react-router-dom";

import './Banners.scss'
import Post1920 from './img/Desktop/1920w/Post.jpg'
import Post1728 from './img/Macbook/1728w/Post.jpg'
import Post1512 from './img/Macbook/1512w/Post.jpg'
import Post1440 from './img/Desktop/1440w/Post.jpg'
import Post1280 from './img/Macbook/1280w/Post.jpg'
import Post1024 from './img/Tablet/1024w/Post.jpg'
import Post834 from './img/Tablet/834w/Post.jpg'
import Post430 from './img/iPhone/430w/Post.jpg'
import Post390 from './img/iPhone/390w/Post.jpg'
import Post360 from './img/Android/Post.jpg'

import Story1920 from './img/Desktop/1920w/Story.jpg'
import Story1728 from './img/Macbook/1728w/Story.jpg'
import Story1512 from './img/Macbook/1512w/Story.jpg'
import Story1440 from './img/Desktop/1440w/Story.jpg'
import Story1280 from './img/Macbook/1280w/Story.jpg'
import Story1024 from './img/Tablet/1024w/Story.jpg'
import Story834 from './img/Tablet/834w/Story.jpg'
import Story430 from './img/iPhone/430w/Story.jpg'
import Story390 from './img/iPhone/390w/Story.jpg'
import Story360 from './img/Android/Story.jpg'

import HasbaraPost1920 from './img/Desktop/1920w/HasbaraPost.jpg'
import HasbaraPost1728 from './img/Macbook/1728w/HasbaraPost.jpg'
import HasbaraPost1512 from './img/Macbook/1512w/HasbaraPost.jpg'
import HasbaraPost1440 from './img/Desktop/1440w/HasbaraPost.jpg'
import HasbaraPost1280 from './img/Macbook/1280w/HasbaraPost.jpg'
import HasbaraPost1024 from './img/Tablet/1024w/HasbaraPost.jpg'
import HasbaraPost834 from './img/Tablet/834w/HasbaraPost.jpg'
import HasbaraPost430 from './img/iPhone/430w/HasbaraPost.jpg'
import HasbaraPost390 from './img/iPhone/390w/HasbaraPost.jpg'
import HasbaraPost360 from './img/Android/HasbaraPost.jpg'

import TrullionPost1920 from './img/Desktop/1920w/TrullionPost.jpg'
import TrullionPost1728 from './img/Macbook/1728w/TrullionPost.jpg'
import TrullionPost1512 from './img/Macbook/1512w/TrullionPost.jpg'
import TrullionPost1440 from './img/Desktop/1440w/TrullionPost.jpg'
import TrullionPost1280 from './img/Macbook/1280w/TrullionPost.jpg'
import TrullionPost1024 from './img/Tablet/1024w/TrullionPost.jpg'
import TrullionPost834 from './img/Tablet/834w/TrullionPost.jpg'
import TrullionPost430 from './img/iPhone/430w/TrullionPost.jpg'
import TrullionPost390 from './img/iPhone/390w/TrullionPost.jpg'
import TrullionPost360 from './img/Android/TrullionPost.jpg'


import Button from '../../button/button2/button2-component'
import Header from '../header/workHeader-component'
import Example from '../example/workExample-component'

function BannersComponent(props) {

    useEffect(() => window.scrollTo({top: 0, left: 0}), []);

    const navigate = useNavigate();
    const nextPage = () => {
        navigate("/landing", { replace: true });
        window.scrollTo({top: 0, left: 0});
    }

    return (
        <div className='banners'>
            <Header header='banners' des='Of any size and media' />
            <div className="banner-examples">
                <Example 
                    first='An example of banners for the "Mama" winery,' 
                    second='an Italian family winery from the Golan Mountains.' 
                    third='The resolutions are for a post on social networks and a "story" for Instagram.' 
                />
                <div className="banner-two-pictures">
                    <div>
                        <div className='img-1920'><img className='banner-post' src={Post1920} alt="" /></div>
                        <div className='img-1728'><img className='banner-post' src={Post1728} alt="" /></div>
                        <div className='img-1512'><img className='banner-post' src={Post1512} alt="" /></div>
                        <div className='img-1440'><img className='banner-post' src={Post1440} alt="" /></div>
                        <div className='img-1280'><img className='banner-post' src={Post1280} alt="" /></div>
                        <div className='img-1024'><img className='banner-post' src={Post1024} alt="" /></div>
                        <div className='img-834'><img className='banner-post' src={Post834} alt="" /></div>
                        <div className='img-430'><img className='banner-post' src={Post430} alt="" /></div>
                        <div className='img-390'><img className='banner-post' src={Post390} alt="" /></div>
                        <div className='img-360'><img className='banner-post' src={Post360} alt="" /></div>
                    </div>
                    <div>
                        <div className='img-1920'><img className='banner-story' src={Story1920} alt="" /></div>
                        <div className='img-1728'><img className='banner-story' src={Story1728} alt="" /></div>
                        <div className='img-1512'><img className='banner-story' src={Story1512} alt="" /></div>
                        <div className='img-1440'><img className='banner-story' src={Story1440} alt="" /></div>
                        <div className='img-1280'><img className='banner-story' src={Story1280} alt="" /></div>
                        <div className='img-1024'><img className='banner-story' src={Story1024} alt="" /></div>
                        <div className='img-834'><img className='banner-story' src={Story834} alt="" /></div>
                        <div className='img-430'><img className='banner-story' src={Story430} alt="" /></div>
                        <div className='img-390'><img className='banner-story' src={Story390} alt="" /></div>
                        <div className='img-360'><img className='banner-story' src={Story360} alt="" /></div>
                    </div>
                </div>
                <div className='new-example'>
                    <Example 
                        first='An example of banner for "Hasbara Fellowships",' 
                        second='A company that calls young Jews to come to ״Taglit” and discover Israel.' 
                        third='The resolution is for a post on social networks.' 
                    />
                </div>
                <div className="banner-pictures">
                    <div className='img-1920'><img className='banner-hasbara' src={HasbaraPost1920} alt="" /></div>
                    <div className='img-1728'><img className='banner-hasbara' src={HasbaraPost1728} alt="" /></div>
                    <div className='img-1512'><img className='banner-hasbara' src={HasbaraPost1512} alt="" /></div>
                    <div className='img-1440'><img className='banner-hasbara' src={HasbaraPost1440} alt="" /></div>
                    <div className='img-1280'><img className='banner-hasbara' src={HasbaraPost1280} alt="" /></div>
                    <div className='img-1024'><img className='banner-hasbara' src={HasbaraPost1024} alt="" /></div>
                    <div className='img-834'><img className='banner-hasbara' src={HasbaraPost834} alt="" /></div>
                    <div className='img-430'><img className='banner-hasbara' src={HasbaraPost430} alt="" /></div>
                    <div className='img-390'><img className='banner-hasbara' src={HasbaraPost390} alt="" /></div>
                    <div className='img-360'><img className='banner-hasbara' src={HasbaraPost360} alt="" /></div>
                </div>
                <div className='new-example'>
                    <Example 
                        first='An example of banner for "Trullion",' 
                        second='AI based platform for the management and automation.' 
                        third='The resolution is for a post on social networks.' 
                    />
                </div>
                <div className="banner-pictures">
                    <div className='img-1920'><img className='banner-trullion' src={TrullionPost1920} alt="" /></div>
                    <div className='img-1728'><img className='banner-trullion' src={TrullionPost1728} alt="" /></div>
                    <div className='img-1512'><img className='banner-trullion' src={TrullionPost1512} alt="" /></div>
                    <div className='img-1440'><img className='banner-trullion' src={TrullionPost1440} alt="" /></div>
                    <div className='img-1280'><img className='banner-trullion' src={TrullionPost1280} alt="" /></div>
                    <div className='img-1024'><img className='banner-trullion' src={TrullionPost1024} alt="" /></div>
                    <div className='img-834'><img className='banner-trullion' src={TrullionPost834} alt="" /></div>
                    <div className='img-430'><img className='banner-trullion' src={TrullionPost430} alt="" /></div>
                    <div className='img-390'><img className='banner-trullion' src={TrullionPost390} alt="" /></div>
                    <div className='img-360'><img className='banner-trullion' src={TrullionPost360} alt="" /></div>
                </div>
            </div>
            <div className="work-button"><Button text='NEXT' work={nextPage} /></div>
        </div>
    );
}

export default BannersComponent;