import React from 'react';
import './../App.css';
import './../styles/store.css'
import {Helmet} from 'react-helmet'
import ProductCard from '../Components/Store/ProductCard';
import { PRODUCTS } from '../data/store/products.const';

function Store() {
  return (
    <div className="Store">
        <Helmet>
            <title>Store - Platform of Hope in Atlanta, Georgia</title>
        </Helmet>
        <div className="store-header">
            <h2>Platform of Hope Store</h2>
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
