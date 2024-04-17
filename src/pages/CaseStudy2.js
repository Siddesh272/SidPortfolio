import React from 'react';
import './CaseStudy.css'
import Slider from 'react-slick';
import Footer from '../components/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import headerImage2 from '../assets/case-2/headerImage2.png';
import car1 from '../assets/case-2/car1.png';
import car2 from '../assets/case-2/car2.png';
import draw from '../assets/case-2/lofi1.png';
import draw1 from '../assets/case-2/lofi2.png';
import digi1 from '../assets/case-2/digi1.png';
import digi2 from '../assets/case-2/digi2.png';
import fullPageImage from '../assets/case-2/journey.png';
import method from '../assets/case-2/method.png';
import use from '../assets/case-2/usabality.png';
import use1 from '../assets/case-2/use1.png';
import use2 from '../assets/case-2/use2.png';
import mock1 from '../assets/case-2/mock1.png';
import mock2 from '../assets/case-2/mock2.png';
import access from '../assets/case-2/access.png';


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
        <h2>CHEFZ</h2>
        <p>Social Media website for Culinary Industry People.</p>
        </div>
      </div>
      <div className="header-image">
         <img src={headerImage2} alt="Header" />
      </div>
      <div className="introduction">
          <h2>Project Overview</h2>
          <p>Chefz is a social platform designed for the culinary industry, catering to all individuals involved in the field. Its main user base consists of aspiring chefs who seek to expand their network within the culinary industry.</p>
      </div>
      <div className="half-image-half-text">
        <div className="text">
          <h2>Problem</h2>
          <p>Available online social websites have cluttered designs, inefficient systems for browsing through specific category of audience, and lots of unwanted crowds.</p>
        </div >
        <div className="text">
          <h2>Goal</h2>
          <p>Design a Social media website to be user friendly for all the audience of culinary industry with all the features to learn, share and connect.</p>
        </div>
      </div>
      <div className="half-image-half-text">
         <div className="text">
           <h2>Tools</h2>
           <p>Adobe XD</p>
         </div>
         <div className="text">
           <h2>Timeline</h2>
           <p>February 2023 to April 2023<br/>Overall: 8 weeks<br/>Discovery & Research: 2 weeks<br/>Design & testing: 6 weeks</p>
         </div>
      </div>
      <div className="introduction">
        <h2>My Role</h2>
        <p>UX Designer, UX Researcher: Researching and designing an website for chefs from conception to enhance their social life.</p>
        <h2>Responsibility</h2>
        <p>Conducting interviews, paper and digital wireframing, low and high fidelity prototyping, conducting usability studies, accounting for accessibility, iterating on designs and responsive design.</p>
      </div>
      <h1 style={{ color: '#2AB397', textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>Understanding the User</h1>
      <div className="lefty">
        <div>
        <h3>User Research: Summary</h3>
        <p>As part of my research for the online social platform for chefs, I conducted user interviews to gain insights into the needs of our target users. To further analyze the data, I created empathy maps to better understand their perspectives. Through this process, I discovered that many of our target users view online socializing as a fun and relaxing activity, providing a much-needed break from their school or work commitments. However, they often feel overwhelmed and confused when navigating existing social websites, leading to frustration. This challenge negates the intended purpose of relaxation, exploring and learning for our target users.</p>
        </div>
      </div>
      <div className="lefty">
        <div>
        <p><b>1. Navigation:</b> Social website designs are often busy, which results in confusing navigation.</p>
        <p><b>2. Interaction:</b> Small buttons on social websites make item selection difficult, which sometimes leads users to make mistakes.</p>
        <p><b>3. Experience:</b> Online social websites don’t provide an engaging browsing experience.</p>
        </div>
      </div>
      <div className="lefty">
        <div>
           <h3>Personas</h3>
           <p>Dave, a fresher in hotel management, needs to learn and expand his network as an exceptional chef in order to overcome challenges in pursuing his passion alongside his internship.</p>
        </div>
      </div>
      <div className="carousel-images">
      <Slider {...settings}>
        <div>
          <img src={car1} alt="Carousel Image 1" />
        </div>
        <div>
          <img src={car2} alt="Carousel Image 1" />
        </div>
      </Slider>
      <div className="introduction">
        <h2>Customer Journey</h2>
        <p>I created a user journey map of Dave’s experience using the site to help identify possible pain points and improvement opportunities<br/>The purpose of creating a customer journey map is to build a better understanding of how customers find and interact with the service and to discover opportunities for improvement. The map revealed many user problems and opportunities at the consideration and loyalty stages of the customer journey. Therefore, I paid special attention to these stages during the design process.</p>
      </div>
      <div className="full-page-image">
      <img src={fullPageImage} alt="Full Page Image" />
      </div>
      <h1 style={{ color: '#2AB397', textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>Starting the Design</h1>
      <div className="full-page-image">
      <img src={method} alt="Full Page Image" />
      <div className="introduction"><p>Difficulty with website navigation was a primary pain point for users, so I used that knowledge to create a sitemap.<br/> My goal here was to make strategic information architecture decisions that would improve overall website navigation. The structure I chose was designed to make things simple and easy.</p></div>
      </div>
    </div>
      <div className="half-image-half-text">
        <div className="image">
          <img src={draw} alt="Half Image" />
        </div>
        <div className="text">
          <h2>Paper Wireframes</h2>
          <p>Difficulty with website navigation was a primary pain point for users, so I used that knowledge to create a sitemap.<br/> My goal here was to make strategic information architecture decisions that would improve overall website navigation. The structure I chose was designed to make things simple and easy.</p>
        </div>
      </div>
      <div className="half-image-half-text">
        <div className="image">
          <img src={draw1} alt="Half Image" />
        </div>
        <div className="text">
          <h2>Paper Wireframes Screen Size Variations</h2>
          <p>Because Chefz’s users access the site on a variety of different devices, I started to work on designs for additional screen sizes to make sure the site would be fully responsive. <br/> My goal here was to make strategic information architecture decisions that would improve overall website navigation. The structure I chose was designed to make things simple and easy.</p>
        </div>
      </div>
      <div className="half-image-half-text">
      <div className="text">
          <h2>Digital Wireframes</h2>
          <p>Using Adobe XD, I translated my first sketches into low-fidelity wireframes. Then, I improved them by adding a few relevant stock images and copies provided by the marketing team. At this stage, the wireframes were defined enough for some user testing. Based on 4 tests, I’ve made a few alternations and moved on to creating high-fidelity prototypes.</p>
        </div>
        <div className="image">
          <img src={digi1} alt="Half Image" />
        </div>
      </div>
      <div className="full-page-image">
        <h2>Screen Size Variations</h2>
       <img src={digi2} alt="Full page Image"/>
      </div>
      <div className="half-image-half-text">
        <div className="image">
        <div>
        <iframe 
        title="Lofi Prototype"
        width="100%" 
        height="445" 
        src="https://xd.adobe.com/embed/dcde1f8c-58a2-418f-8fb7-938989747a6c-898d/" 
        frameborder="0" 
        allowfullscreen></iframe>
         </div>
        </div>
        <div className="text">
          <h2>Low Fidelity Prototype</h2>
          <p>To create a low-fidelity prototype, I connected all of the screens involved in the primary user flow of adding an item to the cart and checking out.<br/>At this point, I had received feedback on my designs from members of my team about things like placement of buttons and page organization. I made sure to listen to their feedback, and I implemented several suggestions in places that addressed user pain points</p>
        </div>
      </div>
    
    <div className="full-page-image">
       <img src={use} alt="Full page Image"/>
      </div>
      <div className="introduction">
      <h2>Usability Study :Findings</h2>
      <h3>News</h3> 
      <p>No clarity with the news section and its length.</p>
      <h3>Explore</h3>
      <p>Difficult to find mutual friends list to be followed.</p>
      <h3>Friends list</h3>
      <p>Confused after sending join request as list is not updated.</p>
      </div>
      <h1 style={{ color: '#2AB397', textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>Refining the Design</h1>
      <div className="full-page-image">
       <img src={use1} alt="Full page Image"/>
       <p>To make the connection request flow even easier for users, I added a categorization of mutual and latest user. Also an updated button in the list after the request is sent successfully. </p>
       <br/>
      </div>
      <div className="full-page-image">
       <img src={use2} alt="Full page Image"/>
       <p>Based on the insights from the usability study, I made changes to improve the site’s navigation flow. One of the changes I made was adding the option of read more with the heading of Latest news. This allowed users to know about the actual length of the news.</p>
       <br/>
      </div>
      <div className="full-page-image">
        <h2>Mockups: Original screen size</h2>
       <img src={mock1} alt="Full page Image"/>
      </div>
      <div className="half-image-half-text">
      <div className="text">
          <h2> Mockups: Screen size variations</h2>
          <p>I included considerations for additional screen sizes in my mockups based on my earlier wireframes. Because users log from a variety of devices, I felt it was important to optimize the browsing experience for a range of device sizes, such as mobile and tablet so users have the smoothest experience possible. </p>
        </div>
        <div className="image">
          <img src={mock2} alt="Half Image" />
        </div>
      </div>
      <div className="half-image-half-text">
      <div className="text">
          <h2>Hi Fidelity Prototype</h2>
          <p>My hi-fi prototype followed the same user flow as the lo-fi prototype, and included the design changes made after the usability study, as well as several changes suggested by members of my team </p>
        </div>
        <div className="image">
        <div>
        <iframe 
        title="Hifi Prototype"
        width="100%" 
        height="445" 
        src="https://xd.adobe.com/embed/453cb4dc-3b29-49cc-988c-74b0e8580a40-106f/" 
        frameborder="0" 
        allowfullscreen></iframe>
        </div>
        </div>
      </div>
      <div className="half-image-half-text">
      <div className="text">
          <h2>Screen Variation Prototype</h2>
          <p>I included considerations for additional screen sizes in my prototype because users log from a variety of devices, I felt it was important to optimize the browsing experience for a range of device sizes, such as mobile and tablet so users have the smoothest experience possible. </p>
        </div>
        <div className="image">
        <div>
      <iframe 
        title="Mobile Prototype"
        width="100%" 
        height="445" 
        src="https://xd.adobe.com/embed/de77ac3d-fbe5-446a-868e-800a55c77127-8b24/" 
        frameborder="0" 
        allowfullscreen></iframe>
        </div>
        </div>
      </div>
    
    <div className="full-page-image">
       <img src={access} alt="Full page Image"/>
      </div>
      <h1 style={{ color: '#2AB397', textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>Moving Forward</h1>
      <div className="half-image-half-text">
         <div className="text">
           <h2>Impact</h2>
           <p>Our target users shared that the design was intuitive to navigate through, more engaging with the images, and demonstrated a clear visual hierarchy.</p>
         </div>
         <div className="text">
           <h2>What I learned</h2>
           <p>I learned that even a small design change can have a huge impact on the user experience. The most important takeaway for me is to always focus on the real needs of the user when coming up with design ideas and solutions.</p>
         </div>
      </div>
      <div className="introduction">
        <h2>Thank you for reading my case study!</h2>
        <p>Want to work with me? Feel free to contact me!<br/>...or just say hello on my social media.</p>
      </div>
    <Footer/>
  </div>
  );
};

export default CaseStudyPage;
