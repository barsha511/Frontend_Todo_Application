import React from 'react';
import './Login.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import axios from "axios";
const Login = () => {
//   const [inputs, setInputs] = useState({
//     email: "",
//     username: "",
//     password: ""
// });

// const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputs({ ...inputs, [name]: value });
//   };
  
  return (
    <div className="container">
      <h1>Login</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" placeholder="Enter your email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" />

        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      {/* <p>Forgot your password? <a href="/forgot-password">Reset Password</a></p> */}
    </div>
  );
}

export default Login;
