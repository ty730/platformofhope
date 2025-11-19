import React from 'react';
import './../App.css';
import './../styles/order.css'
import { Helmet } from 'react-helmet'
import zelle from './../images/icons/zelle-icon.png';
import venmo from './../images/icons/venmo-icon.png';
import paypal from './../images/icons/paypal-icon.png';
import cashapp from './../images/icons/cashapp-icon.png';
import StateSelector from '../Components/Order/StateSelector';
import emailjs from '@emailjs/browser';
import { useSearchParams } from "react-router-dom";
import { PRODUCTS } from '../data/store/products.const';
import { Row, Col } from 'react-bootstrap';
import { Navigate, useNavigate } from "react-router-dom";

function Order() {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams();
    const productId = searchParams.get("productId");
    if (!productId) {
        return <Navigate to="/store" replace />;
    }
    const { cost: productCost, img: productImg, name: productName } = PRODUCTS[productId]

    function onSubmitForm(e) {
        e.preventDefault();
        if (process.env.REACT_APP_ENV !== 'local') { // TODO: change to 'production' when ready
            emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_ORDER_TEMPLATE_ID, e.target)
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            console.log('Email sent')
        } else {
            console.log('No email sent in local environment');
            console.log(Object.fromEntries(new FormData(e.target).entries()));
        }
        e.target.reset();

        const searchString = new URLSearchParams({ productId: productId }).toString()
        navigate({
            pathname: '/orderConfirmation',
            search: `?${searchString}`
        });
    }

  return (
    <div className="order">
        <Helmet>
            <title>Order Merchandise - Platform of Hope in Atlanta, Georgia</title>
        </Helmet>
        <div className="order-header">
            <h2>Merchandise Order - {productName}</h2>
            <h4>Use the links to pay for your purchase ({productCost}). Items will be shipped within 3 business days.</h4>
        </div>
        <Row className="order-content-container">
            <Col className="payment-container">
                <div className="buy-buttons">
                    <a href="https://www.venmo.com/platformofhope" target="_blank" rel="noopener noreferrer" className="my-2">
                        <button className='venmo'>
                            <img src={venmo} alt=""/>
                            <p className="ml-1">Pay with Venmo</p>
                        </button>
                    </a>
                    <a href="https://www.paypal.com/paypalme/PlatformofHope" target="_blank" rel="noopener noreferrer" className="my-2">
                        <button className='paypal'>
                            <img src={paypal} alt=""/>
                            <p className="ml-1">Pay with PayPal</p>
                        </button>
                    </a>
                    <a href="https://www.zelle.com/" target="_blank" rel="noopener noreferrer" className="my-2">
                        <button className='zelle'>
                            <img src={zelle} alt=""/>
                            <p className="ml-1">Pay with Zelle (doris@platformofhope.org)</p>
                        </button>
                    </a>
                    <a href="https://cash.app/$PlatformofHope" target="_blank" rel="noopener noreferrer" className="my-2">
                        <button className='cashapp'>
                            <img src={cashapp} alt=""/>
                            <p className="ml-1">Pay with Cash App</p>
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
                    <input type="hidden" name="product-id" value={productId}></input>
                    <input type="hidden" name="product-name" value={productName}></input>
                    <input type="hidden" name="product-cost" value={productCost}></input>
                    <div className="payment-options-container">
                        <h3>Payment Option That You Used To Pay</h3>
                        <hr />
                        <fieldset className="payment-options">
                            <div className='payment-option'>
                                <img src={venmo} alt=""/>
                                <h4>Venmo</h4>
                                <div className='centered-radio'>
                                    <input type='radio' value='Venmo' name='payment-method' required />
                                </div>
                            </div>
                            <div className='payment-option'>
                                <img src={paypal} alt=""/>
                                <h4>Paypal</h4>
                                <div className='centered-radio'>
                                    <input type='radio' value='PayPal' name='payment-method' required />
                                </div>
                            </div>
                            <div className='payment-option'>
                                <img src={zelle} alt=""/>
                                <h4>Zelle</h4>
                                <div className='centered-radio'>
                                    <input type='radio' value='Zelle' name='payment-method' required />
                                </div>
                            </div>
                            <div className='payment-option'>
                                <img src={cashapp} alt=""/>
                                <h4>Cash App</h4>
                                <div className='centered-radio'>
                                    <input type='radio' value='Cash App' name='payment-method' required />
                                </div>
                            </div>
                        </fieldset>
                        <hr />
                        <div className="input-label">
                            <label>Username used to pay</label>
                            <input type="text" name='username' required autoComplete='username' />
                        </div>
                    </div>
                    <div className="shipping-information">
                        <h3 className='info-h3'>Shipping Information</h3>
                        <div className="input-label">
                            <label>Name</label>
                            <div className='name-input-container'>
                                <input type="text" placeholder='First name' name='fname' required autoComplete='given-name' />
                                <input type="text" placeholder='Last name' name='lname' required autoComplete='family-name' />
                            </div>
                        </div>
                        <div className="input-label">
                            <label>Address</label>
                            <input type="text" name='address' required autoComplete='address-line1' />
                        </div>
                        <div>
                            <div className="input-label">
                                <label>Apt/Unit</label>
                                <input type="text" name='unit' autoComplete='address-line2' />
                            </div>
                            <StateSelector />
                            <div className="input-label">
                                <label>City</label>
                                <input type="text" name='city' required autoComplete='address-level2' />
                            </div>
                            <div className="input-label">
                                <label>Zip Code</label>
                                <input type="text" name='zip' required autoComplete='postal-code' />
                            </div>
                        </div>
                        <div>
                            <div className="input-label">
                                <label>Email</label>
                                <input type="text" name='email' required autoComplete='email' />
                            </div>
                            <div className="input-label">
                                <label>Phone Number</label>
                                <input type="text" name='phone' autoComplete='tel' />
                            </div>
                        </div>
                        <h3 className='info-h3'>Additional Information</h3>
                        <div className="input-label">
                            <label>Order Notes (Optional)</label>
                            <input type="text" name='notes' />
                        </div>
                    </div>
                </form>
            </Col>
            <Col xl={4} lg={4} className="order-summary">
                <h3>Order Summary</h3>
                <div className='order-details'>
                    <img src={productImg} alt="" />
                    <div>
                        <h4>Platform of Hope {productName}</h4>
                        <h4>{productCost}</h4>
                    </div>
                </div>
                <hr />
                <div>
                    <h3>Total</h3>
                    <h3>{productCost}.00 USD</h3>
                </div>
                <p className='order-text'>Use the links to pay for your purchase. Items will be shipped within 3 business days.</p>
                <button type='submit' form='order-form' className='order-button'>PLACE ORDER</button>
            </Col>
        </Row>
    </div>
  );
}

export default Order;
