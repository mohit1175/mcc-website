import React from "react";
import './styles/AnnualDayPage.css'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

import images from "../assets/images";

function AnnualDayPage() {
  return(
    <div className = "annualday-body">
      <div>
          <Navbar/>
      </div>
      <div className="annualday-main">
        <div className="annualday-header">
          Annual Day
        </div>
        
        <div className="annualday-carousel">
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
            <div><img alt="Mime Act - Drama Team" src={images.annualday1}/></div>
            <div><img alt="Cultural Committee Team" src={images.annualday2}/></div>
            <div><img alt="Mithibai Dance Team" src={images.annualday3}/></div>
            <div><img alt="Admin Team" src={images.annualday4}/></div>
            <div><img alt="Principal Prof. Krutika Desai at Annual Day 2023" src={images.annualday5}/></div>
            <div><img alt="Mime - Drama Team" src={images.annualday6}/></div>
            <div><img alt="Fashion Team" src={images.annualday7}/></div>
            <div><img alt="Audience" src={images.annualday8}/></div>
            <div><img alt="Saraswati Vandana" src={images.annualday9}/></div>
            <div><img alt="National Pledge" src={images.annualday10}/></div>
            <div><img alt="Drama Team" src={images.annualday11}/></div>
            <div><img alt="Light Show" src={images.annualday12}/></div>
          </Carousel>
        </div>
        <div className="annualday-text">
        Mithibai College's Annual Day, hosted by the Mithibai Cultural Committee, is a vibrant showcase of talents and togetherness. The event is like a lively carnival, filled with colorful performances that reflect the diverse skills of the students. Dance, music, fashion and drama take center stage, turning the college auditorium into a lively arena of creativity.
        </div>
        <div className="annualday-text">
        The Cultural Committee's thoughtful planning is evident in every act, creating a seamless flow of entertainment. The performances are like living stories, ranging from heartwarming tales to joyful celebrations of different cultures. The atmosphere is electric, with each participant pouring their heart and soul into their craft, captivating the audience.
        </div>
        <div className="annualday-text">
        The Annual Day at Mithibai College is more than just a series of performances, it is a shared experience that brings students together in a celebration of their unique talents. As the applause echoes through the auditorium, it leaves an enduring memory of a day where the college's artistic spirit shines brightly.
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
};

export default AnnualDayPage;
