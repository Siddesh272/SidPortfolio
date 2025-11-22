import React from 'react';
import resume from '../assets/FAANGPath_Simple_Template.pdf';

const ResumeButton = () => {
  return (
    <section id="resume" className="section">
      <div className="container myresume">
        <h2>My Resume</h2>
        <button id="download-resume" onClick={() => window.open(resume, "_blank")}>View Resume</button>
      </div>
    </section>
  );
}

export default ResumeButton;
