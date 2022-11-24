import './Contact.scss'
import './WhiteContact.scss'
import Button from '../button/button3/button3-component'

const ContactUs = () => {

  const sendEmail = (e) => {

  };

  return (
    <div className="contact-container white-contact-container">
		<div className="contact-box white-contact-box">
			<h2>aboutiquestudio@gmail.com</h2>
			<h2>+972 523153355</h2>
			<h2>Hameshulash 4, Emek Hefer, Israel</h2>
			<form action="https://formsubmit.co/aboutiquestudio@gmail.com" method="POST" className="contact-form white-contact-form">
				<input type="text" className="field" placeholder="Name" name='name' required/>
				<input type="email" className="field" placeholder="Email" name='email' required/>
				<input type="text" className="field" placeholder="Subject" name='subject' required/>
				<textarea placeholder="Message" className="field" name='message' required></textarea>
				<div className="contact-button"><Button text='SEND' work={sendEmail}/></div>
			</form>
		</div>
		<div><p><i className="fa-regular fa-copyright"></i> 2022 onwebs. All rights reserved.</p></div>
	</div>
  );
};

export default ContactUs;