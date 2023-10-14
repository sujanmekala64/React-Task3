import './App.css';
import Headd from "./components/Headd_W";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Header,Footer} from "./components/Header";
import Navi from "./components/Nav_W"
import {HashRouter, Routes, Route} from "react-router-dom";
import {Home, About, ContactUs, Projects} from "./components/main";
import F1 from "./components/F1"
import Nav from "./components/navg"
import C1 from "./components/prop"
import C2 from "./components/c2"
import C4 from "./components/c4"
import Foote from "./components/Foot_W"
// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
function App() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (birthdate) {
      const today = new Date();
      const birthDate = new Date(birthdate);
      const ageDiff = today - birthDate;
      const ageDate = new Date(ageDiff);
      const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
      setAge(calculatedAge);
    } else {
      alert('Please enter your date of birth');
    }
  };
  return (
      

    // TASK 5
   <div>
      <center>
        <h1>Age Calculator</h1>
        <h3>Enter your date of birth</h3>
        <input
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        <br />
        <button
          style={{ backgroundColor: 'blue', color: 'white' }}
          onClick={calculateAge}
        >
          Calculate Age
        </button>
        {age !== null && (
          <p>
            <strong>Your are {age} years old.</strong>
          </p>
        )}
      </center>
    </div>

    
  )
}
export default App;
