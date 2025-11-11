import React, { StrictMode } from 'react';
import './login.css';

const Login = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[1000px] bg-white p-10 border border-gray-200 rounded-lg shadow">
        <div className="mb-5">
          <label className="block mb-2 text-gray-800 font-medium">Email</label>
          <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-300" />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-gray-800 font-medium">Password</label>
          <div className="relative flex items-center">
            <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded pr-20 focus:outline-none focus:ring-2 focus:ring-gray-300" />
            <button type="button" className="absolute right-1 top-1 bottom-1 bg-black text-white px-4 rounded-r text-sm font-bold">SHOW</button>
          </div>
        </div>
        <a href="#" className="block text-center text-gray-700 text-sm mt-2 mb-5">
          Forgot your password?
        </a>
        <button className="w-full py-3 bg-red-500 hover:bg-red-600 text-white rounded font-bold mb-5">SIGN IN</button>
        <div className="text-center text-gray-800 text-sm">
          No account? <a href="#" className="font-semibold hover:underline">Create one here</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
