import React from "react";
import './PastTeams.css';
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import TextCard from "../../components/TextCard.js";
import TeamDropdown from "../../components/TeamDropdown.js";

function Team2021() {  
  return(
    <div className = "past-team-body">
      <div>
          <Navbar/>
      </div>
      <div className="past-team-main">
        <div className="past-team-header">
        2021-22
        </div>
        <div className="past-team-coordinators">
          <TextCard className="topcore-card" name="Parth Shah" position="Cultural Secretary"/>
          <TextCard className="topcore-card" name="Kunal Naker" position="Joint Cultural Secretary"/>
        </div>
        <div className="past-team-header"> General Coordinators </div>
        <div className="past-team-coordinators">
          <TextCard name="Aishwarya Rathod" position="Dance"/>
          <TextCard name="Sumeet Ramesh" position="Dance"/>
          <TextCard name="Tanishq Jain" position="Gaming and Sports"/>
          <TextCard name="Harshit Parmar" position="Technicals"/>
          <TextCard name="Isha Agarwal" position="Graphics"/>
          <TextCard name="Nikit Soni" position="Graphics"/>
          <TextCard name="Shruti Gaonkar" position="Drama"/>
          <TextCard name="Akhil Badheka" position="Drama"/>
          <TextCard name="Riddhish Hathi" position="Music"/>
          <TextCard name="Kaval Joshi" position="Music"/>
          <TextCard name="Kreesha Thakkar" position="Fashion"/>
          <TextCard name="Arshaan Hafiz" position="Fashion"/>
          <TextCard name="Rachel Prakash" position="Fine Arts"/>
          <TextCard name="Shriya Mehta" position="Fine Arts"/>
          <TextCard name="Yogeshwar Singh" position="Literary Arts"/>
          <TextCard name="Amatulla Abdabhaiwala" position="Literary Arts"/>
          <TextCard name="Twisha Soni" position="Literary Arts"/>
          
          <TextCard name="Swadha Prasad" position="Digital Media"/>
          <TextCard name="Yash Shah" position="Business Events"/>
        </div>
        <div className="past-team-header"> Admin Team </div>
        <div className="past-team-admin-heads">
          <TextCard name="Ojasvee Singhal" position="Admin Head"/>
          <TextCard name="Praneet Parvataneni" position="Admin Head"/>
          <TextCard name="Saurav Kothari" position="Admin Head"/>
          <TextCard name="Sarthak Jain" position="Admin Head"/>
          <TextCard name="Parth Dholakia" position="Admin Head"/>
          <TextCard name="Mahika Bhojani" position="Admin Head"/>
          <TextCard name="Ayush Nair" position="Admin Head"/>
          <TextCard name="Krishang Shah" position="Admin Head"/>
          <TextCard name="Vaibhav Parakh" position="Admin Head"/>
          <TextCard name="Shubham Ridhaan" position="Admin Head"/>
          <TextCard name="Abhigya Das" position="Admin Head"/>
          <TextCard name="Anandita Agarwal" position="Admin Head"/>
          <TextCard name="Fiza Varia" position="Admin Head"/>
        </div>
      </div>
      <TeamDropdown showCurrent={true}/>
      <div>
        <Footer/>
      </div>
    </div>
  )
};

export default Team2021;
