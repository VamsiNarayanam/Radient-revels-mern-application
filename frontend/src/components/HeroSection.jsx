import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="/Venue.jpg" alt="Venue" />
     
      <div className="item">
        <h3>DREAM MAKER</h3>
        <div>
          <h1>YOUR EXCLUSIVE DREAM ARCHITECT</h1>
        
          <Link to="contact" spy={true} smooth={true} duration={500}>
            BOOK NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;