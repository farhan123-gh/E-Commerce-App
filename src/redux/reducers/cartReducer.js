const initialCart = JSON.parse(localStorage.getItem('cartItems')) || [];

const cartReducer = (state = { items: initialCart }, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      // Check if product already exists in the cart
      const existingProduct = state.items.find(
        (item) => item.id === action.payload.id
      );

      let updatedItems;
      if (existingProduct) {
        // If product exists, update its quantity
        updatedItems = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If product does not exist, add it to the cart
        updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
      }

      // Update Local Storage
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));

      return {
        ...state,
        items: updatedItems,
      };
    }

    case 'REMOVE_FROM_CART': {
      // Remove the product from the cart
      const updatedItems = state.items.filter(
        (item) => item.id !== action.payload
      );

      // Update Local Storage
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));

      return {
        ...state,
        items: updatedItems,
      };
    }

    case 'CLEAR_CART': {
      // Clear the entire cart
      localStorage.removeItem('cartItems');
      return {
        ...state,
        items: [],
      };
    }

    case 'UPDATE_CART_QUANTITY': {
      const { id, delta } = action.payload;

      const updatedItems = state.items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + delta } : item
      );

      // Update Local Storage
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));

      return {
        ...state,
        items: updatedItems,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
