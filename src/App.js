import React from "react";
import "./App.css";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Teamalyzer from "./components/Teamalyzer";
import Footer from "./components/Footer";

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
