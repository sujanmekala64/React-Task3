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
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users); // Assuming the response is an object with a "users" array
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const tableStyle = {
    backgroundColor: 'black',
    color: 'white',
  };
  return (
      

    // TASK 4
    <div>
    <center>
      <h1 >Dummy data</h1>
    </center>
    <table style={tableStyle}>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Profile Pic</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Username</th>
          <th>Domain</th>
          <th>IP</th>
          <th>University</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.id}>
            <td>{index + 1}</td>
            <td>
              <img src={user.profilePic} alt="Profile" width="50" />
            </td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.gender}</td>
            <td>{user.email}</td>
            <td>{user.username}</td>
            <td>{user.domain}</td>
            <td>{user.ip}</td>
            <td>{user.university}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

    
  )
}
export default App;
