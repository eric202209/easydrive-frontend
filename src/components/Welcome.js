import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div>
      <h2>Welcome to EasyDrive!</h2>
      <p>Explore our car rental options, sign in to manage your profile, and more!</p>
      <Link to="/home">Enter</Link>
    </div>
  );
}

export default Welcome;