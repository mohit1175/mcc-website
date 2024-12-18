import React from "react";
import './styles/TeamPage.css'
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Card from "../components/Card.js";
import TeamDropdown from "../components/TeamDropdown.js";
import images from "../assets/images";

function TeamPage() {  
  return(
    <div className = "team-body">
      <div>
          <Navbar/>
      </div>
      <div className="team-main">
        <div className="team-header team-main-header">
          Our Team
        </div>
        <div className="team-top-core">
          <Card className="topcore-card" photo={images.krishnabirla} name="Krishna Birla" position="Cultural Secretary" additional="[Mr. University of Mumbai]" link="https://www.linkedin.com/in/krishnabirla26/"/>
          <Card className="topcore-card" photo={images.shivamjhawar} name="Shivam Jhawar" position="Deputy Cultural Secretary" link="https://www.linkedin.com/in/shivamjhawar/"/>
        </div>
        <div className="team-header"> Admin Heads </div>
        <div className="team-admin-heads">
          <Card photo={images.chehalagrawal} name="Chehal Agrawal" position="" link="https://www.linkedin.com/in/chehal-agrawal-b8b970256"/>
          <Card photo={images.kaavyadhoot} name="Kaavya Dhoot" position="" link="https://www.linkedin.com/in/kaavyadhoot"/>
          <Card photo={images.bansipatel} name="Bansi Patel" position="" link="https://www.instagram.com/thatswho.bansi"/>
          <Card photo={images.aishataurani} name="Aisha Taurani" position="" link="https://www.linkedin.com/in/aisha-taurani-251a9b246"/>
          <Card photo={images.saniyawalavalkar} name="Saniya Walavalkar" position="" link="https://www.linkedin.com/in/saniya-walavalkar-a21b97270"/>
          <Card photo={images.sohamtatar} name="Soham Tatar" position="" link="https://www.linkedin.com/in/sohamtatar"/>
        </div>
        <div className="team-header"> General Coordinators </div>
        <div className="team-coordinators">
          <Card photo={images.jalpvahaluwala} name="Jalp Vahaluwala" position="Dance" link="https://www.instagram.com/jalpvahaluwala"/>
          <Card photo={images.parvavithlani} name="Parva Vithlani" position="Dance" link="https://www.instagram.com/parva.exe"/>
          <Card photo={images.krutikhandelwal} name="Kruti Khandelwal" position="Dance" link="https://www.instagram.com/krutiiiiii__"/>
          <Card photo={images.mayankjakharia} name="Mayank Jakharia" position="Drama" link="https://www.instagram.com/mayank_jakharia"/>
          <Card photo={images.pranavshetye} name="Pranav Shetye" position="Drama" link="https://www.instagram.com/pranav.shetye"/>
          <Card photo={images.khushiacharya} name="Khushi Acharya" position="Drama" link="https://www.instagram.com/khushiiacharya"/>
          <Card photo={images.dhritibagle} name="Dhriti Bagle" position="Fashion" link="https://www.instagram.com/dhritsss_"/>
          <Card photo={images.manyachauhan} name="Manya Chauhan" position="Fashion" link="https://www.instagram.com/manya_1915"/>
          <Card photo={images.pranjayghiya} name="Pranjay Ghiya" position="Fashion" link="https://www.instagram.com/pranjay.03"/>
          <Card photo={images.janhavibhagwat} name="Janhavi Bhagwat" position="Music" link="https://www.instagram.com/musical.jenb"/>
          <Card photo={images.aakashrai} name="Aakash Rai" position="Music" link="https://www.instagram.com/aakash._.rai"/>
          <Card photo={images.gauravmehra} name="Gaurav Mehra" position="Gaming and Sports" link="https://www.instagram.com/gauravmehraa"/>
          <Card photo={images.dakshnehra} name="Daksh Nehra" position="Gaming and Sports" link="https://www.instagram.com/daksh_nehra_"/>
          <Card photo={images.suhanipanchal} name="Suhani Panchal" position="Literary Arts" link="https://www.instagram.com/suhanipanchal_"/>
          <Card photo={images.dishimehta} name="Dishi Mehta" position="Literary Arts" link="https://www.instagram.com/dishi_mehta"/>
          <Card photo={images.rachelprakash} name="Rachel Prakash" position="Fine Arts" link="https://www.instagram.com/_annerachel_"/>
          <Card photo={images.ishaanchoudhary} name="Ishaan Choudhary" position="Fine Arts" link="https://www.instagram.com/ishaan_3663"/>
          <Card photo={images.rutvipatel} name="Rutvi Patel" position="Fine Arts" link="https://www.instagram.com/rutviii.19"/>
          <Card photo={images.mananpareek} name="Manan Pareek" position="Photomedia" link="https://www.instagram.com/themananpareek"/>
          <Card photo={images.harshmudliar} name="Harsh Mudliar" position="Photomedia" link="https://www.instagram.com/harsh_mudliar"/>
          <Card photo={images.adityapandey} name="Aditya Pandey" position="Photomedia" link="https://www.instagram.com/aditya_p.21"/>
          <Card photo={images.manavpradhan} name="Manav Pradhan" position="Photomedia" link="https://www.instagram.com/manavpradhan"/>
          <Card photo={images.vidhaandharia} name="Vidhaan Dharia" position="Technicals" link="https://www.instagram.com/vidhaandharia"/>
          <Card photo={images.shivanshsingh} name="Shivansh Singh" position="Social Media" link="https://www.instagram.com/shivansh087"/>
          <Card photo={images.shloksureka} name="Shlok Sureka" position="Business Events" link="https://www.instagram.com/shloksureka"/>
        </div>
        <div className="team-header"> Website Team </div>
        <div className="team-coordinators">
          <Card photo={images.gauravmehra} name="Gaurav Mehra" position="Lead Developer" link="https://www.linkedin.com/in/mehra-gaurav"/>
          <Card photo={images.keyurrathod} name="Keyur Rathod" position="Designer" link="https://www.instagram.com/keyurrr14"/>
          <Card photo={images.vaibhavpatel} name="Vaibhav Patel" position="Designer" link="https://www.instagram.com/vaibhavpatel494"/>
          <Card photo={images.mayinkajaria} name="Mayin Kajaria" position="Developer" link="https://www.instagram.com/mayinkajaria"/>
          <Card photo={images.shreychandpa} name="Shrey Chandpa" position="Designer" link="https://www.instagram.com/neezdutz"/>
          <Card photo={images.rajatrane} name="Rajat Rane" position="Developer" link="https://www.instagram.com/qtyolobam"/>
        </div>
      </div>
      <TeamDropdown showCurrent={false}/>
      <div>
        <Footer/>
      </div>
    </div>
  )
};

export default TeamPage;
