import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faMedium, faLinkedin} from '@fortawesome/free-brands-svg-icons';


const AboutPage = () => {
const tattooImages = ["tat-1.jpg", "tat-2.jpg", "tat-3.jpg", "tat-4.jpg", "tat-5.jpg"]


    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); 
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>ABOUT SOLISPHERE</h1>
        <section className="about-caption">
        <p>Curated by artist Daniel Nelson. SOLISPHERE is more than a gallery; it's a curated space that transcends artistic boundaries. It's a digital sanctuary and a source of light for individuals seeking a fresh start and meaningful connections through art and technology.</p>
        </section>
      </header>

      <section className="about-row-1">
        <section className="introduction">
        <h2>THE FACE</h2>
        <img src="/images/portrait.JPG" alt="desc"/>
        <p>
          Hey, I'm Daniel Nelson, an artist whose creative journey traverses the realms of fine arts, graphic design, and software engineering. With a foundation nurtured at the Parsons School of Art & Design and honed during the Software Engineering Fellowship at The Marcy Lab School, my approach seamlessly bridges aesthetics and functionality that portrays the beauty found in introspection, navigating the complexities of morality, existence, and the pursuit of personal wholeness.
        </p>
        </section>
        <section className="philosophy-inspiration-container">
            <section className="rect-container">
            <section className="rect-1"></section>
            <section className="rect-2"></section>
            </section>
        <section className="artistic-philosophy">
        <h2>Creative Philosophy</h2>
        <p>
          SOLISPHERE serves as a beacon of introspection and illumination, embodying the philosophy of the 'solo.' Each piece portrays the beauty found in introspection, delving into the profound depths of the human experience. Drawing inspiration from philosophers like Fyodor Dostoevsky, Friedrich Nietzsche, Albert Camus, Arthur Schopenhauer, and Miyamoto Musashi, my art explores existential and psychological themes, guiding individuals through their internal struggles with courage and resilience. Not only does each piece of work take inspiration from profound philosphical concepts but also takes inspiration from personal experiences, and cultural influences. Each piece reflects a deep exploration of the absurd, individualism, and the transformative power of personal journeys.  
        </p>
        <p>Utilizing a diverse range of mediums and innovative techniques, my creations span immersive websites to thought-provoking multimedia paintings and drawings. The fusion of fine arts, graphic design, and technology, as showcased in projects like SAP (FORTHESOUL), 2022, reflects my commitment to pushing the boundaries of creative expression.           SOLISPHERE aims to resonate with you on a personal level, sparking introspection and inviting you to explore the transformative path through darkness. Your interpretation and engagement with my work add depth to its meaning.
        </p>
      </section>
      
      </section>
      </section>
      <section className="about-row-2">
        <section className="beyond-the-canvas-image-container">
        <div className="beyond-column">
        <section className="rect-container">
            <section className="rect-1"></section>
            <section className="rect-2"></section>
            </section>
        <h2>Beyond the Canvas</h2>
        <p>
          Throughout my artistic journey, I've had the privilege of contributing to impactful software projects like Second Wind and CareerSpring. These endeavors have extended the guiding light of SOLISPHERE into the digital realm, offering resources, support, and employment to those navigating challenging times.
        </p>
        
        </div>
        <div className="image-with-description">
        <a href="https://second-wind-udn3.onrender.com/landing" target="_blank">
        <img src="/images/secondwind.jpg" alt="desc"/>
        <p>
        Second Wind, a full stack online community-based platform that provide resources, support, and employment for those impacted by the criminal justice system. As a project manager and backend engineer for Second Wind, I orchestrated a space that provides resources, support, and employment for those impacted by the criminal justice system. I leveraged Express, Node,js, SQL, Postgres, Postman, Knex.js to develop models, controllers, and routes for all tables in the database to enable seamless CRUD functionality for all requests in the database.        </p>
        </a>
        </div>
        <div className="image-with-description">
        <a href="https://careerassess.mysites.io/?page_id=2" target="_blank">
        <img src="/images/careerspring.jpg" alt="desc"/>
        <p className="image-text-2">As a Developer Contractor, I’ve been instrumental in developing software like CareerSpring’s Career Interest Profiler by leveraging JavaScript, HTML & CSS. This custom career assessment tool seamlessly integrated into WordPress serves as a beacon for individuals exploring their professional paths. Through meticulous design, wireframing, and technical implementation, I created a tool that not only enhances user experience but aligns with long-term organizational goals. This tool, part of CareerSpring, serves as a beacon, guiding individuals towards careers that align with their interests.
        </p>
        </a>
        </div>
        <div className="image-with-description">
        <img src="/images/SAP.JPG" alt="desc"/>
        <p className="image-text-2">  Crafted during my sophomore year at Parsons School of Design, SAP (FORTHESOUL), 2021, represents a convergence of 3D modeling with AutoCAD, incorporating components such as a PIR motion sensor, DFPlayer, SD card, jumper wires, and Arduino Uno. Within the intricate model, the sculpture delivers a spoken narrative drawn from a fusion of written words by Jean-Paul Sartre, Albert Camus, and my own alterations through text-to-speech software.
