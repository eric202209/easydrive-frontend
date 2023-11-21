import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Signup from './components/SignUp';
import Signin from './components/SignIn';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import CarList from './components/CarList';
import CarDetail from './components/CarDetail';
import Booking from './components/Booking'; 
import About from './components/About';

function App() {
  const isAuthenticated = true;
  return (
    <Router>
      <div className="App">
        <Navigation isAuthenticated={isAuthenticated} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cars" element={<CarList />} />
          <Route path="/cars/:carId" element={<CarDetail />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;