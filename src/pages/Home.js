import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Poster from '../components/Poster';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import ContactForm from '../components/ContactForm';
import ResumeButton from '../components/ResumeButton';

const Home = ({ handleThemeToggle }) => (
    <>
      <Header onThemeToggle={handleThemeToggle} />
      <About />
      <Portfolio />
      <ClickablePoster />
      <ResumeButton />
      <ContactForm />
      <Footer />
    </>
  );
  const ClickablePoster = () => {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate('/my-portfolio'); 
    };
  
    return (
      <div onClick={handleClick}>
        <Poster />
      </div>
    );
  };
  
export default Home;