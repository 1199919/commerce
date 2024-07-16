import React from 'react';
import { useNavigate} from 'react-router-dom';
import { PRODUCTS } from '../../products';
import {ShopContext} from '../../context/shop-context';
import { useContext } from 'react';
import { CartItem } from './CartItem';

export const Cart = () => {
  const {cartItems,getTotalCartAmount} = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product)=>{
          if (cartItems[product.id] !== 0) {
            return (
              <CartItem data={product}/>
            )
          }
        })}
      </div>
        {totalAmount > 0 ? (
          <div className='checkout'>
            <p>Subtotal : ${totalAmount}</p>
            <button onClick={()=>navigate("/")}>Continue Shopping</button>
            <button>CheckOut</button>
          </div>
        ) : (
          <h1 style={{marginTop:"200px",color:"green",fontSize:"80px"}}>"Your Cart is Empty!"</h1>
        )};
    </div>
  );
};


