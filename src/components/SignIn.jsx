import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { reqUrl } from './Constant';
import { useNavigate, Link } from 'react-router-dom';

function SignIn({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false); // New state to track login success
  const navigate = useNavigate();
  const cookies = new Cookies();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${reqUrl}/Sign`,
        {
          email,
          password,
        }
      );

      setEmail('');
      setPassword('');

      if (response.status === 200) {
        // Optionally set user data
        const user = response.data.user;
        localStorage.setItem('user', user.name);
        localStorage.setItem('userId', user.id); // Optional

        setMessage('User-login success');
        setLoginSuccess(true); // Update loginSuccess state

        cookies.set('token', response.data.token);
        console.log(response.data.user.name);
      }
    } catch (error) {
      setLoginSuccess(false); // Reset loginSuccess on error
      if (error.response) {
        if (error.response.status === 400) setMessage('Password Incorrect');
        if (error.response.status === 405) setMessage('User Not verified');
        if (error.response.status === 404) setMessage('User with this email not registered');
      } else {
        setMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <>
      <div className="container-fluid">
        <form className="form" method="post" onSubmit={handleSubmit}>
          <h2>Welcome to Sign In</h2>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="Enter your Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="Enter your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className='Button' type="submit">Sign In</button>
          <br />
          <a href="Forgotpassword" target="_blank" rel="noopener noreferrer">Forgot Password</a>
          <br />
          
          {message && <p>{message}</p>}
          {loginSuccess && <Link to="/admin"><p>Go to dashboard</p></Link>}
          {/* <button>Continue with Google</button> */}
        </form>
      </div>
    </>
  );
}

export default SignIn;
