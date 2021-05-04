import React from 'react';
import './../App.css';
import servicesImg from './../images/get-help-services-edited.png';
import resourceGuideImg from './../images/resource-guide.png';

/**
 * This is the Get Help component that holds all information for the Get Help page.
 */
function GetHelp() {
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
    </div>
  );
}

export default GetHelp;