The artistic endeavor not only draws inspiration from philosophical concepts but also integrates personal experiences and cultural influences. It is a deep exploration of the absurd, individualism, and the transformative potential embedded in personal journeys.</p>
        </div>
       
        </section>
       
      </section>
    
      <section className="about-row-3">
      <section className="upcoming-projects">
      <section className="rect-container">
            <section className="rect-1"></section>
            <section className="rect-2"></section>
            </section>
        <div className="upcoming-projects-text-section">
        <h2>Upcoming Projects</h2>
        </div>
        <div className='mini-galleries'>
        <div className="chrome-mini-gallery">
      <img src = {`images/HeartinChrome.jpg`} alt= {`Heart in Chrome logo`} />
      <div className='chrome-text'>
      <h3>Heart in Chrome: A deep dive into illustration</h3>
      <p>"Heart in Chrome" is a graphic novel set in Neo New York 2063, artist Luke Kane's acclaimed masterpieces are stolen by rogue agents orchestrated by CEO Viktor Blackwood. Luke's quest for redemption unravels a conspiracy, blurring lines between ally and adversary in a high-stakes cyberpunk thriller that explores the sinister nexus of art, identity, and power.</p>
      </div>
    </div>
    </div>
    <div className='tattoo-container'>
    <div className="tattoo-text">
    <h3>Tattoo Artistry</h3>
    <p>Beyond the realms of traditional art, I'm venturing into the world of tattooing, specializing in traditional black and grey styles. As my journey unfolds, I aspire to master diverse areas, including color realism and more. This new chapter adds another layer to my creative odyssey, exploring different ways to connect art with personal experiences and cultural influences.</p>
    </div>
    <div className="tattoo-mini-gallery">
      <div className='image-column-1'>
      <img src = {`images/${tattooImages[0]}`} alt= {"tat-0"} />
      <img src = {`images/${tattooImages[1]}`} alt= {"tat-1"} />
      </div>
      <div className='image-column-2'>
      <img src = {`images/${tattooImages[4]}`} alt= {"tat-4"} />
      <img src = {`images/${tattooImages[3]}`} alt= {"tat-3"} />
      </div>  
      
    </div>
    </div>
      </section>
      </section>

      <section className="contact-container">
      <div className='contact-img'>
          <img src='/images/digitalflower.JPG' alt=''/>
            </div>
        <div className='contact-information-container'>
        <section className="rect-container">
            <section className="rect-1"></section>
            <section className="rect-2"></section>
            </section>
        <h2>Contact Information</h2>
        <p>
          Connect with me on social media, explore my portfolio, or reach out via email. I'd love to hear your thoughts and insights.
        </p>
        <p>
         <a href="mailto:your.email@example.com">lukannelson@gmail.com</a>
        </p>
        <div className="social-media-row">
                <div className="social-media-links">
                    <a href="https://www.instagram.com/dan.da.solo/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="https://github.com/danielnelson37" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://medium.com/@lukannelson" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faMedium} size="2x" />
                    </a>
                    <a href="https://www.linkedin.com/in/dnelson777" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                </div>
            </div>
            </div>
           
      </section>
    </div>
  );
};

export default AboutPage;
