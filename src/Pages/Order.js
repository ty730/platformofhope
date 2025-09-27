import React from 'react';
import './../App.css';
import './../styles/order.css'
import { Helmet } from 'react-helmet'
import zelle from './../images/icons/zelle-icon.png';
import venmo from './../images/icons/venmo-icon.png';
import paypal from './../images/icons/paypal-icon.png';
import cashapp from './../images/icons/cashapp-icon.png';
import towel from './../images/store/poh-towel.jpg'
import StateSelector from '../Components/Order/StateSelector';
import emailjs from '@emailjs/browser';

function Order() {

    function onSubmitForm(e) {
        e.preventDefault();
        if (process.env.REACT_APP_ENV === 'test') { // TODO: change to 'production' when ready
            emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_ORDER_TEMPLATE_ID, e.target)
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        } else {
            console.log('No email sent in local environment');
            console.log(Object.fromEntries(new FormData(e.target).entries()));
        }
        e.target.reset();
    }

  return (
    <div className="order">
        <Helmet>
            <title>Order Merchandise - Platform of Hope in Atlanta, Georgia</title>
        </Helmet>
        <div className="order-header">
            <h2>Merchandise Order (Under Construction)</h2>
            <h4>Before ordering pay by visiting one of our links to buy the Towel and pay $25</h4>
            <p>Before shipping the merchandise to you we will verify that you donated via your chosen method and username.</p>
        </div>
        <div className="order-content-container">
            <div className="payment-container">
                <div className="buy-buttons">
                    <a href="https://www.venmo.com/platformofhope" target="_blank" rel="noopener noreferrer" className="my-2">
                        <button className='venmo'>
                            <img src={venmo} alt=""/>
                            <p className="ml-1">Buy with Venmo</p>
                        </button>
                    </a>
                    <a href="https://www.paypal.com/paypalme/PlatformofHope" target="_blank" rel="noopener noreferrer" className="my-2">
                        <button className='paypal'>
                            <img src={paypal} alt=""/>
                            <p className="ml-1">Buy with PayPal</p>
                        </button>
                    </a>
                    <a href="https://www.zelle.com/" target="_blank" rel="noopener noreferrer" className="my-2">
                        <button className='zelle'>
                            <img src={zelle} alt=""/>
                            <p className="ml-1">Buy with Zelle (doris@platformofhope.org)</p>
                        </button>
                    </a>
                    <a href="https://cash.app/$PlatformofHope" target="_blank" rel="noopener noreferrer" className="my-2">
                        <button className='cashapp'>
                            <img src={cashapp} alt=""/>
                            <p className="ml-1">Buy with Cash App</p>
                        </button>
                    </a>
                    {/* 
                    <a href="https://linktr.ee/platformofhopeinc" target="_blank" rel="noopener noreferrer" className="my-2">
                        <button className='linktree'>
                            <img src={linktree} alt=""/>
                            <p className="ml-1">Linktree for all options</p>
                        </button>
                    </a>
                    */}
                </div>
                <form id='order-form' className="outreach-form" onSubmit={onSubmitForm}>
                    <div className="payment-options-container">
                        <h3>Payment Option That You Used To Pay</h3>
                        <hr />
                        <fieldset className="payment-options">
                            <div className='payment-option'>
                                <img src={venmo} alt=""/>
                                <h4>Venmo</h4>
                                <input type='radio' value='Venmo' name='payment-method' required />
                            </div>
                            <div className='payment-option'>
                                <img src={paypal} alt=""/>
                                <h4>Paypal</h4>
                                <input type='radio' value='PayPal' name='payment-method' required />
                            </div>
                            <div className='payment-option'>
                                <img src={zelle} alt=""/>
                                <h4>Zelle</h4>
                                <input type='radio' value='Zelle' name='payment-method' required />
                            </div>
                            <div className='payment-option'>
                                <img src={cashapp} alt=""/>
                                <h4>Cash App</h4>
                                <input type='radio' value='Cash App' name='payment-method' required />
                            </div>
                        </fieldset>
                        <hr />
                        <div className="input-label">
                            <label>Username used to pay</label>
                            <input type="text" name='username' required />
                        </div>
                    </div>
                    <div className="shipping-information">
                        <h3 className='info-h3'>Shipping Information</h3>
                        <div className="input-label">
                            <label>Name</label>
                            <div className='name-input-container'>
                                <input type="text" placeholder='First name' name='firstname' required />
                                <input type="text" placeholder='Last name' name='lastname' required />
                            </div>
                        </div>
                        <div className="input-label">
                            <label>Address</label>
                            <input type="text" name='address' required />
                        </div>
                        <div>
                            <div className="input-label">
                                <label>Apt/Unit</label>
                                <input type="text" name='unit' required />
                            </div>
                            <StateSelector />
                            <div className="input-label">
                                <label>City</label>
                                <input type="text" name='city' required />
                            </div>
                            <div className="input-label">
                                <label>Zip Code</label>
                                <input type="text" name='zipcode' required />
                            </div>
                        </div>
                        <div>
                            <div className="input-label">
                                <label>Email</label>
                                <input type="text" name='email' required />
                            </div>
                            <div className="input-label">
                                <label>Phone Number</label>
                                <input type="text" name='phone' />
                            </div>
                        </div>
                        <h3 className='info-h3'>Additional Information</h3>
                        <div className="input-label">
                            <label>Order Notes (Optional)</label>
                            <input type="text" name='notes' />
                        </div>
                    </div>
                </form>
            </div>
            <div className="order-summary">
                <h3>Order Summary</h3>
                <div className='order-details'>
                    <img src={towel} alt="" />
                    <div>
                        <h4>Platform of Hope Towel</h4>
                        <h4>$25</h4>
                    </div>
                </div>
                <hr />
                <div>
                    <h3>Total</h3>
                    <h3>$25.00 USD</h3>
                </div>
                <p className='order-text'>Before placing your order make sure you have paid via your choice of payment </p>
                <button type='submit' form='order-form' className='order-button'>PLACE ORDER</button>
            </div>
        </div>
    </div>
  );
}

export default Order;
