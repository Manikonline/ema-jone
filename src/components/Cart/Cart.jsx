import React from 'react';
import Product from '../Product/Product';
import './Cart.css'
const Cart = ({cart}) => {
    // const cart=props.cart
    // const {cart}=props
    console.log(cart)
    let total=0;
    let totalShipping=0;
    let quantity=0;
    for(const product of cart){
        // product.quantity=product.quantity||1;
        if(product.quantity===0){
            product.quantity=1;
        }
        total=total+product.price*product.quantity;
        totalShipping=totalShipping+product.shipping;
        quantity=quantity+product.quantity;

    }
    const tax=total*7/100;
    const grandTotal=total+totalShipping+tax;
  

    return (
        <div className='cart'>
             <h3>order summery</h3>
            <p>Selected items:{quantity}</p>
            <p>Total Price:${total}</p>
            <p>Total Shipping:${totalShipping}</p>
            <p>Tax:${tax.toFixed(2)}</p>
            <p>Grand Total:${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;