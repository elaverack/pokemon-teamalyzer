import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Teamalyzer from './components/Teamalyzer';
import { observer } from '../node_modules/mobx-react/dist/index';

@observer
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <Teamalyzer />
        <Footer />
      </div>
    );
  }
}

export default App;
