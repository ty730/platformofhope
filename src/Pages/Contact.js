import React from 'react';
import emailjs from 'emailjs-com';
import './../App.css';

/**
 * This is the Contact component that holds all information for the Contact page.
 */
function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_ygjc33b', 'template_la6pfnn', e.target, 'user_Ah3XT9jFGq07ifHohQS2w')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  }

  return (
    <div className="Contact">
      <div className="contact-top">
        <h1>CONTACT US</h1>
        <h3>If you would like to make a difference let us know!</h3>
      </div>
      <div className="contact-container">
        <div className="get-in-touch">
          <h2>Get In Touch</h2>
          <p>Please fill out this brief form and we will be in touch with you shortly.</p>
          <form className="contact-form" onSubmit={sendEmail}>
            <input type="text" placeholder="Name" name="name" />
            <input type="text" placeholder="Phone Number" name="phone" />
            <input type="email" placeholder="Email Address" name="email" />
            <textarea placeholder="Message" name="message" />
            <input type="submit" value="Send" />
          </form>
        </div>
        <div className="contact-info">
          <h3>Connect with us</h3>
          <p>For support or any questions</p>
          <p>Email us at <span>info@platformofhope.org</span></p>
          <p>Or call <span>(770) 767-0200</span></p>
          <h3>Mailing Address</h3>
          <p>P.O. Box 48198</p>
          <p>Atlanta, GA 30362</p>
          <h3>Areas Served</h3>
          <p>Atlanta, Georgia, Surrounding Counties, and Mississipi Delta</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
