import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import KeyServices from './components/KeyServices';
import Footer from './components/Footer';
import './components/style.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Intro />
      <KeyServices />
      <Footer />
    </div>
  );
};

export default App;
