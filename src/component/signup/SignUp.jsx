import React, { useState } from 'react';
import './SignUp.css'; // Ensure the path is correct
import axios from "axios";
const SignUp = () => {
    const [inputs, setInputs] = useState({
        email: "",
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:1000/api/v1/register', inputs);
           
            if (response.data.message === 'Successfully Registered') {
                alert(response.data.message);
                setInputs({
                    email: '',
                    username: '',
                    password: ''
                });
                console.log(inputs.email);
            }
            else {
                alert(response.data.message);
                setInputs({
                    email: "",
                    username: "",
                    password: ""
                });
            }
        } catch (error) {
            console.error('There was an error!', error);
        }
    };
    // const  handleSubmit = async(e) => {
    //     e.preventDefault();
    //     // // Perform any actions with the inputs here (e.g., form submission)
    //     // console.log(inputs); // Logging inputs for demonstration

    //     // // Reset inputs after submission

        

    //     await axios.post("http//localhost:1000/api/v1/register", inputs).then((response) => {
    //         console.log()
    //         if (response.data.message === "User already exist") {
    //             alert(response.data.message)
    //         }
    //         else {
    //             alert(response.data.message)
    //             setInputs({
    //                 email: "",
    //                 username: "",
    //                 password: ""
    //             }); 
    //         }
    //     })
        
    // };

    return (
        <div className="container">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter your Username"
                    onChange={handleChange}
                    value={inputs.username}
                    required
                />

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
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    onChange={handleChange}
                    value={inputs.password}
                    required
                />

                <button type="submit">Sign up</button>
            </form>
        </div>
    );
};

export default SignUp;
