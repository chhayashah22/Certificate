import React, { useState } from 'react';
import { 
  CardNumberElement, 
  CardExpiryElement, 
  CardCvcElement, 
  useStripe, 
  useElements 
} from '@stripe/react-stripe-js';
import axios from 'axios';
import './Checkout.css'; // Import your CSS file

import Cookies from 'universal-cookie';

const CheckoutForm = ({ priceId,planstatus }) => {
  const cookie=new Cookies();
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState('');
  const [paymentMethodType, setPaymentMethodType] = useState('card'); // Default to 'card'
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  

  const userId = localStorage.getItem('userId');
console.log(userId);


  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    let paymentMethodId = '';

    if (paymentMethodType === 'card') {
      const cardElement = elements.getElement(CardNumberElement);
      const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (stripeError) {
        setError(stripeError.message);
        setLoading(false);
        return;
      }
      paymentMethodId = paymentMethod.id;
    } else {
      setError('Unsupported payment method type');
      setLoading(false);
      return;
    }

    try {
      // Step 1: Create a customer
      const customerResponse = await axios.post('/api/create-customer', {
        email: email,
      });

      const { customerId } = customerResponse.data;
      console.log(customerResponse.data);

      // Step 2: Create a subscription
      const subscriptionResponse = await axios.post('/api/create-subscription', {
        customerId: customerId,
        priceId: priceId,
        

        paymentMethodId
      
      });

      const { clientSecret } = subscriptionResponse.data;

      // Handle card payments
      const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethodId,
      });


      if (confirmError) {
        setError(confirmError.message);
      } else if (paymentIntent.status === 'succeeded') {
        await axios.post('/api/update-subscription', {
          userId: userId, // Add the actual user ID
          subscriptionStatus: 'Active',
          planstatus:planstatus, // Update the plan status
          endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
        });
        setSuccess(true);
       
      } else {
        setError('Payment failed. Please try again.');
      }

    } catch (error) {
      console.log(error)
      setError('An error occurred. Please try again.');

    }

    setLoading(false);
  };

  return (
    <div className="checkout-form">
      {success ? (
        <div className="success-message">Payment Successful!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="payment-method">Payment Method:</label>
            <select
              id="payment-method"
              value={paymentMethodType}
              onChange={(e) => setPaymentMethodType(e.target.value)}
              required
            >
              <option value="card">Card</option>
              
            </select>
          </div>
         
            <div className="card-element-container">
              <div className="card-field">
                <label htmlFor="card-number">Card Number:</label>
                <CardNumberElement id="card-number" className="card-element" />
              </div>
              <div className="card-field">
                <label htmlFor="card-expiry">Expiration Date:</label>
                <CardExpiryElement id="card-expiry" className="card-element" />
              </div>
              <div className="card-field">
                <label htmlFor="card-cvc">CVC:</label>
                <CardCvcElement id="card-cvc" className="card-element" />
              </div>
            </div>
          
          <button type="submit" disabled={!stripe || loading}>
            {loading ? 'Processing...' : 'Pay'}
          </button>
          {error && <div className="error-message">{error}</div>}
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;
