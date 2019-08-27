import React from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { MainContent } from './main-content';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Header
        name='Sam'
        email='sam@gmail.com' /> */}
      <MainContent alt='alternative text' title='beautiful image' />
      <Footer
        name='Sam'
        email='sam@gmail.com' />
    </div>
  );
}

export default  App;