import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navigation = ({ isAuthenticated }) => {
  return (
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        {isAuthenticated ? (
          <>
            <li><Link to="/booking">Booking</Link></li>
            <li><Link to="/cars">Cars</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/profile">My Profile</Link></li>
            <li><Link to="/signout">Sign Out</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/signin">Sign In</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;