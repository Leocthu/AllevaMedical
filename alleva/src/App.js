import React from 'react';
import './App.css';
import LoginPage from './LoginPage';
import { auth } from './firebase';

function App() {
  const handleSignUp = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User account created successfully
        const user = userCredential.user;
        console.log('Sign up success:', user);
      })
      .catch((error) => {
        // Handle sign-up errors
        console.log('Sign up error:', error);
      });
  };

  const handleSignIn = (email, password) => {
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
    <div className="App">
      <header className="App-header">
        <LoginPage handleSignUp={handleSignUp} handleSignIn={handleSignIn} />
      </header>
    </div>
  );
}

export default App;
