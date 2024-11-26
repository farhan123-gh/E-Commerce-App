import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/productReducer';
import cartReducer from '../redux/reducers/cartReducer';
import wishlistReducer from '../redux/reducers/wishlistReducer';

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export default store;

