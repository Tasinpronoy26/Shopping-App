import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {

    const [cart, setCart] = useState([]);

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        
        
        const shopCart = getShoppingCart();
        const savedCart = [];      
        // console.log(shopCart);
        for (const id in shopCart) {
            const addCart = products.find(product => product.id === id)
            // console.log(addCart);
            if (addCart) {
                const quantity = shopCart[id];
                addCart.quantity = quantity
                savedCart.push(addCart);
            }

        }
        setCart(savedCart);

    }, [products])

    const handleToAddCart = (product) => {

        const newCart = [...cart, product];
        setCart(newCart)
        addToDb(product.id);


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