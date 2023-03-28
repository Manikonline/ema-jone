import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props.product)
    const addTOProductCart=props.addTOProductCart
    const {img,name,price,seller,ratings}=props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='Product-details'>
              <h6 className='product-name' >{name}</h6>
              <p>Price:${price}</p>
              <p>Manufacturure:{seller}</p>
              <p>Rating:{ratings}Stars</p>
            </div>
            <button onClick={()=>addTOProductCart(props.product)} className='btn-cart'>
                Add To Cart
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;