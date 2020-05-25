import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require("../src/dpb.png")} className="dpb" alt="logo" />
        <p style={{fontSize: '25px'}}>
          ওয়েবসাইটের কাজ চলছে...
        </p>
        <p style={{fontSize: '30px'}}>
          প্লাজমা ডোনার এখনই পেতে ফেসবুক গ্রুপে জয়েন করুন
        </p>  
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
