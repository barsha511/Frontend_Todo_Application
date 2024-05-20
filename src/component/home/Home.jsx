import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to Your Todo App</h1>
      <p>This is a simple Todo app built with React.</p>
      <Link to="/todo">
        <button>Go to Todo List</button>
      </Link>
    </div>
  );
}

export default Home;
