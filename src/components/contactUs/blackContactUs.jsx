//import React, { useRef } from "react";
//import emailjs from "@emailjs/browser";
import './Contact.scss'
import './BlackContact.scss'
import Button from '../button/button3/button3-component'

import c1920 from './img/Desktop/1920w/c.png'
import c1728 from './img/Macbook/1728w/c.png'
import c1512 from './img/Macbook/1512w/c.png'
import c1440 from './img/Desktop/1440w/c.png'
import c1280 from './img/Macbook/1280w/c.png'
import c1024 from './img/Tablet/1024w/c.png'
import c834 from './img/Tablet/834w/c.png'
import c430 from './img/iPhone/430w/c.png'
import c390 from './img/iPhone/390w/c.png'
import c360 from './img/Android/c.png'

// npm i @emailjs/browser

const ContactUs = () => {
 // const form = useRef();

  //const sendEmail = (e) => {
  //  e.preventDefault();

//     emailjs
//       .sendForm(
//         "replace with service id",
//         "replace with template id",
//         form.current,
//         "replace with user id"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           console.log("message sent");
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

  return (
    <div className="contact-container black-contact-container">
		<div className="contact-box black-contact-box">
			<h2>aboutiquestudio@gmail.com</h2>
			<h2>+972 523153355</h2>
			<h2>Hameshulash 4, Emek Hefer, Israel</h2>
			<div className="contact-form black-contact-form">
				<input type="text" className="field" placeholder="Name"/>
				<input type="text" className="field" placeholder="Email"/>
				<input type="text" className="field" placeholder="Subject"/>
				<textarea placeholder="Message" className="field"></textarea>
				<div className="contact-button black-contact-button"><Button text='SEND' /></div>
			</div>
		</div>
		<div>
			<div className='img-1920'><p><img src={c1920} alt="" /> 2022 onwebs. All rights reserved.</p></div>
			<div className='img-1728'><p><img src={c1728} alt="" /> 2022 onwebs. All rights reserved.</p></div>
			<div className='img-1512'><p><img src={c1512} alt="" /> 2022 onwebs. All rights reserved.</p></div>
			<div className='img-1440'><p><img src={c1440} alt="" /> 2022 onwebs. All rights reserved.</p></div>
			<div className='img-1280'><p><img src={c1280} alt="" /> 2022 onwebs. All rights reserved.</p></div>
			<div className='img-1024'><p><img src={c1024} alt="" /> 2022 onwebs. All rights reserved.</p></div>
			<div className='img-834'><p><img src={c834} alt="" /> 2022 onwebs. All rights reserved.</p></div>
			<div className='img-430'><p><img src={c430} alt="" /> 2022 onwebs. All rights reserved.</p></div>
			<div className='img-390'><p><img src={c390} alt="" /> 2022 onwebs. All rights reserved.</p></div>
			<div className='img-360'><p><img src={c360} alt="" /> 2022 onwebs. All rights reserved.</p></div>
			{/* <p><i className="fa-regular fa-copyright"></i> 2022 onwebs. All rights reserved.</p> */}
		</div>
	</div>
  );
};

export default ContactUs;