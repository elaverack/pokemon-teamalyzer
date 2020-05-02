import { Pokemon, SPECIES } from '@smogon/calc';
import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Teamalyzer from './components/Teamalyzer';

window.Pokemon = Pokemon;
window.SPECIES = SPECIES;

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Teamalyzer />
      <Footer />
    </div>
  );
}

export default App;
