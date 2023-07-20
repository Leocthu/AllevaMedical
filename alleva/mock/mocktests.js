// Import the functions you need from the SDKs you need
import { app } from './src/firebase.js'; // Import the app object from your firebase.js file

// Create a mock implementation for app.auth()
jest.mock('./src/firebase.js', () => ({
  app: {
    auth: jest.fn(() => ({
      // Mock the methods you use from app.auth() here
      // For example, if you use 'createUserWithEmailAndPassword', you can mock it like this:
      createUserWithEmailAndPassword: jest.fn().mockResolvedValue({ user: { uid: 'mockedUserId' } }),
      // Add other auth methods used in your code here, if necessary
    })),
  },
}));
