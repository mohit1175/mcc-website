import React from "react";
import './PastTeams.css';
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import TextCard from "../../components/TextCard.js";
import TeamDropdown from "../../components/TeamDropdown.js";

function Team2022() {  
  return(
    <div className = "past-team-body">
      <div>
          <Navbar/>
      </div>
      <div className="past-team-main">
        <div className="past-team-header">
        2022-23
        </div>
        <div className="past-team-coordinators">
          <TextCard className="topcore-card" name="Ojasvee Singhal" position="Cultural Secretary"/>
        </div>
        <div className="past-team-header"> General Coordinators </div>
        <div className="past-team-coordinators">
          <TextCard name="Ayush Nair" position="Literary Arts"/>
          <TextCard name="Amatulla Abdabhaiwala" position="Literary Arts"/>
          <TextCard name="Isha Agarwal" position="Literary Arts"/>
          <TextCard name="Rachel Prakash" position="Fine Arts"/>
          <TextCard name="Zeal Dholakia" position="Fine Arts"/>
          <TextCard name="Swadha Prasad" position="Digital Media"/>
          <TextCard name="Shivansh Pandey" position="Digital Media"/>
          <TextCard name="Parth Dholakia" position="Business Events"/>
          <TextCard name="Poorvi Malpani" position="Business Events"/>
          <TextCard name="Riddhish Hathi" position="Music"/>
          <TextCard name="Krishna Solanki" position="Music"/>
          <TextCard name="Suramya Pandya" position="Music"/>
          <TextCard name="Kushagra Maheshwari" position="Music"/>
          <TextCard name="Manan Pareek" position="Photomedia"/>
          <TextCard name="Pooja Dani" position="Photomedia"/>
          <TextCard name="Isha Agarwal" position="Graphics"/>
          <TextCard name="Virendra Shah" position="Productions and Documentation"/>
          <TextCard name="Saloni Shah" position="Fashion"/>
          <TextCard name="Hridaya Mehta" position="Fashion"/>
          <TextCard name="Jia Patel" position="Fashion"/>
          <TextCard name="Vrishi Gandhi" position="Drama"/>
          <TextCard name="Vaishnavi Singh" position="Drama"/>
          <TextCard name="Shlok Bafna" position="Dance"/>
          <TextCard name="Saasha Shetty" position="Dance"/>
          <TextCard name="Rhushikesh Gujjar" position="Gaming and Sports"/>
          <TextCard name="Moiz Shah" position="Technicals"/>
          <TextCard name="Vidhaan Dharia" position="Technicals"/>
        </div>
        <div className="past-team-header"> Admin Team </div>
        <div className="past-team-admin-heads">
          <TextCard name="Yashvi Chheda" position="Admin Head"/>
          <TextCard name="Vidhi Shah" position="Admin Head"/>
          <TextCard name="Shivam Jhawar" position="Admin Head"/>
          <TextCard name="Arushi Katyal" position="Admin Head"/>
          <TextCard name="Krish Doshi" position="Admin Head"/>
          <TextCard name="Vanshi Kamdar" position="Admin Head"/>
          <TextCard name="Suhani Panchal" position="Admin Head"/>
          <TextCard name="Krishna Birla" position="Admin Head"/>
          <TextCard name="Sarthak Jain" position="Admin Head"/>
          <TextCard name="Ishaan Choudhary" position="Admin Head"/>
          <TextCard name="Aman Choudhary" position="Admin Head"/>
          <TextCard name="Krishang Shah" position="Admin Head"/>
          <TextCard name="Fiza Varia" position="Admin Head"/>
          <TextCard name="Rishika Mukherjee" position="Admin Head"/>
          <TextCard name="Neeti Singhania" position="Admin Head"/>
          <TextCard name="Anandita Agarwal" position="Admin Head"/>
          <TextCard name="Sudhanshu Agarwal" position="Admin Head"/>
          <TextCard name="Manan Sheth" position="Admin Head"/>
        </div>
      </div>
      <TeamDropdown showCurrent={true}/>
      <div>
        <Footer/>
      </div>
    </div>
  )
};

export default Team2022;
