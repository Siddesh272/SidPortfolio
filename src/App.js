import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PortfolioPage from './pages/PortfolioPage';
import CaseStudy1 from './pages/CaseStudy1';
import CaseStudy2 from './pages/CaseStudy2'

const App = () => {
  const [theme, setTheme] = useState('light-mode');

  const handleThemeToggle = () => {
    setTheme(theme === 'light-mode' ? 'dark-mode' : 'light-mode');
  };

  return (
    <Router>
      <div className={`App ${theme}`}>
        <Routes>
          <Route path="/" element={<Home handleThemeToggle={handleThemeToggle} />} />
          <Route path="/my-portfolio" element={<PortfolioPage handleThemeToggle={handleThemeToggle} />} />
          <Route path="/case-study-1" element={<CaseStudy1/>}/>
          <Route path="/case-study-2" element={<CaseStudy2/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
