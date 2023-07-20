import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, database } from './firebase';
import allevamedicallogo from './allevamedicallogo.png';
import './UserSignUp.css'
import { ref, set } from "firebase/database";

function writeUserData(userId, name, company, email, mobile){
  const reference = ref(database, 'users/' + userId);

  set(reference,{
    name: name,
    username: email,
    company: company,
    mobile: mobile
  })
}

function UserSignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState(''); // Add state for first name
  const [company, setCompany] = useState(''); // Add state for company
  const [mobile, setMobile] = useState(''); // Add state for mobile phone number

  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User successfully signed up
        const user = userCredential.user;
        console.log('Sign up success:', user);

        const userData = {
          firstName: firstName,
          company: company,
          email: email,
          mobile: mobile,
        };

        writeUserData(user.uid, userData.firstName, userData.company, userData.email, userData.mobile);

        // Redirect to the home page (you can change '/home' to the desired path)
        navigate('/home');
      })
      .catch((error) => {
        // Handle sign up errors
        console.log('Sign up error:', error);
      });
  };

  const handleBackToSignIn = () => {
    // Redirect to the sign-in page (you can change '/signin' to the desired path)
    navigate('/');
  };

  return (
    <div className="SignUp-container">
        <header className = "SignUp-header">
          <img src={allevamedicallogo} alt="Logo" className="logo-image" />
          
        </header>
        <div className="SignUp-box">
          <h2>Sign Up</h2>
          <input
            type="text"
            placeholder="First Name and Last Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username (email address)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Mobile Phone Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        
        <button className ="signupbtn"onClick={handleSignUp}>Sign Up</button>
          
            
        <button className="back-to-signin-btn" onClick={handleBackToSignIn}>Back to Sign In</button>
          
        </div>
      </div>
  );
}

export default UserSignUp;
