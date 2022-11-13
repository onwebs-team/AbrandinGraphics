//import React, { useRef } from "react";
//import emailjs from "@emailjs/browser";
import './Contact.scss'
import './WhiteContact.scss'
import Button from '../button/button3/button3-component'

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
    <div className="contact-container white-contact-container">
		<div className="contact-box white-contact-box">
			<h2>aboutiquestudio@gmail.com</h2>
			<h2>+972 523153355</h2>
			<h2>Hameshulash 4, Emek Hefer, Israel</h2>
			<div className="contact-form white-contact-form">
				<input type="text" className="field" placeholder="Name"/>
				<input type="text" className="field" placeholder="Email"/>
				<input type="text" className="field" placeholder="Subject"/>
				<textarea placeholder="Message" className="field"></textarea>
				<div className="contact-button"><Button text='SEND' /></div>
			</div>
		</div>
		<div><p><i className="fa-regular fa-copyright"></i> 2022 onwebs. All rights reserved.</p></div>
	</div>
  );
};

export default ContactUs;