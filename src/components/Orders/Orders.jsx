import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart=useLoaderData();
    const [cart, setCart]=useState(savedCart);


    const handleRemoveFromCart=(id)=>{
      const remaining=cart.filter(product=>product.id !== id);
      setCart(remaining);
      removeFromDb(id);
      
   
   
    }
     //   event handler for "Clear Cart button"
    const handClearCart=()=>{
        setCart([]);
        deleteShoppingCart();

    }
    return (
        <div className='shop-container'>
           <div className='review-container'>
            {
                cart.map(product=><ReviewItem key={product.id } product={product}
                handleRemoveFromCart={handleRemoveFromCart}
                ></ReviewItem>)
            }
           </div>
           <div className='cart-container'>
            <Cart cart={cart}
            handClearCart={handClearCart}
            >
              
              <Link to='/checkout'>
                   <button className='btn-procced'>Proceed CheckOut</button>
              </Link>

            </Cart>
           </div>
        </div>
    );
};

export default Orders;