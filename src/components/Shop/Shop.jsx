import React, { useEffect, useReducer, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

import './Shop.css'
import { Link } from 'react-router-dom';


const Shop = () => {
     
    const [products , setProducts]=useState([]);
    const [cart , setCart]=useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    useEffect(()=>{
        const storedCart=getShoppingCart();
        const savedCart=[];
        // Step 1: get id of the addedProduct
        for(const id in storedCart){
        // step 2: get  product from products state by using id
        const addedProduct=products.find(product=>product.id===id);
        // step 3: get quantity of the product
        if(addedProduct){
            const quantity=storedCart[id];
        addedProduct.quantity=quantity;
        // step 4: add the added product to the saved cart
        savedCart.push(addedProduct);
        }
        }
        setCart(savedCart)
    },[products])
    const addTOProductCart=(product)=>{
        const newCart=[...cart ,product]
        setCart(newCart);
        addToDb(product.id)
        
    }

    const handClearCart=()=>{
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
             {
                products.map(product=><Product key={product.id} product={product} addTOProductCart={addTOProductCart}></Product>)
             }
            </div>



            <div className='cart-container'>
             <Cart cart={cart}
            handClearCart={handClearCart}
             >
                 <Link to='/orders'>
                   <button className='btn-procced'>Review Order</button>
              </Link>
             </Cart>
            </div>

            
        </div>
    );
};

export default Shop;