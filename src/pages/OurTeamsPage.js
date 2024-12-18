import React from "react";
import './styles/OurTeams.css'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import images from "../assets/images";

function OurTeamsPage() {  
  return(
    <div className = "our-teams-body">
      <div>
          <Navbar/>
      </div>
      <div className="our-teams-main">
        <div className="our-teams-carousel">
          <Carousel className="carousel"
              autoPlay={true}
              infiniteLoop={true}
              showArrows={true}
              showIndicators={true}
              stopOnHover={true}
              showStatus={false}
              emulateTouch={true}
              transitionTime={1500}
              width={"100%"}
              axis={"horizontal"}
              showThumbs={false}>
              <div><img alt="Admin Team" src={images.admin}/></div>
              <div><img alt="Dance Team" src={images.dance}/></div>
              <div><img alt="Drama Team" src={images.drama}/></div>
              <div><img alt="Music Team" src={images.music}/></div>
              <div><img alt="Fashion Team" src={images.fashion}/></div>
              <div><img alt="Fine Arts Team" src={images.finearts}/></div>
              <div><img alt="Gaming and Sports Team" src={images.gamingandsports}/></div>
              <div><img alt="Website Team" src={images.website}/></div>
            </Carousel>
          </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
};

export default OurTeamsPage;
