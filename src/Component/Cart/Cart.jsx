import React from 'react';
import './cart.css'

const Cart = ({cart}) => {

    
    
   
    let total = 0;
    let totalShipping = 0;
    
    for (const product of cart){

       total = total + product.price;
       totalShipping = totalShipping + product.price;
        
    }

    const tax = total*7/100;
    const grandTotal = total + totalShipping + tax;

    

    return (
        <div className='cart'>

            <h2>Order Summary</h2>
            <div>
                <p>Select Items: {cart.length} </p>
                <p>Total Price: ${total} </p>
                <p>Total Shipping Charge: ${totalShipping} </p>
                <p>Tax: ${tax}</p>
            </div>
            <h3>Grand Total: {grandTotal} </h3>
            
        </div>
    );
};

export default Cart;