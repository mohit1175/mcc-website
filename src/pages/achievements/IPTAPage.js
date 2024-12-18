import React from "react";
import './PastAchievements.css';
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import PastAchievementCard from "../../components/PastAchievementCard.js";


function IPTAPage() {  
  return(
    <div className="past-achievements-body">
      <div>
          <Navbar/>
      </div>
      <div className="past-achievements-main">
        <div className="past-achievements-header">Indian People's Theatre Association's <br/><span> Inter Collegiate Drama Competition</span></div>
        <div className="past-achievements-text">
          <PastAchievementCard
            name = "Prithviraj Kapoor Trophy for Best Production"
            items={[
              "Flamingoes (2017)",
              "Khar Khar (2016)",
              "Rishta Electronic Taar Ka (2013)",
              "Rishta Wahi Soch Nayi (2011)",
              "Lukka Chhuppii (2009)",
              "Shubh Deepavali (2005)",
              "Manusmriti (2004)",
              "Somu (2001)",
              "Jayantilal (1999)",
              "Shaapit (1989)",
              "Chulloo Bhar Paani (1987)",
              "Ek Bangla Bane Nyara (1980)" //12
            ]}
          />

          <PastAchievementCard
            name = "Manmohan Krishna Trophy for 2nd Best Production"
            items={[
              "Baram (2023)",
              "Saavar (2015)",
              "Rabdi (2008)",
              "Sparsh (1998)",
              "Marigtrishna (1992)",
              "Mahakal (1991)",
              "Dhuan (1982)", // 19
            ]}
          />
          
          <PastAchievementCard
            name = "Balraj Sahni Trophy for Outstanding Performance"
            items={[
              "Khar Khar (2016) - Ms. Mati Rajput",
              "Saavan (2015) - Ms. Mati Rajput",
              "Rishta Wahi Soch Nayi (2011) - Mr. Anuj Sharma",
              "Rishta Wahi Soch Nayi (2011) - Mr. Amatya Goradia",
              "Lukka Chhuppi (2009) - Mr. Hardik Sangani",
              "Shubh Deepavali (2005) - Ms. Vishaka Sapkal",
              "Jayantilal (1999) - Mr. Yogesh Pagare",
              "Chulloo Bhar Paani (1987) - Ms. Lubna Siddique",
              "Kate Huye Raaste (1983) - Ms. Deeksha Sharma",
              "Dhuan (1982) - Mr. Trilokinat Malhotra", //29
            ]}
          />
 
          <PastAchievementCard
            name = "Khwaja Ahmed Abbas Trophy for Best Script"
            items={[
              "Khar Khar (2016) - Mr. Amatya Goradia and Mr. Pritesh Sodha",
              "AD BC (2014) - Mr. Amatya Goradia and Mr. Kalpak Bhava",
              "Rishta Electronic Taar Ka (2013) - Mr. Amatya Goradia",
              "Rishta Wahi Soch Nayi (2011) - Mr. Mihir Rajda",
              "Lukka Chhuppi (2009) - Mr. Ratnakar Matkan",
              "Shubh Deepavali (2005) - Mr. Iravati Karnik",
              "Manusmriti (2004) - Mr. Prakash Kapadia",
              "Jayantilal (1999) - Mr. Aslam Parvez",
              "Mahakaal (1991) - Ms. Bhagwati Verma",
              "Shaapit (1989) - Ms. Madhu Rye", //39
            ]}
          />
          
          <PastAchievementCard
            name = "R.M. Singh Trophy for Best Director"
            items={[
              "Flamingoes (2017) - Mr. Prateek Jadav",
              "Khar Khar (2016) - Mr. Amatya Goradia",
              "Rishta Electronic Taar Ka (2013) - Mr. Amatya Goradia",
              "Lukka Chhuppi (2009) - Mr. Abhijeet Khade",
              "Shubh Deepavali (2005) - Mr. Yogesh Pagare",
              "Manusmriti (2004) - Mr. Yogesh Pagare",
              "Kasturi (2000) - Mr. Vipul Mehta",
              "Jayantilal (1999) - Mr. Vipul Mehta",
              "Anteya (1995) - Mr. Arun and Mr. Mukesh",
              "Mahakaal (1991) - Mr. Arun and Mr. Mukesh",
              "Chulloo Bhar Paani (1987) - Ms. Anshumali Ruparel",
              "Ek Bangla Bane Nyara (1980) - Mr. Subhash Dangayach", //51
            ]}
          />
          
          <PastAchievementCard
            name = "Avtar Kishan Hangal Trophy for Best Actor"
            items={[
              "Baram (2023) - Mr. Lavish Jain",
              "Khar Khar (2016) - Mr. Dharmaj Joshi",
              "Rish (2013) - Mr. Karan Bhanushali",
              "Lukka Chhuppi (2009) - Mr. Amatya Goradia",
              "Shubh Deepavali (2005) - Mr. Swapnil Ajgaonkar",
              "Somu (2001) - Mr. Yogesh Pagare",
              "Ek Bangla Bane Nyara (1980) - Mr. Hanif Mohammed", //58
            ]}
          />
          
          <PastAchievementCard
            name = "Shaukat Kaifi Trophy for Best Actress"
            items={[
              "Flamingoes (2017) - Ms. Arima Bhatnagar",
              "Flamingoes (2017) - Ms. Neha Pathwardhan",
              "Rishta Electronic Taar Ka (2013) - Ms. Chandralekha Mukherjee",
              "Rishta Wahi Soch Nayi (2011) - Ms. Antara Kadam",
              "Rabdi (2008) - Ms. Shreya Bugde",
              "Chand Bikhri Khadiyan (2007) - Ms. Shreya Bugde",
              "Manusmriti (2004) - Ms. Namita Parekh",
              "Jayantilal (1999) - Ms. Aarti Dhruv",
              "Anteya (1995) - Ms. Sheetal Rao",
              "Dhuan (1982) - Ms. Deeksha Sharma",
              "Ek Bangla Bane Nyara (1980) - Ms. Kiran Pandey", //69
            ]}
          />

          <PastAchievementCard
            name = "Mysore Shrinivas Sathyu Trophy for Best Set Design"
            items={[
              "Baram (2023) - Yash Pawar" //70
            ]}
          />

          <PastAchievementCard
            name = "Kaifi Azmi Trophy for Critic Awards"
            items={[
              "Gatti (2003)" //71
            ]}
          />
          
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
};

export default IPTAPage;
