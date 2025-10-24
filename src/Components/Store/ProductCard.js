import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/store.css'

function ProductCard({ cost, imgSrc, name, productId}) {
  return (
    <div className="product-card">
        <img src={imgSrc} alt={name}/>
        <h4 className='capitalize'>{name}</h4>
        <p>{cost}</p>
        <Link
            to={{
                pathname: '/order',
                search: new URLSearchParams({
                    productId: productId,
                }).toString(),
            }}
        >
            <button>ORDER NOW</button>
        </Link>
    </div>
  );
}

export default ProductCard;
