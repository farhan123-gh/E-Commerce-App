import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../actions/wishlistActions';

// Initialize state from Local Storage
const initialState = {
  items: JSON.parse(localStorage.getItem('wishlistItems')) || [],
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST: {
      const updatedItems = [...state.items, action.payload];
      localStorage.setItem('wishlistItems', JSON.stringify(updatedItems)); // Update Local Storage
      return { ...state, items: updatedItems };
    }
    case REMOVE_FROM_WISHLIST: {
      const updatedItems = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem('wishlistItems', JSON.stringify(updatedItems)); // Update Local Storage
      return { ...state, items: updatedItems };
    }
    default:
      return state;
  }
};

export default wishlistReducer;
