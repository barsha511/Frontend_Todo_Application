import React from 'react';
import './Login.css'; // Import the CSS file
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
//import { Dispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';
//import Home from "./component/home/Home";
import axios from "axios";

const Login = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
});
const navigate = useNavigate();
const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('http://localhost:1000/api/v1/login', inputs);

    if (response.data.message === 'please register first' || response.data.message === 'Invalid Password') {
        alert(response.data.message);
        setInputs({
            email: response.data.message === 'please register first' ? '' : inputs.email,
            password: ''
        });
    } else {
      alert('Login successful');
      sessionStorage.setItem("id", response.data.userDoc.userId);
        // console.log('User Id:', response.data.userDoc.userId); // Log the user ID
        // Store user ID in localStorage or state if needed
        // localStorage.setItem('userId', response.data.userId);
        dispatch(authActions.login());
        navigate('/home'); 
    }
}  catch (error) {
      console.error('There was an error!', error);
  }
};
  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    onChange={handleChange}
                    value={inputs.email}
                    required
                />
        <label htmlFor="password">Password:</label>
        <input type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          onChange={handleChange}
          value={inputs.password}
          required
        />

        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      {/* <p>Forgot your password? <a href="/forgot-password">Reset Password</a></p> */}
    </div>
  );
}

export default Login;
