import React, { useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/home/Home';
 import Footer from './component/footer/Footer';
 import About from './component/about/About';
import Contact from './component/contact/Contact';
import Login from './component/login/Login';
import Todo from './component/todo/Todo';
import SignUp from "./component/signup/SignUp"
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from './store';

const App = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    const id=sessionStorage.getItem('id');
    if (id) {
      dispatch(authActions.login());
    }
  },[])
  return (
    <>

      <Router>
        <div>
          <Navbar />
          <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/todo" element={<Todo />} />
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
      
    </>
  );
}

export default App;
