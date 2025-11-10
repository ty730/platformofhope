import React from 'react';
import '../../App.css';
import '../../styles/order.css'
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function OrderSummary({ isConfirmation, productCost, productImg, productName }) {
    
  return (
    <Col 
        xl={4} 
        lg={4} 
        md={isConfirmation ? 5 : undefined}
        sm={isConfirmation ? 8 : undefined}
        xs={isConfirmation ? 10 : undefined}
        style={isConfirmation ? {} : { marginLeft: 'auto' }} 
        className="order-summary"
    >
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
        {isConfirmation ? 
            <div className='confirmation-back-buttons'>
                <Link to="/" rel="noopener noreferrer">
                    <button className="order-button">Back To Home</button>
                </Link>
                <Link to="/store" rel="noopener noreferrer">
                    <button className="order-button">Back To Store</button>
                </Link>
            </div>
            : 
            <>
                <p className='order-text'>Before placing your order make sure you have paid via your choice of payment </p>
                <button type='submit' form='order-form' className='order-button'>PLACE ORDER</button>
            </>
        }
    </Col>
  );
}

export default OrderSummary;
