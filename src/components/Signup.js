import React, { useState } from 'react';
import './Form.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup:', { email, password, confirmPassword });
  };

  return (
    <center>
    <div className="form-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="form-button">Signup</button>
      </form>
      <div className="alternative-login">
        <p>or signup with</p>
        <button className="facebook-button">Facebook</button>
        <button className="google-button">Google</button>
      </div>
      <p className="switch-form">
        Already have an account? <a href="/">Login</a>
      </p>
    </div>
    </center>
  );
}

export default Signup;
