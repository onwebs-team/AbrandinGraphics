import React, { useEffect }  from 'react';
import { useNavigate } from "react-router-dom";

import './Logos.scss'

import Button from '../../button/button2/button2-component'
import Header from '../header/workHeader-component'
import Example from '../example/workExample-component'

import Picmama1 from './img/Picmama1.jpg'
import Picmama11920 from './img/Desktop/1920w/Picmama1.jpg'
import Picmama11728 from './img/Macbook/1728w/Picmama1.jpg'
import Picmama11512 from './img/Macbook/1512w/Picmama1.jpg'
import Picmama11440 from './img/Desktop/1440w/Picmama1.jpg'
import Picmama11280 from './img/Macbook/1280w/Picmama1.jpg'
import Picmama11024 from './img/Tablet/1024w/Picmama1.jpg'
import Picmama1834 from './img/Tablet/834w/Picmama1.jpg'
import Picmama1430 from './img/iPhone/430w/Picmama1.jpg'
import Picmama1390 from './img/iPhone/390w/Picmama1.jpg'
import Picmama1360 from './img/Android/Picmama1.jpg'

import Picmama2 from './img/Picmama2.jpg'
import Picmama21920 from './img/Desktop/1920w/Picmama2.jpg'
import Picmama21728 from './img/Macbook/1728w/Picmama2.jpg'
import Picmama21512 from './img/Macbook/1512w/Picmama2.jpg'
import Picmama21440 from './img/Desktop/1440w/Picmama2.jpg'
import Picmama21280 from './img/Macbook/1280w/Picmama2.jpg'
import Picmama21024 from './img/Tablet/1024w/Picmama2.jpg'
import Picmama2834 from './img/Tablet/834w/Picmama2.jpg'
import Picmama2430 from './img/iPhone/430w/Picmama2.jpg'
import Picmama2390 from './img/iPhone/390w/Picmama2.jpg'
import Picmama2360 from './img/Android/Picmama2.jpg'

import Picorbach1 from './img/Picorbach1.jpg'
import Picorbach11920 from './img/Desktop/1920w/Picorbach1.jpg'
import Picorbach11728 from './img/Macbook/1728w/Picorbach1.jpg'
import Picorbach11512 from './img/Macbook/1512w/Picorbach1.jpg'
import Picorbach11440 from './img/Desktop/1440w/Picorbach1.jpg'
import Picorbach11280 from './img/Macbook/1280w/Picorbach1.jpg'
import Picorbach11024 from './img/Tablet/1024w/Picorbach1.jpg'
import Picorbach1834 from './img/Tablet/834w/Picorbach1.jpg'
import Picorbach1430 from './img/iPhone/430w/Picorbach1.jpg'
import Picorbach1390 from './img/iPhone/390w/Picorbach1.jpg'
import Picorbach1360 from './img/Android/Picorbach1.jpg'

import Picorbach2 from './img/Picorbach2.jpg'
import Picorbach21920 from './img/Desktop/1920w/Picorbach2.jpg'
import Picorbach21728 from './img/Macbook/1728w/Picorbach2.jpg'
import Picorbach21512 from './img/Macbook/1512w/Picorbach2.jpg'
import Picorbach21440 from './img/Desktop/1440w/Picorbach2.jpg'
import Picorbach21280 from './img/Macbook/1280w/Picorbach2.jpg'
import Picorbach21024 from './img/Tablet/1024w/Picorbach2.jpg'
import Picorbach2834 from './img/Tablet/834w/Picorbach2.jpg'
import Picorbach2430 from './img/iPhone/430w/Picorbach2.jpg'
import Picorbach2390 from './img/iPhone/390w/Picorbach2.jpg'
import Picorbach2360 from './img/Android/Picorbach2.jpg'

import Picb91 from './img/Picb91.jpg'
import Picb911920 from './img/Desktop/1920w/Picb91.jpg'
import Picb911728 from './img/Macbook/1728w/Picb91.jpg'
import Picb911512 from './img/Macbook/1512w/Picb91.jpg'
import Picb911440 from './img/Desktop/1440w/Picb91.jpg'
import Picb911280 from './img/Macbook/1280w/Picb91.jpg'
import Picb911024 from './img/Tablet/1024w/Picb91.jpg'
import Picb91834 from './img/Tablet/834w/Picb91.jpg'
import Picb91430 from './img/iPhone/430w/Picb91.jpg'
import Picb91390 from './img/iPhone/390w/Picb91.jpg'
import Picb91360 from './img/Android/Picb91.jpg'

