import React ,{useState}from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './Checkout';
import Navbar from './Navbar';
import Sidebar from './SideBar';
const stripePromise = loadStripe('pk_test_51PhQbqK8llOyKTxpvLKQ64weWcF0crOyFSl2NDxX2lZbsH3Gz6Ss1DhEvHWYzp6wZR7hT6DaWyc8QsfTiPcxB17y00JH6iSdEd');

const FreePlan = () => {
  const priceId='price_1PhQwgK8llOyKTxpvJBZasfM'
  const [showCheckout, setShowCheckout] = useState(false);
  // const planstatus='Free';
  return (


    <> 
    <Navbar/>
    <div className='page'>
      <div><Sidebar/></div>
    <div className="plan">
       
      <h2>Free Plan</h2>
      <p>$0 / month</p>
      <ul>
        <li>10 certificates per month</li>
        <li>Basic templates</li>
        <li>Email support</li>
      </ul>
      <button onClick={() => setShowCheckout(true)}>Subscribe</button>
    </div>
    
      {showCheckout && (
        <Elements stripe={stripePromise}>
          <CheckoutForm priceId={priceId} planstatus="Free"/>
        </Elements>
      )}
      </div>
    </>
    
  );
};

export default FreePlan;
