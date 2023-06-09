import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Order = () => {

    const savedCart = useLoaderData();
    const [cart, setCart ] = useState(savedCart);
    
    const handleRemoveCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const handleClearCart = () =>{

        setCart([]);
        deleteShoppingCart();
    }
 

    return (
        <div className='shop'>

            <div className='review-container'>

                {
                    cart.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                    handleRemoveCart={handleRemoveCart}
                    ></ReviewItem>)
                }

            </div>
            <div className='Order'>

                <Cart cart={cart}
                handleClearCart={handleClearCart}></Cart>

            </div>

        </div>
    );
};

export default Order;