import Picb92 from './img/Picb92.jpg'
import Picb921920 from './img/Desktop/1920w/Picb92.jpg'
import Picb921728 from './img/Macbook/1728w/Picb92.jpg'
import Picb921512 from './img/Macbook/1512w/Picb92.jpg'
import Picb921440 from './img/Desktop/1440w/Picb92.jpg'
import Picb921280 from './img/Macbook/1280w/Picb92.jpg'
import Picb921024 from './img/Tablet/1024w/Picb92.jpg'
import Picb92834 from './img/Tablet/834w/Picb92.jpg'
import Picb92430 from './img/iPhone/430w/Picb92.jpg'
import Picb92390 from './img/iPhone/390w/Picb92.jpg'
import Picb92360 from './img/Android/Picb92.jpg'


function LogosComponent(props) {

    const navigate = useNavigate();
    const nextPage = () => {
        navigate("/presentations", { replace: true });
        window.scrollTo({top: 0, left: 0});
    }

    return (
        <div className='logos'>
            <Header header='logos' des='For any type of business' />
            <div className="logos-examples">
                <Example 
                    first='An example of logo for the "Mama" winery,' 
                    second='an Italian family winery from the Golan Mountains.' 
                    third='We took the letters M and A and arranged them in an interesting way. The burgundy color is classic and romantic. Just like wine.' 
                />
                <div className="logos-two-pictures">
                    <div className='img-1920'><img className='logos-img logos-img-left' src={Picmama11920} alt="" /></div>
                    <div className='img-1728'><img className='logos-img logos-img-left' src={Picmama11728} alt="" /></div>
                    <div className='img-1512'><img className='logos-img logos-img-left' src={Picmama11512} alt="" /></div>
                    <div className='img-1440'><img className='logos-img logos-img-left' src={Picmama11440} alt="" /></div>
                    <div className='img-1280'><img className='logos-img logos-img-left' src={Picmama11280} alt="" /></div>
                    <div className='img-1024'><img className='logos-img logos-img-left' src={Picmama11024} alt="" /></div>
                    <div className='img-834'><img className='logos-img logos-img-left' src={Picmama1834} alt="" /></div>
                    <div className='img-430'><img className='logos-img logos-img-left' src={Picmama1430} alt="" /></div>
                    <div className='img-390'><img className='logos-img logos-img-left' src={Picmama1390} alt="" /></div>
                    <div className='img-360'><img className='logos-img logos-img-left' src={Picmama1360} alt="" /></div>
                    <div className='img-1920'><img className='logos-img logos-img-right' src={Picmama21920} alt="" /></div>
                    <div className='img-1728'><img className='logos-img logos-img-right' src={Picmama21728} alt="" /></div>
                    <div className='img-1512'><img className='logos-img logos-img-right' src={Picmama21512} alt="" /></div>
                    <div className='img-1440'><img className='logos-img logos-img-right' src={Picmama21440} alt="" /></div>
                    <div className='img-1280'><img className='logos-img logos-img-right' src={Picmama21280} alt="" /></div>
                    <div className='img-1024'><img className='logos-img logos-img-right' src={Picmama21024} alt="" /></div>
                    <div className='img-834'><img className='logos-img logos-img-right' src={Picmama2834} alt="" /></div>
                    <div className='img-430'><img className='logos-img logos-img-right' src={Picmama2430} alt="" /></div>
                    <div className='img-390'><img className='logos-img logos-img-right' src={Picmama2390} alt="" /></div>
                    <div className='img-360'><img className='logos-img logos-img-right' src={Picmama2360} alt="" /></div>
                </div>
                <div className='new-example'>
                    <Example 
                        first='Example of a logo card for “Orbach” -' 
                        second='Law firm who specializes in energy and infrastructure.' 
                        third='The logo is round to represent energy and looks like a road to show infrastructure.' 
                    />
                </div>
                <div className="logos-two-pictures">
                    <div className='img-1920'><img className='logos-img logos-img-left' src={Picorbach11920} alt="" /></div>
                    <div className='img-1728'><img className='logos-img logos-img-left' src={Picorbach11728} alt="" /></div>
                    <div className='img-1512'><img className='logos-img logos-img-left' src={Picorbach11512} alt="" /></div>
                    <div className='img-1440'><img className='logos-img logos-img-left' src={Picorbach11440} alt="" /></div>
                    <div className='img-1280'><img className='logos-img logos-img-left' src={Picorbach11280} alt="" /></div>
                    <div className='img-1024'><img className='logos-img logos-img-left' src={Picorbach11024} alt="" /></div>
                    <div className='img-834'><img className='logos-img logos-img-left' src={Picorbach1834} alt="" /></div>
                    <div className='img-430'><img className='logos-img logos-img-left' src={Picorbach1430} alt="" /></div>
                    <div className='img-390'><img className='logos-img logos-img-left' src={Picorbach1390} alt="" /></div>
                    <div className='img-360'><img className='logos-img logos-img-left' src={Picorbach1360} alt="" /></div>
                    <div className='img-1920'><img className='logos-img logos-img-right' src={Picorbach21920} alt="" /></div>
                    <div className='img-1728'><img className='logos-img logos-img-right' src={Picorbach21728} alt="" /></div>
                    <div className='img-1512'><img className='logos-img logos-img-right' src={Picorbach21512} alt="" /></div>
                    <div className='img-1440'><img className='logos-img logos-img-right' src={Picorbach21440} alt="" /></div>
                    <div className='img-1280'><img className='logos-img logos-img-right' src={Picorbach21280} alt="" /></div>
                    <div className='img-1024'><img className='logos-img logos-img-right' src={Picorbach21024} alt="" /></div>
                    <div className='img-834'><img className='logos-img logos-img-right' src={Picorbach2834} alt="" /></div>
                    <div className='img-430'><img className='logos-img logos-img-right' src={Picorbach2430} alt="" /></div>
                    <div className='img-390'><img className='logos-img logos-img-right' src={Picorbach2390} alt="" /></div>
                    <div className='img-360'><img className='logos-img logos-img-right' src={Picorbach2360} alt="" /></div>
                </div>
                <div className='new-example'>
                    <Example 
                        first='An example of logo for the "Mama" winery,' 
                        second='an Italian family winery from the Golan Mountains.' 
                        third='We took the letters M and A and arranged them in an interesting way. The burgundy color is classic and romantic. Just like wine.' 
                    />
                </div>
                <div className="logos-two-pictures">
                    <div className='img-1920'><img className='logos-img logos-img-left' src={Picb911920} alt="" /></div>
                    <div className='img-1728'><img className='logos-img logos-img-left' src={Picb911728} alt="" /></div>
                    <div className='img-1512'><img className='logos-img logos-img-left' src={Picb911512} alt="" /></div>
                    <div className='img-1440'><img className='logos-img logos-img-left' src={Picb911440} alt="" /></div>
                    <div className='img-1280'><img className='logos-img logos-img-left' src={Picb911280} alt="" /></div>
                    <div className='img-1024'><img className='logos-img logos-img-left' src={Picb911024} alt="" /></div>
                    <div className='img-834'><img className='logos-img logos-img-left' src={Picb91834} alt="" /></div>
                    <div className='img-430'><img className='logos-img logos-img-left' src={Picb91430} alt="" /></div>
                    <div className='img-390'><img className='logos-img logos-img-left' src={Picb91390} alt="" /></div>
                    <div className='img-360'><img className='logos-img logos-img-left' src={Picb91360} alt="" /></div>
                    <div className='img-1920'><img className='logos-img logos-img-right' src={Picb921920} alt="" /></div>
                    <div className='img-1728'><img className='logos-img logos-img-right' src={Picb921728} alt="" /></div>
                    <div className='img-1512'><img className='logos-img logos-img-right' src={Picb921512} alt="" /></div>
                    <div className='img-1440'><img className='logos-img logos-img-right' src={Picb921440} alt="" /></div>
                    <div className='img-1280'><img className='logos-img logos-img-right' src={Picb921280} alt="" /></div>
                    <div className='img-1024'><img className='logos-img logos-img-right' src={Picb921024} alt="" /></div>
                    <div className='img-834'><img className='logos-img logos-img-right' src={Picb92834} alt="" /></div>
                    <div className='img-430'><img className='logos-img logos-img-right' src={Picb92430} alt="" /></div>
                    <div className='img-390'><img className='logos-img logos-img-right' src={Picb92390} alt="" /></div>
                    <div className='img-360'><img className='logos-img logos-img-right' src={Picb92360} alt="" /></div>
                </div>
            </div>
            <div className="work-button"><Button text='NEXT' work={nextPage}/></div>
        </div>
    );
}

export default LogosComponent;




