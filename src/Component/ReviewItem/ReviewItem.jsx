import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product, handleRemoveCart }) => {

    const { img, name, price, shipping } = product;

    return (
        <div className='review-item'>

            <img src={img} alt="" />
            <div className='review-info'>
                <p>{name}</p>
                <p>Price: <span className='orange'>${price}</span></p>
                <p>Shipping: <span className='orange'>${shipping}</span></p>
            </div>
            <button onClick={() => handleRemoveCart(product.id)} className='btn-delete'>
                <FontAwesomeIcon icon={faTrash} />
            </button>

        </div>
    );
};

export default ReviewItem;