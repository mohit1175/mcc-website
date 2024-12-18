import React from "react";
import './styles/KshitijPage.css'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import StatCard from "../components/StatCard.js";

import images from "../assets/images";

function KshitijPage() {
  return(
    <div className = "kshitij-body">
      <div>
          <Navbar/>
      </div>
      <div className="kshitij-main">
        <div className="kshitij-header">
          <img className="kshitij-logo" alt="Kshitij Logo" src={images.kshitij}/>
          <img className="kshitij-header-text" alt="Kshitij Header" src={images.kshitijtext}/>
        </div>
        <div className="kshitij-carousel">
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
            <div><img alt="Sunidhi Chauhan" src={images.kshitij1}/></div>
            <div><img alt="Sachin Jigas" src={images.kshitij2}/></div>
            <div><img alt="King at Kshitij'22" src={images.kshitij3}/></div>
            <div><img alt="Kshitij '23" src={images.kshitij4}/></div>
            <div><img alt="Amit Trivedi" src={images.kshitij5}/></div>
            <div><img alt="Crowd" src={images.kshitij6}/></div>
            <div><img alt="Amit Trivedi" src={images.kshitij7}/></div>
            <div><img alt="Kshitij Flag" src={images.kshitij8}/></div>
          </Carousel>
        </div>
        <div className="kshitij-stats">
          <StatCard no="50+" tag="Events"/>
          <StatCard no="600+" tag="Workforce"/>
          <StatCard no="2500+" tag="Registrations"/>
          <StatCard no="50000+" tag="Footfall"/>
        </div>
        <div className="kshitij-text">
        Mithibai Cultural Committee's Kshitij, the annual international intercollegiate cultural festival of Mithibai College, organized by the esteemed Mithibai Cultural Committee, has been an illustrious presence since its inauguration in 2007. Over the span of 17 years, each chapter of this festival's legacy is adorned with captivating narratives, and the 17th edition has etched yet another significant chapter into  Kshitij's history.
        </div>
        <div className="kshitij-text">
        Bolstered by a dedicated team of more than 700 students, ardently committed to infusing vibrancy into this opulent celebration, Kshitij stands tall as one of the most preeminent festivals in Asia. The repertoire of events surpasses expectations, comprising over 50 events spanning eight genres. It extends a prodigious platform, inviting participation from students across the nation.
        </div>
        <div className="kshitij-text">
        Distinguished as trailblazers, Kshitij is the pioneering college festival to introduce Para-Events, a compassionate initiative to host events specifically tailored for the differently-abled. Illuminating the city with its perpetual flame, Kshitij attracts an impressive gathering of more than 50,000 students from every corner of India.
        </div>
        <div className="kshitij-text">
        Enhancing the festival's allure, renowned celebrities grace our venues, and 'The Kshitij Show,' our official talk show, provides a rare glimpse into the lives of influential artists behind the veil of stardom. Moreover, participants stand to win extravagant prizes, with gifts and cash prizes totaling Lakhs of rupees, ensuring an unparalleled cultural spectacle that will linger in their memories. 
        </div>
        <div className="kshitij-text">
        Kshitij epitomizes a convergence of cultural grandeur, inclusivity, and unparalleled entertainment, promising an experience that transcends the ordinary and becomes a milestone in the cultural calendar of the nation.
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
};

export default KshitijPage;

