import React from "react";
import './styles/ATSPage.css'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

import StatCard from "../components/StatCard.js";

import images from "../assets/images";

function ATSPage() {
  return(
    <div className = "ats-body">
      <div>
          <Navbar/>
      </div>
      <div className="ats-main">
        <div className="ats-header-parent">
          <div className="ats-logo"><img src={images.ats} alt="ATS Logo"/></div>
          <div className="ats-header">ANNUAL TALENT SEARCH</div>
        </div>
        
        <div className="ats-carousel">
          <Carousel className="carousel"
            autoPlay={true}
            infiniteLoop={true}
            showArrows={false}
            showIndicators={false}
            stopOnHover={false}
            showStatus={false}
            transitionTime={1000}
            width={"100%"}
            axis={"horizontal"}
            emulateTouch={true}
            showThumbs={false}>
            <div><img alt="Annual Talent Search" src={images.ats3}/></div>
            <div><img alt="Bend It Like Beckham - ATS 2023" src={images.ats1}/></div>
            <div><img alt="" src={images.ats2}/></div>
            <div><img alt="" src={images.ats4}/></div>
            <div><img alt="" src={images.ats5}/></div>
            <div><img alt="" src={images.ats6}/></div>
            <div><img alt="" src={images.ats7}/></div>
            <div><img alt="" src={images.ats8}/></div>
            <div><img alt="" src={images.ats9}/></div>
            <div><img alt="" src={images.ats10}/></div>
            <div><img alt="" src={images.ats11}/></div>
          </Carousel>
        </div>
        <div className="ats-stats">
          <StatCard no="35+" tag="Events"/>
          <StatCard no="200+" tag="Workforce"/>
          <StatCard no="3000+" tag="Registrations"/>
          <StatCard no="10000+" tag="Footfall"/>
        </div>
        <div className="ats-text">
          The Annual Talent Search stands as the crowning jewel of Mithibai College, an intra-collegiate festival meticulously curated by the esteemed Mithibai Cultural Committee. Designed as a beacon illuminating the path to uncover exceptional minds and gifted individuals within the vibrant student body, it stands testament to the relentless dedication and exceptional outcomes fostered by the Committee.
        </div>
        <div className="ats-text">
          This illustrious event, steeped in tradition and innovation, serves as a nurturing ground for budding talents, often veiled in obscurity. It embodies the ethos of discovery and empowerment, providing an exalted platform for students to unveil and refine their prodigious abilities. The Annual Talent Search serves as an incubator, fostering a new vanguard of gifted individuals poised to lead the charge, becoming torchbearers for Mithibai College on the vast landscape of extracurricular brilliance.
        </div>
        <div className="ats-text">
          Through this symphony of talents, the Annual Talent Search not only showcases the kaleidoscope of abilities but also fortifies the cultural fabric of the institution, imbuing it with a cadre of zealous champions ready to uphold the college's legacy in the realms beyond academia. 
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
};

export default ATSPage;
