import { CartActionTypes } from './cart.types.js';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITTIAL_STATE = {
  hidden: true,
  cartItems: []
};

// For case CartActionTypes.ADD_ITEM:
// We want to increase number of cartItems
// that is passed as payload

const cartReducer = (state = INITTIAL_STATE, action) => {
  switch (action.type){
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case CartActionTypes.CLEAR_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id)
      };
    default:
      return state;
  }
};

export default cartReducer;
