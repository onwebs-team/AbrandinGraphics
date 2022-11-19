import React, { useEffect }  from 'react';
import { useNavigate } from "react-router-dom";

import './Presentations.scss'

import Button from '../../button/button2/button2-component'
import Header from '../header/workHeader-component'
import Example from '../example/workExample-component'

import Cover1920 from './img/Desktop/1920w/Cover.jpg'
import Cover1728 from './img/Macbook/1728w/Cover.jpg'
import Cover1512 from './img/Macbook/1512w/Cover.jpg'
import Cover1440 from './img/Desktop/1440w/Cover.jpg'
import Cover1280 from './img/Macbook/1280w/Cover.jpg'
import Cover1024 from './img/Tablet/1024w/Cover.jpg'
import Cover834 from './img/Tablet/834w/Cover.jpg'
import Cover430 from './img/iPhone/430w/Cover.jpg'
import Cover390 from './img/iPhone/390w/Cover.jpg'
import Cover360 from './img/Android/Cover.jpg'

import Agenda1920 from './img/Desktop/1920w/Agenda.jpg'
import Agenda1728 from './img/Macbook/1728w/Agenda.jpg'
import Agenda1512 from './img/Macbook/1512w/Agenda.jpg'
import Agenda1440 from './img/Desktop/1440w/Agenda.jpg'
import Agenda1280 from './img/Macbook/1280w/Agenda.jpg'
import Agenda1024 from './img/Tablet/1024w/Agenda.jpg'
import Agenda834 from './img/Tablet/834w/Agenda.jpg'
import Agenda430 from './img/iPhone/430w/Agenda.jpg'
import Agenda390 from './img/iPhone/390w/Agenda.jpg'
import Agenda360 from './img/Android/Agenda.jpg'

import Timeline1920 from './img/Desktop/1920w/Timeline.jpg'
import Timeline1728 from './img/Macbook/1728w/Timeline.jpg'
import Timeline1512 from './img/Macbook/1512w/Timeline.jpg'
import Timeline1440 from './img/Desktop/1440w/Timeline.jpg'
import Timeline1280 from './img/Macbook/1280w/Timeline.jpg'
import Timeline1024 from './img/Tablet/1024w/Timeline.jpg'
import Timeline834 from './img/Tablet/834w/Timeline.jpg'
import Timeline430 from './img/iPhone/430w/Timeline.jpg'
import Timeline390 from './img/iPhone/390w/Timeline.jpg'
import Timeline360 from './img/Android/Timeline.jpg'

import Numbers1920 from './img/Desktop/1920w/Numbers.jpg'
import Numbers1728 from './img/Macbook/1728w/Numbers.jpg'
import Numbers1512 from './img/Macbook/1512w/Numbers.jpg'
import Numbers1440 from './img/Desktop/1440w/Numbers.jpg'
import Numbers1280 from './img/Macbook/1280w/Numbers.jpg'
import Numbers1024 from './img/Tablet/1024w/Numbers.jpg'
import Numbers834 from './img/Tablet/834w/Numbers.jpg'
import Numbers430 from './img/iPhone/430w/Numbers.jpg'
import Numbers390 from './img/iPhone/390w/Numbers.jpg'
import Numbers360 from './img/Android/Numbers.jpg'

import Mid1920 from './img/Desktop/1920w/Mid.jpg'
import Mid1728 from './img/Macbook/1728w/Mid.jpg'
import Mid1512 from './img/Macbook/1512w/Mid.jpg'
import Mid1440 from './img/Desktop/1440w/Mid.jpg'
import Mid1280 from './img/Macbook/1280w/Mid.jpg'
import Mid1024 from './img/Tablet/1024w/Mid.jpg'
import Mid834 from './img/Tablet/834w/Mid.jpg'
import Mid430 from './img/iPhone/430w/Mid.jpg'
import Mid390 from './img/iPhone/390w/Mid.jpg'
import Mid360 from './img/Android/Mid.jpg'

import End1920 from './img/Desktop/1920w/End.jpg'
import End1728 from './img/Macbook/1728w/End.jpg'
import End1512 from './img/Macbook/1512w/End.jpg'
import End1440 from './img/Desktop/1440w/End.jpg'
import End1280 from './img/Macbook/1280w/End.jpg'
import End1024 from './img/Tablet/1024w/End.jpg'
import End834 from './img/Tablet/834w/End.jpg'
import End430 from './img/iPhone/430w/End.jpg'
import End390 from './img/iPhone/390w/End.jpg'
import End360 from './img/Android/End.jpg'


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