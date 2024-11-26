import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Update Local Storage whenever cartItems change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id)); // Dispatch action to remove item
  };

  const handleQuantityChange = (id, delta) => {
    dispatch({
      type: 'UPDATE_CART_QUANTITY',
      payload: { id, delta },
    });
  };

  return (
    <div className="p-6 container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded shadow-md flex flex-col items-center bg-cyan-100"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-32 h-32 object-cover mb-2"
              />
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-blue-500">${item.price}</p>
              <div className="flex items-center space-x-2 mt-2">
                <button
                  onClick={() => handleQuantityChange(item.id, -1)}
                  className="bg-blue-300 px-2 py-1 rounded transition duration-300 hover:bg-blue-400 hover:text-black"
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, 1)}
                  className="bg-blue-300 px-2 py-1 rounded transition duration-300 hover:bg-blue-400 hover:text-black"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className="bg-red-500 text-white px-4 py-2 mt-2 rounded transition duration-300 hover:bg-red-700 hover:text-white"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
