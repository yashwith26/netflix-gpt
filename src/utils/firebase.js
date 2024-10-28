// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgaFeJvpXb3PNJZGjlJI4MhVWsvb5dUBA",
  authDomain: "netflixgpt-cb76c.firebaseapp.com",
  projectId: "netflixgpt-cb76c",
  storageBucket: "netflixgpt-cb76c.appspot.com",
  messagingSenderId: "233530911749",
  appId: "1:233530911749:web:2c508866bfbc1fb721806c",
  measurementId: "G-657M45VKKT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
