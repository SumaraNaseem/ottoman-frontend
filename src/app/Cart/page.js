"use client"
import { useSelector } from 'react-redux';

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.map(item => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
   );
};

export default CartPage; 