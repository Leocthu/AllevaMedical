import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import allevamedicallogo from './allevamedicallogo.png';
import { auth } from './firebase';



function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User successfully logged in
        const user = userCredential.user;
        console.log('Sign in success:', user);

        // Redirect to the home page
        navigate('/home');
      })
      .catch((error) => {
        // Handle login errors
        console.log('Sign in error:', error);

        setErrorMessage('Invalid Username or Password')
      });
  };

  const handleSignUp = (event) => {
    navigate('/UserSignUp');
  };

  return (
    
      <div className="login-container">
        <header className = "login-header">
          <img src={allevamedicallogo} alt="Logo" className="logo-image" />
          
        </header>
        <div className="login-box">
          <h2>Sign In</h2>
          
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
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        
          <button className ="signin-btn" onClick={handleSignIn}>Sign In</button>
          <div className="or-container">
            <div className="line"></div>
              <h5>OR</h5>
            <div className="line"></div>
          </div>
          <div className = "signup-cont">
            
            <h4>New to Alleva?</h4>
            <button className ="signup-btn"onClick={handleSignUp}>Sign Up</button>
          </div>
            
       
          
        </div>
      </div>
    
    
  );
}

export default LoginPage;
