import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './Checkout';
import Navbar from './Navbar';
import Sidebar from './SideBar';


const stripePromise = loadStripe('pk_test_51PhQbqK8llOyKTxpvLKQ64weWcF0crOyFSl2NDxX2lZbsH3Gz6Ss1DhEvHWYzp6wZR7hT6DaWyc8QsfTiPcxB17y00JH6iSdEd');
const priceId='price_1PhQwRK8llOyKTxpZeFsf4za'
const ProPlan = () => {
  const [showCheckout, setShowCheckout] = useState(false);
  // const planStatus = 'Pro';

  return (
    <>
    <Navbar/>
    <div className='page'>
      <div><Sidebar/></div>
    <div className="plan">
        <p>$19.99 / month</p>
      <ul>
        <li>Unlimited certificates</li>
        
        <li>Priority support</li>
      </ul>
      <button onClick={() => setShowCheckout(true)}>Subscribe</button>
      
      </div>
      {showCheckout && (
        <Elements stripe={stripePromise}>
          <CheckoutForm priceId={priceId} planStatus="pro"/>
        </Elements>
      )}
      
      
      </div>
      
    </>
  );
};

export default ProPlan;
