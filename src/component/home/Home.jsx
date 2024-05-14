import React from 'react';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to Your Todo App</h1>
      <p>This is a simple Todo app built with React.</p>
      <button onClick={() => console.log('Navigate to Todo List')}>Go to Todo List</button>
    </div>
  );
}

export default Home;
