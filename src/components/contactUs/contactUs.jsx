//import React, { useRef } from "react";
//import emailjs from "@emailjs/browser";
import './Contact.css'

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
   

    <div class="container">
		<div class="contact-box">
			<h2>aboutiquestudio@gmail.com</h2>

			<h2>+972 523153355</h2>
			
			<h2>Hameshulash 4, Emek Hefer, Israel</h2>
			<div class="right">
				<input type="text" class="field" placeholder="Your Name"/>
				<input type="text" class="field" placeholder="Your Email"/>
				<input type="text" class="field" placeholder="Phone"/>
				<textarea placeholder="Message" class="field"></textarea>
				<button class="btn">Send</button>

                <p>2022 onweb. All rights reserved.</p>
			</div>
		</div>
	</div>
  );
};

export default ContactUs;


