import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cart, handleClearCart }) => {

    let total = 0;
    let totalShipping = 0;
    let quantity = 0;

    for (const product of cart) {

        if (product.quantity === 0) {
            product.quantity = 1;
        }

        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.price;
        quantity = quantity + product.quantity;

    }

    const tax = total * 7 / 100;
    const grandTotal = total + totalShipping + tax;



    return (
        <div className='cart'>

            <h2>Order Summary</h2>
            <div>
                <p>Select Items: {quantity} </p>
                <p>Total Price: ${total} </p>
                <p>Total Shipping Charge: ${totalShipping} </p>
                <p>Tax: ${tax}</p>
                <h3>Grand Total: {grandTotal} </h3>
                <button onClick={handleClearCart} className='btn-clear-cart'>Clear Cart
                    <span><FontAwesomeIcon icon={faTrashAlt} /></span></button>
            </div>




        </div>
    );
};

export default Cart;