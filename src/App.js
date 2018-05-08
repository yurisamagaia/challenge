import React, { Component } from 'react';
import './App.scss';

import Header from './components/Header';
import Features from './components/Features';
import About from './components/About';
import Slider from './components/Slider';
import Plans from './components/Plans';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Features />
        <About />
        <Slider />
        <Plans />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
