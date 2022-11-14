import React, { useEffect }  from 'react';
import { useNavigate } from "react-router-dom";

import './Banners.scss'
import Post from './img/Post.jpg'
import Story from './img/Story.jpg'
import HasbaraPost from './img/HasbaraPost.jpg'
import TrullionPost from './img/TrullionPost.jpg'

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
                    <div><img className='banner-post' src={Post} alt="" /></div>
                    <div><img className='banner-story' src={Story} alt="" /></div>
                </div>
                <div className='new-example'>
                    <Example 
                        first='An example of banner for "Hasbara Fellowships",' 
                        second='A company that calls young Jews to come to ״Taglit” and discover Israel.' 
                        third='The resolution is for a post on social networks.' 
                    />
                </div>
                <div className="banner-pictures">
                    <img className='banner-hasbara' src={HasbaraPost} alt="" />
                </div>
                <div className='new-example'>
                    <Example 
                        first='An example of banner for "Trullion",' 
                        second='AI based platform for the management and automation.' 
                        third='The resolution is for a post on social networks.' 
                    />
                </div>
                <div className="banner-pictures">
                    <img className='banner-trullion' src={TrullionPost} alt="" />
                </div>
            </div>
            <div className="work-button"><Button text='NEXT' work={nextPage} /></div>
        </div>
    );
}

export default BannersComponent;