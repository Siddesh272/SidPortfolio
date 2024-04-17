import React from 'react';
import './CaseStudy.css'
import Slider from 'react-slick';
import Footer from '../components/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import headerImage from '../assets/case-1/headerImage.png';
import car1 from '../assets/case-1/car1.png';
import car2 from '../assets/case-1/car2.png';
import journey from '../assets/case-1/storyboard.png';
import board from '../assets/case-1/planner.png';
import draw from '../assets/case-1/draw.png';
import fullPageImage from '../assets/case-1/fullPageImage.png';
import usability from '../assets/case-1/finding.png';
import use1 from '../assets/case-1/use1.png';
import use2 from '../assets/case-1/user2.png'
import mockup from '../assets/case-1/mockup.png';


const CaseStudyPage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className="case-study-page">
        <div className="case-head">
        <nav className="case-nav">
          <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/my-portfolio">UI/UX</a></li>
          </ul>
        </nav>
        <div className="title">
            <h2>ARTIFY</h2>
            <p>An Artist Development Application.</p>
        </div>
      </div>
      <div className="header-image">
         <img src={headerImage} alt="Header" />
      </div>
      <div className="introduction">
          <h2>Project Overview</h2>
          <p>Artify, an artist development application for struggling artists with online courses available in different artistic field to provide a path for developing their skills and emerge out as an extraordinary artist.</p>
      </div>
      <div className="lefty">
          <div>
            <h2>Problem & Solution</h2>
            <h3>Problem</h3>
            <p>Struggling individuals who lack in skills in their field of art and have no trusted resources to improve their art profile.</p>
            <h3>Solution</h3>
            <p>Design an app for artists bio that allows users to easily enhance their art profile, learn new skills by taking up courses.</p>
          </div>
      </div>
      <div className="introduction">
          <h2>My Role:</h2>
          <p>UX Designer, UX Researcher: Researching and designing an app for artists from conception to enhance their skills.</p>
          <h2>Responsibilities</h2>
          <p>Conducting interviews, paper and digital wireframing, low and high-fidelity prototyping, conducting usability studies, accounting for accessibility, and iterating on designs.</p> 
      </div>
      <h1 style={{ color: '#8574F2', textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>Understanding the User</h1>
      <div className="lefty">
          <div>
            <h3>User Research : Summary</h3>
            <p>I conducted interviews and created empathy maps to understand the users I’m designing for and their needs. A primary user group identified through research was non-working housewife adults who don’t have time to follow their passion. The other user group was the working individual who want to continue with art as an hobby despite of their jobs in different fields.
            <br/>These user group confirmed initial assumptions about Artify’s artists, but research also revealed that time was not the only factor limiting users from learning at home. Other user problems included obligations, interests, or challenges that make it difficult to find a perfect course for learning at a reasonable rate.</p> 
          </div>
      </div>
      <div className="lefty">
          <div>
           <h3>User Research: Pain points</h3>
           <p>Time: Non-working housewife, people employed in different fields are too busy to spend time on their hobby
           <br/>Accessibility: Platforms for learning art as a hobby are not equipped with assistive technologies.
           <br/>IA: Text-heavy course choices in apps are often difficult to read and order from</p> 
          </div>
      </div>
      <div className="lefty">
          <div>
            <h3>Personas</h3>  
            <p>I wanted to form a deeper understanding of our users' goals, needs, experiences, and behaviors. So, I created 2 personas for each of our user segments. They were based on user interviews and surveys, and I kept updating them throughout the project as we gathered more data. I used these personas whenever we wanted to step out of ourselves and reconsider our initial ideas.</p>
          </div>
      </div>
      <div className="carousel-images">
         <Slider {...settings}>
           <div>
             <img src={car1} alt="Carousel Image 1" />
           </div>
           <div>
             <img src={car2} alt="Carousel Image 2" />
           </div>
         </Slider>
      </div>
      <div className="lefty">
          <div>
            <h3>Customer Journey</h3>
            <p>I created a customer journey map to build a better understanding of how customers find and interact with the service and to discover opportunities for improvement. The map revealed many user problems and opportunities at the consideration and loyalty stages of the customer journey. Therefore, we paid special attention to these stages during the design process.
            <br/>Mapping Emily’s user journey revealed how helpful it would be for users to have access to a dedicated Artify app</p>
          </div>
      </div>
      <div className="full-page-image">
          <img src={journey} alt="Full Page Image" />
      </div>
      <div className="half-image-half-text">
          <div className="image">
           <img src={board} alt="Half Image" />
          </div>
          <div className="text">
            <h2>Emotion Board</h2>
            <p>Based on the user journey map I created an emotion board of different users on the same set of tasks representing a variation in emotions.</p>
          </div>
      </div>
      <h1 style={{ color: '#8574F2', textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>Starting the Design</h1>
      <div className="half-image-half-text">
          <div className="text">
           <h2>Paper Wireframes</h2>
           <p>I began the design process with low-fidelity sketches and wireframes to accelerate decision-making through visualization without losing time. My sketches were based on the initial user interviews, the business goal, and the heuristic evaluation. They each pointed to the fact that there were too many distractions in the flow. We came back to the sketches throughout the entire design process to make sure that we don’t lose sight of our primary goals and ideas.</p>
           <p>Taking the time to draft iterations of each screen of the app on paper ensured that the elements that made it to digital wireframes would be well-suited to address user pain points. For the home screen, I prioritized a quick and easy continue your course and explore courses option to help users save time.</p>
          </div>
          <div className="image">
           <img src={draw} alt="Half Image" />
          </div>
      </div>
      <div className="introduction">
          <h2>Digital Wireframe</h2>
          <p>Using Figma, I translated my first sketches into low-fidelity wireframes. Then, I improved them by adding a few relevant stock images and copies provided by the marketing team. At this stage, the wireframes were defined enough for some user testing. Based on 4 tests, I’ve made a few alternations and moved on to creating high-fidelity prototypes.</p>
      </div>
      <div className="full-page-image">
          <img src={fullPageImage} alt="Full Image" />
      </div>
      <div className="introduction">
          <p>As the initial design phase continued, I made sure to base screen designs on feedback and findings from  the user research.<br/>Easy navigation was a key user need to address in the designs in addition to equipping the app to work with assistive technologies.</p>
      </div>
      <div className="half-image-half-text">
          <div className="text">
           <h2>Low Fidelity Prototype</h2>
           <p>Using the completed set of digital wireframes, I created a low-fidelity prototype. The primary user flow I connected was scrolling  and booking a course, so the prototype could be used in a usability study.</p>
          </div>
          <div className="image">
          <div style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}>
          <iframe 
           title="Lofi Prototype"
           width="100%" 
           height="450" 
           src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FQO2pSrVayaR9EsnSd3WJr1%2FLow-Fidility%3Ftype%3Ddesign%26node-id%3D5-59%26t%3D3S8ABHbZmgclkaU0-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D2%253A3%26mode%3Ddesign" 
           allowfullscreen></iframe>
          </div>
          </div>
      </div>
     
      <div className="introduction">
          <h2>Usability Testing</h2>
          <p>I conducted two rounds of usability studies. Findings from the first study helped guide the designs from wireframes to mockups. The second study used a high-fidelity prototype and revealed what aspects of the mockups needed refining.</p>
      </div>
      <div className="full-page-image">
         <img src={usability} alt="Full Image" />
      </div>
      <h1 style={{ color: '#8574F2', textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>Refining the Design</h1>
      <div className="half-image-half-text">
         <div className="text">
           <h2>Round 1 findings</h2>
           <p>Users want more preference customization options<br/>Users want a clear description of the course<br/>Users want to navigation option from booking course page</p>
         </div>
         <div className="image">
           <img src={use1} alt="Half Image" />
         </div>
      </div>
      <div className="half-image-half-text">
          <div className="text">
           <h2>Round 2 findings</h2>
           <p>The my courses page is not informative.<br/>Your Progress and deadlines features absent.</p>
          </div>
          <div className="image">
           <img src={use2} alt="Half Image" />
          </div>
      </div>
      <div className="full-page-image">
          <img src={mockup} alt="Full Image" />
      </div>
      <div className="half-image-half-text">
          <div className="text">
           <h2>High Fidelity Prototype</h2>
           <p>The final high-fidelity prototype presented cleaner user flows for selecting a course and booking one. It also met user needs for viewing study goals option as well as more customization.</p>
          </div>
          <div className="image">
          <div style={{border: "1px solid rgba(0, 0, 0, 0.1)"}}>
          <iframe  
           title="Hifi Prototype"
           width="100%" 
           height="450" 
           src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FQO2pSrVayaR9EsnSd3WJr1%2FLow-Fidility%3Ftype%3Ddesign%26node-id%3D230-256%26t%3DptQwGME3au64f4OK-1%26scaling%3Dscale-down%26page-id%3D230%253A2%26starting-point-node-id%3D230%253A256%26mode%3Ddesign" 
           allowfullscreen></iframe>
          </div>
          </div>
      </div>
      <h1 style={{ color: '#8574F2', textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>Going Forward</h1>
      <div className="introduction">
          <h2>Impact</h2>
          <p>The app makes users feel like Artify really thinks about how to meet their needs.<br/><br/>One quote from peer feedback:</p>
          <p><i>“The app made it so easy and fun to build my skills at my own pace! I would definitely use this app as a go-to for a informative, fast, and enhanced artist.”</i></p>
      </div>
      <div className="lefty">
          <div>
           <h3>What I learned</h3>
           <p>While designing the Artify app, I learned that the first ideas for the app are only the beginning of the process. Usability studies and peer feedback influenced each iteration of the app’s designs.</p>
          </div>
      </div>
      <div className="lefty">
          <div>
            <h3>Next Steps</h3>
            <p>1. Conduct another round of usability studies to validate whether the pain points users experienced have been effectively addressed.<br/>2. Conduct more user research to determine any new areas of need.</p>
          </div>
      </div>
        <Footer/>
    </div>
  );
};

export default CaseStudyPage;
