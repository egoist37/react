import React from 'react';
import { Footer } from './footer';
import { MainContent } from './main-content';
import './App.css';

function App() {
  return (
    <div className="App">
      <MainContent alt='alternative text' title='beautiful image' />
      <Footer
        name='Sam'
        email='sam@gmail.com' />
    </div>
  );
}

export default  App;