import React, { useState } from 'react';
import './Form.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login:', { email, password });
  };

  return (
    <center>
    <div className="form-container">
      <h2>Login</h2>
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
        <button type="submit" className="form-button">Login</button>
      </form>
      <div className="alternative-login">
        <p>or login with</p>
        <button className="facebook-button">Facebook</button>
        <button className="google-button">Google</button>
      </div>
      <p className="switch-form">
        Don’t have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
    </center>
  );
}

export default Login;
