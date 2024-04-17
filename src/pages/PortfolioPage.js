import React from 'react';
import Header from '../components/Header1';
import About from "../components/About1";
import Footer from '../components/Footer';
import Card from '../components/Card';


const PortfolioPagePage = ({handleThemeToggle}) => (
    <>
      <Header onThemeToggle={handleThemeToggle}/>
      <About/>
      <Card />
      <Footer />
    </>
  );

export default PortfolioPagePage;