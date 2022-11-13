import React from 'react';
import { useNavigate } from "react-router-dom";

import './Presentations.scss'

import Button from '../../button/button2/button2-component'
import Header from '../header/workHeader-component'
import Example from '../example/workExample-component'

import Cover from './img/Cover.jpg'
import Agenda from './img/Agenda.jpg'
import Timeline from './img/Timeline.jpg'
import Numbers from './img/Numbers.jpg'
import Mid from './img/Mid.jpg'
import End from './img/End.jpg'

function PresentationsComponent(props) {

    const navigate = useNavigate();
    const nextPage = () => {
        navigate("/signs", { replace: true });
        window.scrollTo({top: 0, left: 0});
    }

    return (
        <div className='presentations'>
            <Header header='presentations' des='Stunning slides' />
            <div className="presentations-examples">
                <Example 
                    first='An example of a presentation to “Primis”.' 
                    second="McCann's company - which specializes in the production of video advertisements."
                    third="The company asked us to create a presentation with the company's colors, but in an innovative and eye-catching way."
                />
                <div className="presentations-two-pictures">
                    <img className='presentations-img' src={Cover} alt="" />
                    <img className='presentations-img presentations-img-right' src={Agenda} alt="" />
                </div>
                <div className="presentations-two-pictures">
                    <img className='presentations-img' src={Timeline} alt="" />
                    <img className='presentations-img presentations-img-right' src={Numbers} alt="" />
                </div>
                <div className="presentations-two-pictures">
                    <img className='presentations-img' src={Mid} alt="" />
                    <img className='presentations-img presentations-img-right' src={End} alt="" />
                </div>
            </div>
            <div className="work-button"><Button text='NEXT' work={nextPage} /></div>
        </div>
    );
}

export default PresentationsComponent;