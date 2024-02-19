// import React from 'react';

// const AboutPage = () => {
//     return (
//         <div className="About">
//             <h1>About</h1>
//             <div className="about-paragraph-1">
//                 <h2>My vision</h2>
//             </div>
//             <div className="about-paragraph-2">
//                <h2> The Man and the Myth</h2>
//             </div>
//             <div className="about-paragraph-3">
                
//             </div>
//         </div>

//     )
// }

// export default AboutPage;

import React, { useEffect } from 'react';

const AboutPage = () => {
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
      <div className="row-of-circles-1">
        <div className="bordered-circle-1-1">
        </div>
        <div className="bordered-circle-2-1">
        </div>
        <div className="bordered-circle-3-1">
        </div>
        </div>
      </section>
      </section>
      <section className="about-row-2">
        <section className="beyond-the-canvas-image-container">
        <div className="beyond-column">
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
        <p className="image-text-2"> As a Developer Contractor, I’ve been instrumental in developing software like CareerSpring’s Career Interest Profiler by leveraging JavaScript, HTML & CSS. This custom career assessment tool seamlessly integrated into WordPress serves as a beacon for individuals exploring their professional paths. Through meticulous design, wireframing, and technical implementation, I created a tool that not only enhances user experience but aligns with long-term organizational goals. This tool, part of CareerSpring, serves as a beacon, guiding individuals towards careers that align with their interests.
        </p>
        </a>
        </div>
       
        </section>
        <div className="row-of-circles-2">
        <div className="bordered-circle-1-2">
        </div>
        <div className="bordered-circle-2-2">
        </div>
        <div className="bordered-circle-3-2">
        </div>
        </div>
      </section>

      <section className="upcoming-projects">
        <h2>Upcoming Projects</h2>
        <p>
          Stay tuned for upcoming projects, exhibitions, and collaborations. Your continued support fuels my artistic journey, and I look forward to sharing more with you.
        </p>
      </section>

      <section className="contact-information">
        <h2>Contact Information</h2>
        <p>
          Connect with me on social media, explore my portfolio, or reach out via email. I'd love to hear your thoughts and insights.
        </p>
        {/* Add your contact links here */}
      </section>
    </div>
  );
};

export default AboutPage;
