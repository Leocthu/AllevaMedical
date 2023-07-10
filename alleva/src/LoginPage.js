import React, { useState } from 'react';
import './LoginPage.css';
import allevamedicallogo from './allevamedicallogo.png';
import { auth } from './firebase';



function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User successfully logged in
        const user = userCredential.user;
        console.log('Sign in success:', user);
      })
      .catch((error) => {
        // Handle login errors
        console.log('Sign in error:', error);
      });
  };
  return (
    <div className="login-container">
      <header className = "login-header">
        <img src={allevamedicallogo} alt="Logo" className="logo-image" />
        
      </header>
      <div className="login-box">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignIn}>Sign In</button>
  
      </div>
    </div>
  );
}

export default LoginPage;
