import React ,{useState}from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './Checkout';
import Navbar from './Navbar';
import Sidebar from './SideBar';
const stripePromise = loadStripe('pk_test_51PhQbqK8llOyKTxpvLKQ64weWcF0crOyFSl2NDxX2lZbsH3Gz6Ss1DhEvHWYzp6wZR7hT6DaWyc8QsfTiPcxB17y00JH6iSdEd');
const BasePlan = () => {

  const [showCheckout, setShowCheckout] = useState(false);
  // const planstatus='Base';
  const priceId='price_1PhQviK8llOyKTxpo3HoGu00'
  return (
    <>
    <Navbar/>
    <div className='page'>
      <div><Sidebar/></div>
    <div className="plan">
    
      <h2>Base Plan</h2>
      <p>$9.99 / month</p>
      <ul>
        <li>100 certificates per month</li>
        <li>Standard templates</li>
        <li>Email and chat support</li>
      </ul>
      <button onClick={() => setShowCheckout(true)}>Subscribe</button>
    </div>
    
    

    {showCheckout && (
      <Elements stripe={stripePromise}>
        <CheckoutForm priceId={priceId} planstatus="Base"/>
      </Elements>
    )}
    </div>
    
    </>
  );
};

export default BasePlan;
