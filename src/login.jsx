import React, { StrictMode } from 'react';
import './login.css';
import { createRoot } from 'react-dom/client';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="input-group">
          <label>Email</label>
          <input type="email" />
        </div>
        <div className="input-group">
          <label>Mật khẩu</label>
          <div className="password-wrapper">
            <input type="password" />
            <button className="show-btn">Hiện</button>
          </div>
        </div>
        <a href="#" className="forgot-password">
          Quên mật khẩu?
        </a>
        <button className="signin-btn">Đăng nhập</button>
        <div className="signup-link">
          Chưa có tài khoản? <a href="#">Tạo tài khoản ở đây</a>
        </div>
      </div>
    </div>
  );
};

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Login />
    </StrictMode>
);

export default Login;
