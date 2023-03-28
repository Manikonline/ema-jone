import React from 'react';
import Product from '../Product/Product';
import './Cart.css'
const Cart = ({cart}) => {
    // const cart=props.cart
    // const {cart}=props
    console.log(cart)
    let total=0;
    let totalShipping=0;
    for(const product of cart){
        total=total+product.price;
        totalShipping=totalShipping+product.shipping;

    }
    const tax=total*10/100;
    const grandTotal=total+totalShipping+tax;
  

    return (
        <div className='cart'>
             <h3>order summery</h3>
            <p>Selected items:{cart.length}</p>
            <p>Total Price:${total}</p>
            <p>Total Shipping:${totalShipping}</p>
            <p>Tax:${tax.toFixed(2)}</p>
            <p>Grand Total:${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;