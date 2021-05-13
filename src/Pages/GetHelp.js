import React from 'react';
import './../App.css';
import emailjs from 'emailjs-com';
import servicesImg from './../images/get-help-services-edited.png';
import resourceGuideImg from './../images/resource-guide.png';

/**
 * This is the Get Help component that holds all information for the Get Help page.
 */
function GetHelp() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_8fderar', 'template_6hjo9b6', e.target, 'user_OKR16ehhZhBLdFc7CF3bH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  }

  return (
    <div className="GetHelp">
      <div className="get-help-top">
        <h1>We are here to help</h1>
        <h3>Reach out to us or submit the form below to recieve help</h3>
      </div>
      <div className="get-help-container">
        <div className="get-help-card">
          <img src={servicesImg} alt="Services"/>
          <h2>Services</h2>
          <p>Check out more details on the services we offer</p>
          <button>GO TO SERVICES</button>
        </div>
        <div className="get-help-card">
          <img src={resourceGuideImg} alt="Services"/>
          <h2>Resource Guide</h2>
          <p>Find other resouces in the Atlanta Area that may be able to help</p>
          <button>DOWNLOAD</button>
        </div>
      </div>
      <div className="outreach-container">
        <h2>Outreach Request Form</h2>
        <p>Please fill out this outreach form and we will be in touch with you shortly.</p>
        <form className="outreach-form" onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="name" required/>
          <input type="email" placeholder="Email Address" name="email" required/>
          <input type="text" placeholder="Phone Number" name="phone" required/>
          <input type="text" placeholder="Address" name="address"/>
          <select name="numpeople" required>
            <option value="" selected disabled hidden>Number of people in household</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <input type="number" placeholder="Household income" name="income" min="0" required/>
          <p>Which benefits do you recieve?</p>
          <div>
            <input type="checkbox" name="foodstamps"/>
            <label for="foodstamps">SNAP/Food Stamps</label>
          </div>
          <div>
            <input type="checkbox" name="medicaid"/>
            <label for="medicaid">Medicaid</label>
          </div>
          <div>
            <input type="checkbox" name="tanf"/>
            <label for="tanf">TANF</label>
          </div>
          <div>
            <input type="checkbox" name="disability"/>
            <label for="disability">Disability</label>
          </div>
          <textarea placeholder="Grade(s) and School(s) of child(ren)" name="childschool"/>
          <input type="text" placeholder="How were you referred?" name="referal"/>
          <select name="veteran" required>
            <option value="" selected disabled hidden>Are you a veteran?</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <input className="outreach-submit" type="submit" value="SUBMIT" />
        </form>
      </div>
    </div>
  );
}

export default GetHelp;
