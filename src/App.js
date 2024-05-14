import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/home/Home';
 import Footer from './component/footer/Footer';
 import About from './component/about/About';
import Contact from './component/contact/Contact';
import Login from './component/login/Login';
import Todo from './component/todo/Todo';

const App = () => {
  return (
    <>

      {/* <Router>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer/>
        </div>
      </Router> */}
      <Todo/>
    </>
  );
}

export default App;
