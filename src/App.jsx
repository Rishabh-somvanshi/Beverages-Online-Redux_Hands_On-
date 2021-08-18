import React from 'react';
import './style.css';
import Login from './Login';
import NavBar from './Navbar';

export default function App() {
  return (
    <div>
      <p class="pageHeader">Beverages Online</p>
      <div>
        <NavBar />
      </div>
      <div>
        <Login />
      </div>
    </div>
  );
}
