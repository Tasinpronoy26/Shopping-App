import React from 'react';
import './Product.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {


    const { img, name, price, seller, ratings } = props.product;

    const handleToAddCart = props.handleToAddCart




    return (
        <div className='product'>

            <img src={img} alt="" />
            <h5 className='product-name'>{name}</h5>
            <div className='info'>
                <p className='price'>Price : ${price}</p>
                <div className='bottom'>
                    <p>Manufecture : {seller}</p>
                    <p>Rating : {ratings} Star</p>
                </div>
                <button onClick={() => handleToAddCart(props.product)} className='button'>Add to cart
                <FontAwesomeIcon icon={faShoppingCart} /></button>
            </div>

        </div>
    );
};

export default Product;