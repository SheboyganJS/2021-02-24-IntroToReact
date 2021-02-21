import React from 'react';
import logo from './logo.svg';
import './Title.css';

const Title = () => {
  return (
    <header className="Title-header">
        <div class="Title-logo-container">
            <img src={logo} className="Title-logo" alt="logo" />
        </div>
        <h1 class="Title-header-text">Intro To React</h1>
    </header>
  );
};

export default Title;
