import React, { StrictMode } from 'react';
import './login.css';

const Login = () => {
  return (
    
    <div className="login-container">
      <div className="login-box">
        <div className="input-group">
          <label>Email</label>
          <input type="email" />
        </div>
        <div className="input-group">
          <label>Password</label>
          <div className="password-wrapper">
            <input type="password" />
            <button className="show-btn">SHOW</button>
          </div>
        </div>
        <a href="#" className="forgot-password">
          Forgot your password?
        </a>
        <button className="signin-btn">SIGN IN</button>
        <div className="signup-link">
          No account? <a href="#">Create one here</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
