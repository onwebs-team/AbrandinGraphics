import React, { useEffect }  from 'react';
import { useNavigate } from "react-router-dom";

import './Presentations.scss'

import Button from '../../button/button2/button2-component'
import Header from '../header/workHeader-component'
import Example from '../example/workExample-component'

import Cover1920 from './img/Desktop/1920w/Cover.webp'
import Cover1728 from './img/Macbook/1728w/Cover.webp'
import Cover1512 from './img/Macbook/1512w/Cover.webp'
import Cover1440 from './img/Desktop/1440w/Cover.webp'
import Cover1280 from './img/Macbook/1280w/Cover.webp'
import Cover1024 from './img/Tablet/1024w/Cover.webp'
import Cover834 from './img/Tablet/834w/Cover.webp'
import Cover430 from './img/iPhone/430w/Cover.webp'
import Cover390 from './img/iPhone/390w/Cover.webp'
import Cover360 from './img/Android/Cover.webp'

import Agenda1920 from './img/Desktop/1920w/Agenda.webp'
import Agenda1728 from './img/Macbook/1728w/Agenda.webp'
import Agenda1512 from './img/Macbook/1512w/Agenda.webp'
import Agenda1440 from './img/Desktop/1440w/Agenda.webp'
import Agenda1280 from './img/Macbook/1280w/Agenda.webp'
import Agenda1024 from './img/Tablet/1024w/Agenda.webp'
import Agenda834 from './img/Tablet/834w/Agenda.webp'
import Agenda430 from './img/iPhone/430w/Agenda.webp'
import Agenda390 from './img/iPhone/390w/Agenda.webp'
import Agenda360 from './img/Android/Agenda.webp'

import Timeline1920 from './img/Desktop/1920w/Timeline.webp'
import Timeline1728 from './img/Macbook/1728w/Timeline.webp'
import Timeline1512 from './img/Macbook/1512w/Timeline.webp'
import Timeline1440 from './img/Desktop/1440w/Timeline.webp'
import Timeline1280 from './img/Macbook/1280w/Timeline.webp'
import Timeline1024 from './img/Tablet/1024w/Timeline.webp'
import Timeline834 from './img/Tablet/834w/Timeline.webp'
import Timeline430 from './img/iPhone/430w/Timeline.webp'
import Timeline390 from './img/iPhone/390w/Timeline.webp'
import Timeline360 from './img/Android/Timeline.webp'

import Numbers1920 from './img/Desktop/1920w/Numbers.webp'
import Numbers1728 from './img/Macbook/1728w/Numbers.webp'
import Numbers1512 from './img/Macbook/1512w/Numbers.webp'
import Numbers1440 from './img/Desktop/1440w/Numbers.webp'
import Numbers1280 from './img/Macbook/1280w/Numbers.webp'
import Numbers1024 from './img/Tablet/1024w/Numbers.webp'
import Numbers834 from './img/Tablet/834w/Numbers.webp'
import Numbers430 from './img/iPhone/430w/Numbers.webp'
import Numbers390 from './img/iPhone/390w/Numbers.webp'
import Numbers360 from './img/Android/Numbers.webp'

import Mid1920 from './img/Desktop/1920w/Mid.webp'
import Mid1728 from './img/Macbook/1728w/Mid.webp'
import Mid1512 from './img/Macbook/1512w/Mid.webp'
import Mid1440 from './img/Desktop/1440w/Mid.webp'
import Mid1280 from './img/Macbook/1280w/Mid.webp'
import Mid1024 from './img/Tablet/1024w/Mid.webp'
import Mid834 from './img/Tablet/834w/Mid.webp'
import Mid430 from './img/iPhone/430w/Mid.webp'
import Mid390 from './img/iPhone/390w/Mid.webp'
import Mid360 from './img/Android/Mid.webp'

import End1920 from './img/Desktop/1920w/End.webp'
import End1728 from './img/Macbook/1728w/End.webp'
import End1512 from './img/Macbook/1512w/End.webp'
import End1440 from './img/Desktop/1440w/End.webp'
import End1280 from './img/Macbook/1280w/End.webp'
import End1024 from './img/Tablet/1024w/End.webp'
import End834 from './img/Tablet/834w/End.webp'
import End430 from './img/iPhone/430w/End.webp'
import End390 from './img/iPhone/390w/End.webp'
import End360 from './img/Android/End.webp'


