import React from "react";
import "./../App.css";
import "./../styles/order.css";
import { Helmet } from "react-helmet";
import { Navigate, useSearchParams } from "react-router-dom";
import OrderSummary from "../Components/Order/OrderSummary";
import { Row } from "react-bootstrap";
import { PRODUCTS } from "../data/store/products.const";

function OrderConfirmation() {
    const [searchParams] = useSearchParams();
    const productId = searchParams.get("productId");
    if (!productId) {
        return <Navigate to="/store" replace />;
    }
    const {
        cost: productCost,
        img: productImg,
        name: productName,
    } = PRODUCTS[productId];

    return (
        <div className="order">
            <Helmet>
                <title>
                    Order Confirmation - Platform of Hope in Atlanta, Georgia
                </title>
            </Helmet>
            <div className="order-header">
                <h2>Order Confirmation</h2>
                <h4>
                    We have received your order. Thank you for supporting
                    Platform of Hope by ordering a Platform of Hope{" "}
                    {productName}!
                </h4>
            </div>
            <Row className="order-confirmation-column justify-content-center">
                <OrderSummary
                    isConfirmation={true}
                    productCost={productCost}
                    productImg={productImg}
                    productName={productName}
                />
            </Row>
        </div>
    );
}

export default OrderConfirmation;
