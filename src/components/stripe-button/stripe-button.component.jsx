import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutBUtton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51I5JahLap9jZpLfWFCKDHAlbUSS4EMZcsxi9dozJAjtPtqnkb7TZ08oHFHmlm2DXFLm0f9OD51pmWVHKQNlE8kp800aqP1OjoV';

  const onToken = token => {
    console.log(token);
    alert('Payment successful');
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='Crown Clothing LLC'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={ priceForStripe }
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
      />
  );
};

export default StripeCheckoutBUtton;
