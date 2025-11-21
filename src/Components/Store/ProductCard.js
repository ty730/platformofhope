import { Link } from "react-router-dom";
import { useState } from "react";
import "../../styles/store.css";
import ProductModal from "./ProductModal";

function ProductCard({ cost, imgSrc, name, productId, isFeatured }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    };
    return (
        <div className={`product-card ${isFeatured ? "featured" : ""}`}>
            <img
                src={imgSrc}
                alt={name}
                onClick={!isFeatured ? handleShow : () => {}}
            />
            <h4 className="capitalize">{name}</h4>
            {isFeatured ? null : <p>{cost}</p>}
            <Link
                to={{
                    pathname: "/order",
                    search: new URLSearchParams({
                        productId: productId,
                    }).toString(),
                }}
            >
                <button>ORDER NOW</button>
            </Link>
            <ProductModal
                show={show}
                handleClose={handleClose}
                title={name}
                productId={productId}
            />
        </div>
    );
}

export default ProductCard;
