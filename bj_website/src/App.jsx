import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './Components/Hero/Hero';
import GamePage from './Components/Game/GamePage'; // Import your new page component
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/game" element={<GamePage />} /> {/* Define the new route */}
      </Routes>
    </Router>
  );
}

export default App;