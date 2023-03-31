import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [cart, setCart] = useState([]);

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleToAddCart = (product) => {
         
        const newCart = [...cart, product];
        setCart(newCart)
        
    }

    return (
        <div className='shop'>
            <div className='product-container'>

                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleToAddCart = {handleToAddCart}
                    ></Product>)
                }

            </div>
            
            <div className='Order'>
                <h3>Order Summary</h3>
                <p>Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;