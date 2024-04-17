// Portfolio.js
import React from 'react';
import Portfolio1 from '../assets/portfolio-1.jpeg';
import Portfolio2 from '../assets/portfolio-2.jpeg';
import Portfolio3 from '../assets/portfolio-3.jpeg';
import Portfolio4 from '../assets/portfolio-4.jpeg'


const Portfolio = () => {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2>My Projects</h2>
        <div className="portfolio-grid">
          {/* Your portfolio items go here */}
          <div className="portfolio-item">
            <img src={Portfolio1} alt="Portfolio Item 1" />
            <a href='https://github.com/Siddesh272/PlaceEase'><h3>PlaceEase</h3></a>
            <p>An all in one system helping students , recruiters and college TPO to automate the process of placement, using MongoDB, Node, Express and EJS.</p>
          </div>
          <div className="portfolio-item">
            <img src={Portfolio2} alt="Portfolio Item 2" />
            <a href='https://github.com/Siddesh272/codewarriors_technoverse'><h3>DocCon</h3></a>
            <p>Doctors Appointment booking website connecting Doctors and patients virtually, using MERN stack.</p>
          </div>
          <div className="portfolio-item">
            <img src={Portfolio3} alt="Portfolio Item 3" />
            <a href='https://github.com/Siddesh272/ChatAll'><h3>ChatAll</h3></a>
            <p>A text and voice based chatbot developed Hugging Face’s Transformers, Sentence Transformers, Flask and SpeechRecognition </p>
          </div>
          <div className="portfolio-item">
            <img src={Portfolio4} alt="Portfolio Item 4" />
            <a href='https://github.com/Siddesh272/LifestyleApp'><h3>LifeMage</h3></a>
            <p>A Mobile Application developed using Android Studio with all in one features helping individuals to manage and improve their lifestyle.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
