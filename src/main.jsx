import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyANoPo2kBLM74J4b9xjFr4jxtunuKg7RPE",
  authDomain: "nave-de-fibra-murphy.firebaseapp.com",
  projectId: "nave-de-fibra-murphy",
  storageBucket: "nave-de-fibra-murphy.appspot.com",
  messagingSenderId: "943221618740",
  appId: "1:943221618740:web:f59b61ed629a4f3701b261"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)











