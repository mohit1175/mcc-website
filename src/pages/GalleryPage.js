import React from "react";
import './styles/GalleryPage.css'
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

import images from "../assets/images"

function shuffle(array) {
  console.log(array.length);
  let currentIndex = array.length,  randomIndex;
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

const list = [
  images.annualday1, images.annualday2, images.annualday3, images.annualday4, images.annualday5, images.annualday6, images.annualday7, images.annualday8, images.annualday9, images.annualday10, images.annualday11, images.annualday12,
  images.atsbusinessevents, images.atscore, images.atsdance, images.atsdrama, images.atsfinearts, images.atsinformals, images.atsliteraryarts, images.atslogistics, images.atsmusic, images.atssocialmedia, images.atstechnicals,
  images.ats1, images.ats2, images.ats3, images.ats4, images.ats5, images.ats6, images.ats7, images.ats8, images.ats9, images.ats10, images.ats11,
  images.drama1, images.drama2, images.drama3, images.drama4, images.drama5, images.drama6, images.drama7, images.drama8, images.drama9, images.drama10, images.drama11, images.drama12, images.drama13, 
  images.felicitation1, images.felicitation2, images.felicitation3, images.felicitation4, images.felicitation5, images.felicitation6, images.felicitation7,
  images.felicitation8, images.felicitation9, images.felicitation10, images.felicitation11, images.felicitation12, images.felicitation13, images.felicitation14,
  images.felicitation15, images.felicitation16, images.felicitation17, images.felicitation18, images.felicitation19, images.felicitation20, images.felicitation21,
  images.felicitation22, images.felicitation23, images.felicitation24, images.felicitation25, images.felicitation26, images.felicitation27, images.felicitation28,
  images.kshitij1, images.kshitij2, images.kshitij3, images.kshitij4, images.kshitij5, images.kshitij6, images.kshitij7, images.kshitij8,
  images.mcc1, images.mcc2, images.mcc3, images.mcc4, images.mcc5, images.mcc6,
  images.orientation1, images.orientation2, images.orientation3, images.orientation4, images.orientation5, images.orientation6, images.orientation7, images.orientation8,
  images.orientation9, images.orientation10, images.orientation11, images.orientation12, images.orientation13, images.orientation14, images.orientation15, images.orientation16,
]

function Column({ items }){
  return(
    items.map((photo, index) => (
      <img src={photo} alt="MCC" loading="lazy"/>
    ))
  )
}

function GalleryPage() {  
  shuffle(list);
  const col1 = list.slice(0, 35);
  const col2 = list.slice(35, 70);
  const col3 = list.slice(70, 105);
  return(
    <div className = "gallery-body">
      <div>
          <Navbar/>
      </div>
      <div className="gallery-main">
        <div className="gallery-header">
          Gallery Page
        </div>
        <div className="row">
          <div className="column">
            <Column items={col1}/>
          </div>
          <div className="column">
            <Column items={col2}/>
          </div>
          <div className="column">
            <Column items={col3}/>
          </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
};

export default GalleryPage;
