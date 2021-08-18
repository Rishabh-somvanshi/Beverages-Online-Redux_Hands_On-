import React from 'react';
import './style.css';

export default function Index() {
  return (
    
    <div class="form-group">
      <div class="loginHeader">
        <p class="text-light">Login Form</p>
      </div>
      <div class="set">
        <p>Username:</p>
        <input
          class="form-control"
          id="username"
          placeholder="Enter username"
        />
      </div>
      <div class="set">
        <p>Password:</p>
        <input
          class="form-control"
          id="password"
          placeholder="Enter password"
        />
      </div>
      <div>""</div>
      <div class="set"><button class="btn btn-primary">Submit</button></div>
      
    </div>
  );
}
