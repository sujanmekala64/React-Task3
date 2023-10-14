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
import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const wordCount = text.split(/\s+/).filter(Boolean).length;
  return (
   

    // TASK 1

    <div>
      <center>
        <h1>Responsive Paragraph Word Counter</h1>
        <textarea
          value={text}
          onChange={handleTextChange}
          rows={4}  // Adjust the number of rows
          cols={50} // Adjust the number of columns
        ></textarea>
        <p style={{ textAlign: 'center' }}>
          Word Count: {wordCount}
        </p>
      </center>
    </div>
  )
}
export default App;
