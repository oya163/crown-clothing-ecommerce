import { CartActionTypes } from './cart.types.js';

const INITTIAL_STATE = {
  hidden: true
};

const cartReducer = (state = INITTIAL_STATE, action) => {
  switch (action.type){
    case CartActionTypes.TOGGLE_CART_HIDDEN:
    return {
      ...state,
      hidden: !state.hidden
    }
    default:
    return state;
  }
};

export default cartReducer;