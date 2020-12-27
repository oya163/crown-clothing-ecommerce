import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component.jsx';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

import './cart-dropdown.styles.scss';

// Even if we don't pass mapDispatchToProps through connect()(),
// it is pass inbuilt, so we can simply access dispatch as shown below
const CartDropdown = ({ cartItems, history, dispatch}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.length ?
        (cartItems.map(cartItems => (
          <CartItem key={cartItems.id} item={cartItems}/>
        ))):
        (
          <span className='empty-message'>Your cart is empty</span>
        )
      }
    </div>
    <CustomButton onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden())
      }}>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector ({
  cartItems: selectCartItems
});

// withRouter is just taking component as arguments
// Order in which we wrap them matters
// We are passing connected components into withRouter higher component
export default withRouter(connect(mapStateToProps)(CartDropdown));
