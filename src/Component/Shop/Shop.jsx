import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
                        handleToAddCart={handleToAddCart}   
                    ></Product>)
                }

            </div>

            <div className='Order'>

                <Cart cart={cart}></Cart>
                
            </div>
        </div>
    );
};

export default Shop;