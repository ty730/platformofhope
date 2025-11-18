import React from 'react';
import './../App.css';
import './../styles/store.css'
import {Helmet} from 'react-helmet'
import ProductCard from '../Components/Store/ProductCard';
import { PRODUCTS } from '../data/store/products.const';

function Store() {
  return (
    <div className="store">
        <Helmet>
            <title>Store - Platform of Hope in Atlanta, Georgia</title>
        </Helmet>
        <div className="store-header">
            <h2>Platform of Hope Store</h2>
            <h4>Every purchase you make helps support our mission of empowering underserved families. When you shop with use, you're not just buying an item - you're investing in hope.</h4>
            <h4>Our thoughtfully selected items are designed to inspire encouragement, reflection, and comfort in everyday life. 100% of proceeds go directly toward programs and services that bring hope to our community.</h4>
        </div>
        <div className="column-container">
        {Object.entries(PRODUCTS).map(([productId, product]) => (
            <ProductCard
                key={productId}
                cost={product.cost}
                imgSrc={product.img}
                name={product.name}
                productId={productId}
            />
        ))}
        </div>
    </div>
  );
}

export default Store;
