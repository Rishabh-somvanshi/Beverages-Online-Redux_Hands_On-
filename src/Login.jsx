import React from 'react';
import './style.css';

export default function Login() {
  return (
    <div className="form-group">
      <div className="loginHeader">
        <p className="text-light">Login Form</p>
      </div>
      <div className="set">
        <p>Username:</p>
        <input
          className="form-control"
          id="username"
          placeholder="Enter username"
        />
      </div>
      <div className="set">
        <p>Password:</p>
        <input
          className="form-control"
          id="password"
          placeholder="Enter password"
        />
      </div>
      <div>""</div>
      <div className="set">
        <button className="btn btn-primary">Submit</button>
      </div>
    </div>
  );
}
