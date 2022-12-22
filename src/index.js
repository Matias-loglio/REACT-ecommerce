import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider} from 'react-router-dom';
import { CartContextProvider } from './context/cartContext';
import reportWebVitals from './reportWebVitals';
import {router} from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJFLfLlFuPbrjRe0RBu80pfGh0HYUV8Go",
  authDomain: "ecommerce-books-ee008.firebaseapp.com",
  projectId: "ecommerce-books-ee008",
  storageBucket: "ecommerce-books-ee008.appspot.com",
  messagingSenderId: "1010364257243",
  appId: "1:1010364257243:web:e52b988c870ad07c2a4dfe"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router}/>
    </CartContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
