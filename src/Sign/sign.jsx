import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sign.css';

function Sign() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h4 className="mb-4">Sign-Up</h4>
        <form>
          <div className="mb-3 text-start">
            <label className="form-label">Email:</label>
            <input 
              type="email" 
              className="form-control" 
              placeholder="Enter your email" 
            />
          </div>

          <div className="mb-3 text-start">
            <label className="form-label">Password:</label>
            <input 
              type="password" 
              className="form-control" 
              placeholder="Enter your password" 
            />
          </div>

          <div className="mb-4 text-start">
            <label className="form-label">Confirm Password:</label>
            <input 
              type="password" 
              className="form-control" 
              placeholder="Confirm your password" 
            />
          </div>

          <button type="submit" className="btn btn-primary w-50">Sign-Up</button>
        </form>
      </div>
    </div>
  );
}

export default Sign;
