import React from 'react';
import './Banners.scss'
import Post from './img/Post.jpg'
import Story from './img/Story.jpg'
import HasbaraPost from './img/HasbaraPost.jpg'
import TrullionPost from './img/TrullionPost.jpg'

import Button from '../../button/button-component'
import Header from '../header/workHeader-component'
import Example from '../example/workExample-component'

function BannersComponent(props) {
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
                    <img className='banner-post' src={Post} alt="" />
                    <img className='banner-story' src={Story} alt="" />
                </div>
                <Example 
                    first='An example of banner for "Hasbara Fellowships",' 
                    second='A company that calls young Jews to come to ״Taglit” and discover Israel.' 
                    third='The resolution is for a post on social networks.' 
                />
                <div className="banner-pictures">
                    <img className='banner-hasbara' src={HasbaraPost} alt="" />
                </div>
                <Example 
                    first='An example of banner for "Trullion",' 
                    second='AI based platform for the management and automation.' 
                    third='The resolution is for a post on social networks.' 
                />
                <div className="banner-pictures">
                    <img className='banner-trullion' src={TrullionPost} alt="" />
                </div>
            </div>
            <div className="benners-button"><Button text='NEXT' /></div>
        </div>
    );
}

export default BannersComponent;