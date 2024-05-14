import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const handleLogin = () => {
  };

  return (
    <div className="login-page"> 
    <div className="login-container">
      <h2 >Log in to your account</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">LOGIN</button>
      </form>

      <p className="signup-text">Don't have an account? <Link to="/signup" className="signup-link" >SIGN UP </Link></p>
    </div>
    </div>
  );
}

export default LoginPage;
