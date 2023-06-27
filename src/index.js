import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import App from "./App.js"

   function Home() {
     return <h2>Home</h2>;
   }

   function About() {
     return <h2>About</h2>;
   }

   function Root() {
     return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
     );
   }

   ReactDOM.render(<Root />, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