function PresentationsComponent(props) {

    useEffect(() => window.scrollTo({top: 0, left: 0}), []);

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
                    <div className='img-1920'><img className='presentations-img' src={Cover1920} alt="" /></div>
                    <div className='img-1728'><img className='presentations-img' src={Cover1728} alt="" /></div>
                    <div className='img-1512'><img className='presentations-img' src={Cover1512} alt="" /></div>
                    <div className='img-1440'><img className='presentations-img' src={Cover1440} alt="" /></div>
                    <div className='img-1280'><img className='presentations-img' src={Cover1280} alt="" /></div>
                    <div className='img-1024'><img className='presentations-img' src={Cover1024} alt="" /></div>
                    <div className='img-834'><img className='presentations-img' src={Cover834} alt="" /></div>
                    <div className='img-430'><img className='presentations-img' src={Cover430} alt="" /></div>
                    <div className='img-390'><img className='presentations-img' src={Cover390} alt="" /></div>
                    <div className='img-360'><img className='presentations-img' src={Cover360} alt="" /></div>
                    <div className='img-1920'><img className='presentations-img presentations-img-right' src={Agenda1920} alt="" /></div>
                    <div className='img-1728'><img className='presentations-img presentations-img-right' src={Agenda1728} alt="" /></div>
                    <div className='img-1512'><img className='presentations-img presentations-img-right' src={Agenda1512} alt="" /></div>
                    <div className='img-1440'><img className='presentations-img presentations-img-right' src={Agenda1440} alt="" /></div>
                    <div className='img-1280'><img className='presentations-img presentations-img-right' src={Agenda1280} alt="" /></div>
                    <div className='img-1024'><img className='presentations-img presentations-img-right' src={Agenda1024} alt="" /></div>
                    <div className='img-834'><img className='presentations-img presentations-img-right' src={Agenda834} alt="" /></div>
                    <div className='img-430'><img className='presentations-img presentations-img-right' src={Agenda430} alt="" /></div>
                    <div className='img-390'><img className='presentations-img presentations-img-right' src={Agenda390} alt="" /></div>
                    <div className='img-360'><img className='presentations-img presentations-img-right' src={Agenda360} alt="" /></div>
                </div>
                <div className="presentations-two-pictures">
                <div className='img-1920'><img className='presentations-img' src={Timeline1920} alt="" /></div>
                    <div className='img-1728'><img className='presentations-img' src={Timeline1728} alt="" /></div>
                    <div className='img-1512'><img className='presentations-img' src={Timeline1512} alt="" /></div>
                    <div className='img-1440'><img className='presentations-img' src={Timeline1440} alt="" /></div>
                    <div className='img-1280'><img className='presentations-img' src={Timeline1280} alt="" /></div>
                    <div className='img-1024'><img className='presentations-img' src={Timeline1024} alt="" /></div>
                    <div className='img-834'><img className='presentations-img' src={Timeline834} alt="" /></div>
                    <div className='img-430'><img className='presentations-img' src={Timeline430} alt="" /></div>
                    <div className='img-390'><img className='presentations-img' src={Timeline390} alt="" /></div>
                    <div className='img-360'><img className='presentations-img' src={Timeline360} alt="" /></div>
                    <div className='img-1920'><img className='presentations-img presentations-img-right's src={Numbers1920} alt="" /></div>
                    <div className='img-1728'><img className='presentations-img presentations-img-right's src={Numbers1728} alt="" /></div>
                    <div className='img-1512'><img className='presentations-img presentations-img-right's src={Numbers1512} alt="" /></div>
                    <div className='img-1440'><img className='presentations-img presentations-img-right's src={Numbers1440} alt="" /></div>
                    <div className='img-1280'><img className='presentations-img presentations-img-right's src={Numbers1280} alt="" /></div>
                    <div className='img-1024'><img className='presentations-img presentations-img-right's src={Numbers1024} alt="" /></div>
                    <div className='img-834'><img className='presentations-img presentations-img-right's src={Numbers834} alt="" /></div>
                    <div className='img-430'><img className='presentations-img presentations-img-right's src={Numbers430} alt="" /></div>
                    <div className='img-390'><img className='presentations-img presentations-img-right's src={Numbers390} alt="" /></div>
                    <div className='img-360'><img className='presentations-img presentations-img-right's src={Numbers360} alt="" /></div>
                </div>
                <div className="presentations-two-pictures">
                    <div className='img-1920'><img className='presentations-img' src={Mid1920} alt="" /></div>
                    <div className='img-1728'><img className='presentations-img' src={Mid1728} alt="" /></div>
                    <div className='img-1512'><img className='presentations-img' src={Mid1512} alt="" /></div>
                    <div className='img-1440'><img className='presentations-img' src={Mid1440} alt="" /></div>
                    <div className='img-1280'><img className='presentations-img' src={Mid1280} alt="" /></div>
                    <div className='img-1024'><img className='presentations-img' src={Mid1024} alt="" /></div>
                    <div className='img-834'><img className='presentations-img' src={Mid834} alt="" /></div>
                    <div className='img-430'><img className='presentations-img' src={Mid430} alt="" /></div>
                    <div className='img-390'><img className='presentations-img' src={Mid390} alt="" /></div>
                    <div className='img-360'><img className='presentations-img' src={Mid360} alt="" /></div>
                    <div className='img-1920'><img className='presentations-img presentations-img-right' src={End1920} alt="" /></div>
                    <div className='img-1728'><img className='presentations-img presentations-img-right' src={End1728} alt="" /></div>
                    <div className='img-1512'><img className='presentations-img presentations-img-right' src={End1512} alt="" /></div>
                    <div className='img-1440'><img className='presentations-img presentations-img-right' src={End1440} alt="" /></div>
                    <div className='img-1280'><img className='presentations-img presentations-img-right' src={End1280} alt="" /></div>
                    <div className='img-1024'><img className='presentations-img presentations-img-right' src={End1024} alt="" /></div>
                    <div className='img-834'><img className='presentations-img presentations-img-right' src={End834} alt="" /></div>
                    <div className='img-430'><img className='presentations-img presentations-img-right' src={End430} alt="" /></div>
                    <div className='img-390'><img className='presentations-img presentations-img-right' src={End390} alt="" /></div>
                    <div className='img-360'><img className='presentations-img presentations-img-right' src={End360} alt="" /></div>
                </div>
            </div>
            <div className="work-button"><Button text='NEXT' work={nextPage} /></div>
        </div>
    );
}

export default PresentationsComponent;