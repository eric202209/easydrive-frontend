import React from 'react';
import '../App.css';
import logoImage from '../images/logo.png';

const Home = () => {
  return (
    <div className="page-container">
      <header className="page-header">
        {/* Include your team's logo here */}
        <img src={logoImage} alt="Team Logo" className="logo-image" />
      </header>
      <h1>Welcome to EasyDrive!</h1>
      <main className="page-content">
        {/* Add content for the home page */}
        <p>Explore our car rental options, sign in to manage your profile, and more!</p>
      </main>
    </div>
  );
}

export default Home;


