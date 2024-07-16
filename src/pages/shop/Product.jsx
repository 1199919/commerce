import React from 'react';
import {ShopContext} from '../../context/shop-context';
import { useContext } from 'react';

export const Product = (props) => {
  const {id,productName,productImage,price} = props.data;

  const {addToCart,cartItems} = useContext(ShopContext);
  
  const cartItemAmount = cartItems[id];
  return (
    <div className='product'>
      <img src={productImage} alt=''/>

      <div className='description'>
        <p>
          <b>{productName}</b>
        </p>

        <p>
          ${price}
        </p>
      </div>
      <button className='addToCartBttn' onClick={()=>addToCart(id)}>
        Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
    </div>
  )
}
