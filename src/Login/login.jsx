import React from 'react';
import './login.css'; // Keep your custom styles

function Login() {
  return (
    <div className="login-container">
      <div className="login-box shadow p-4">
        <h4 className="mb-4 text-center">Login</h4>
        <form>
          <div className="mb-3 text-start">
            <label className="form-label">Email:</label>
            <input 
              type="email" 
              className="form-control" 
              placeholder="Enter your email" 
            />
          </div>

          <div className="mb-4 text-start">
            <label className="form-label">Password:</label>
            <input 
              type="password" 
              className="form-control" 
              placeholder="Enter your password" 
            />
          </div>

          <button type="submit" className="btn btn-primary w-50">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
