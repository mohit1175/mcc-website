import React from "react";
import './styles/TeachersPage.css'
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

function TeacherCard({name, position}) {
  return (
    <div className="teacher-card-container">
      <div className="teacher-card-name">{name}</div>
      <div className="teacher-card-position">{position}</div>
    </div>
  );
}

function TeachersPage() {  
  return(
    <div className = "teachers-body">
      <div>
          <Navbar/>
      </div>
      <div className="teachers-main">
        <div className="teachers-header">Our Teachers</div>
        <div className="teachers-convener">
          <TeacherCard name="Dr. Papiya Deb" position="Convenor"/>
          <TeacherCard name="Dr. Jayshree Ravi" position="Co-Convenor"/>
        </div>
        <div className="teachers-incharge">
          <TeacherCard name="Mr. Saurabh Panchamia" position="Teacher Coordinator"/>
          <TeacherCard name="CA Ashish Garg" position="Teacher Coordinator"/>
        </div>
        <div className="teachers-list">
          <TeacherCard name="Mr. Omkar Mohite" position="Teacher In-Charge"/>
          <TeacherCard name="Mr. Shripad Samant" position="Teacher In-Charge"/>
          <TeacherCard name="Mr. Sagar Sonawane" position="Teacher In-Charge"/>
          <TeacherCard name="Ms. Antara Kawale" position="Teacher In-Charge"/>
          <TeacherCard name="CA Baijul Mehta" position="Teacher In-Charge"/>
          <TeacherCard name="Mr. Sacchidanand Singh" position="Teacher In-Charge"/>
          <TeacherCard name="Dr. Nilesh Korgavkar" position="Teacher In-Charge"/>
          <TeacherCard name="Mr. Shashwat Shetty" position="Teacher In-Charge"/>
          <TeacherCard name="Mr. Pravin More" position="Teacher In-Charge"/>
          <TeacherCard name="CA Swati Gupta" position="Teacher In-Charge"/>
          <TeacherCard name="Mr. Rakesh Panse" position="Teacher In-Charge"/>
          <TeacherCard name="Mr. Jaipalsing Girase" position="Teacher In-Charge"/>
          <TeacherCard name="Dr. Vaishnavi More" position="Teacher In-Charge"/>
          <TeacherCard name="Dr. Dipali Sapre" position="Teacher In-Charge"/>
          <TeacherCard name="Dr. Satish Ingale" position="Teacher In-Charge"/>
          <TeacherCard name="Ms. Bhavika Patni" position="Teacher In-Charge"/>
          <TeacherCard name="Dr. Rakhi Madnani" position="Teacher In-Charge"/>
          <TeacherCard name="Mr. Pradeep Sawant" position="Teacher In-Charge"/>
          <TeacherCard name="Ms. Nisha Singh" position="Teacher In-Charge"/>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
};

export default TeachersPage;
