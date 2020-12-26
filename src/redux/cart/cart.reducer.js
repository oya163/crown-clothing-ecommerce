import { CartActionTypes } from './cart.types.js';
import { addItemToCart } from './cart.utils';

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
    default:
      return state;
  }
};

export default cartReducer;
