import React, { useState } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logging in with: ${email}`);
    // TODO: Add real login logic
  };

  return (
    <AnimatedPage>
      <div className="login-page">
        <form onSubmit={handleLogin} className="login-form">
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </AnimatedPage>
  );
}

export default LoginPage;
