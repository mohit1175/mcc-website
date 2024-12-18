import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './styles/HomePage.css'
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import images from "../assets/images";

function HomePage() {  
  return(
    <div className="home-body">
      <div>
          <Navbar/>
      </div>
      <div className="home-main">
        <div className="home-header">
          Mithibai Cultural Committee
        </div>

        <div className="home-carousel">
          <Carousel className="carousel"
            autoPlay={true}
            infiniteLoop={true}
            showArrows={true}
            showIndicators={false}
            stopOnHover={false}
            showStatus={false}
            transitionTime={1000}
            width={"100%"}
            axis={"horizontal"}
            emulateTouch={true}
            showThumbs={false}>
            <div><img alt="Team MCC 2024" src={images.mccteam23}/></div>
            <div><img alt="MCC 2023 Felicitation" src={images.felicitation27}/></div>
            <div><img alt="2023 Trophies" src={images.mcc1}/></div>
            <div><img alt="Team ATS 2023" src={images.atscore}/></div>
            <div><img alt="Mr. Ojasvee Singhal with Principal Krutika Desai" src={images.felicitation2}/></div>
            <div><img alt="Drama Team at IPTA 2023" src={images.drama8}/></div>
            <div><img alt="Team MCC at Orientation 2023" src={images.orientation16}/></div>
            <div><img alt="Annual Day 2023" src={images.annualday2}/></div>
            <div><img alt="Ojasvee Singhal" src={images.felicitation1}/></div>
          </Carousel>  
        </div>

      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
};

export default HomePage;
