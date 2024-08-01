// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDxcRbiIvzscFRzN85_rEQ1LQ0VnjAaLfs",
    authDomain: "ishenk-portfolio.firebaseapp.com",
    projectId: "ishenk-portfolio",
    storageBucket: "ishenk-portfolio.appspot.com",
    messagingSenderId: "731600646712",
    appId: "1:731600646712:web:6f469195844450eec86ccd",
    measurementId: "G-QGV1D3B9N3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);