import React from "react";
import './styles/ContactPage.css'
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

// Import firebase
import { initializeApp } from 'firebase/app';
import { getDatabase, ref as sRef, push, set } from "firebase/database";

// Config firebase
const firebaseConfig = {
  apiKey: "AIzaSyCwm3qTxzqfa9qSA54CDrpPnKPVeZHnFgc",
  authDomain: "mithibai-cultural-committee.firebaseapp.com",
  databaseURL: "https://mithibai-cultural-committee-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mithibai-cultural-committee",
  storageBucket: "mithibai-cultural-committee.appspot.com",
  messagingSenderId: "103168617432",
  appId: "1:103168617432:web:37c1e99ed8c705dcbde0ad",
  measurementId: "G-9XHMNRTLPE"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function getCurrentDateTime() {
  const now = new Date();
  const date = `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()}`;
  const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
  return `${date} ${time}`;
}

const handleFormSubmit = async (event) => {
  event.preventDefault();
  const timestamp = getCurrentDateTime();
  const name = event.target[0].value;
  const phoneNumber = event.target[1].value;
  const email = event.target[2].value;
  const message = event.target[3].value;
  

  try {
    const newRegistrationRef = push(sRef(db, 'contact'));
    await set(newRegistrationRef, {
      timestamp,
      name,
      phoneNumber,
      email,
      message
    });
    
    alert("We will contact you soon!");
    
  } catch (error) {
    console.error("Error adding document: ", error);
  }
  document.getElementById("contact-form").reset();
}




function ContactPage() {  
  return(
    <div className="contact-body">
      <div>
          <Navbar/>
      </div>
      <div className="contact-main">
        <div className="contact-header">
          Contact Us
        </div>
        <div className="contact-us-parent">
          <div className="contact-us-form">
            <form action="" onSubmit={handleFormSubmit} id="contact-form" className="form">
              <div className="form-input">
                <input type="text" placeholder="Name" autocomplete="off" pattern="^[a-zA-Z' ]*$" required/>
              </div>
              <div className="form-input">
                <input type="tel" placeholder="Phone Number" autocomplete="off" pattern="^[0-9]*$" minLength={10} maxLength={10} required/>
              </div>
              <div className="form-input">
                <input type="email" placeholder="Email ID" autocomplete="off" required/>
              </div>
              <div className="form-input">
                <input type="text" placeholder="Share your message" autocomplete="off" required/>
              </div>
              <button className="submit" type="submit">Submit</button>
            </form>
            <br/>
            <div className="contact-mail"> <a href="mailto:info@mithibaicultural.in"> info@mithibaicultural.in </a></div>
            <div className="contact-mail"> <a href="mailto:ccl@mithibaicultural.in"> Aisha Taurani: ccl@mithibaicultural.in </a></div>
          </div>
          <div className="contact-us-maps">
              <a href="https://maps.app.goo.gl/ymJr9vKPo6XH6Kkq5" target="_blank" rel="noreferrer" className="college-address-link">
                <iframe title="MCC Office" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.1169774600185!2d72.8375344!3d19.102523500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c90024c7fad5%3A0x830f0444fc0c6d88!2sMithibai%20Cultural%20Committee!5e0!3m2!1sen!2sin!4v1707066227798!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className="college-address">
                  Cultural Office, 102, Mithibai College, Vile Parle (W), Mumbai, Maharashtra 400056
                </div>
              </a>
            
          </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
};

export default ContactPage;
