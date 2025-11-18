import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Modal from "react-bootstrap/Modal";
import '../../styles/store.css';
import { PRODUCTS } from '../../data/store/products.const';

function ProductModal({show, handleClose, title, productId}) {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    const { name: productName, carouselImages, description } = PRODUCTS[productId];

    return (
        <Modal show={show} onHide={handleClose} size='lg'>
            <Modal.Header closeButton size=''>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    {carouselImages.map((image, index) => 
                        (
                            <Carousel.Item>
                                <div>
                                    <img src={image} alt={productName} className='carousel-image' key={index} />
                                </div>
                            </Carousel.Item>
                        ))}
                </Carousel>
            </Modal.Body>
            {
                description ? 
                <Modal.Footer>
                    <div>
                        <p>{description}</p>
                    </div>
                </Modal.Footer>
                : null
            }
            
        </Modal>
    );
}

export default ProductModal;
