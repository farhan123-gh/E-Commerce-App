import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../redux/actions/wishlistActions'; // Import the action

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  // Save wishlist to Local Storage whenever it changes
  useEffect(() => {
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const handleRemoveFromWishlist = (id) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <div className="p-6 container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Your Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {wishlistItems.map((item) => (
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
              <button
                onClick={() => handleRemoveFromWishlist(item.id)}
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

export default Wishlist;
