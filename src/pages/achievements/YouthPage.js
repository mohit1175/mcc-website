import React from "react";
import './PastAchievements.css';
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import PastAchievementCard from "../../components/PastAchievementCard.js";


function YouthPage() {  
  return(
    <div className="past-achievements-body">
      <div>
          <Navbar/>
      </div>
      <div className="past-achievements-main">
        <div className="past-achievements-header">University of Mumbai's Youth Festival</div>
        <div className="past-achievements-text">

          <PastAchievementCard
            name = "56th Edition [2023-24]"
            items={[
              "Overall Runners Up",
              "Zonal Champions",
              "Gold Medal - Short Film"
            ]}
          />
          
          <PastAchievementCard
            name = "55th Edition [2022-23]"
            items={[
              "Overall Runners Up",
              "Zonal Champions",
              "Mr. University - Mr. Krishna Birla",
              "Ms. University Runner Up - Ms. Suhani Panchal",
              "Garware Trophy - Debate",
              "Gold Medal - Western Vocal Solo, Debate, Western Group Song",
              "Silver Medal - Story Writing, Qawalli, Mono Acting, Short Film",
              "Bronze Medal - Indian Light Vocal Solo",
              "Consolation - Indian Instrumental Solo, Mime, Installation, Spot Photography"
            ]}
          />
          
          <PastAchievementCard
            name = "54th Edition [2021-22]"
            items={[
              "Zonal Champions",
              "Gold Medal - Western Instrumental",
              "Bronze Medal - Poster Making",
              "Consolation - Mono Acting, Cartooning"
            ]}
          />

          <PastAchievementCard
            name = "53rd Edition [2020-21]"
            items={[
              "Overall Runners Up",
              "Zonal Champions",
              "Gold Medal - Classical Solo Singing, Elocution, Cartooning, Western Solo Singing",
              "Bronze Medal - Indian Light Vocal Singing",
              "Consolation - Poster Making, Story Telling"
            ]}
          />
          
          <PastAchievementCard
            name = "52nd Edition [2019-20]"
            items={[
              "Overall 4th Runners Up",
              "Zonal Champions"
            ]}
          />
          
          <PastAchievementCard
            name = "51st Edition [2018-19]"
            items={[
              "Overall Runners Up",
              "Zonal Champions",
              "Gold Medal - Folk Orchestra, Qawalli, Mehendi",
              "Silver Medal - Western Group Song, Western Instrumental, Western Solo",
              "Bronze Medal - Indian Group Song, Classical Vocal Solo, Light Vocal Solo, Clay Modelling"
            ]}
          />
          
          <PastAchievementCard
            name = "49th Edition [2016-17]"
            items={[
              "Overall 2nd Runners Up",
              "Zonal Champions",
              "Gold Medal - Western Solo, Light Vocal Music, Poster Making, Rangoli, Folk Orchestra"
            ]}
          />
          
          <PastAchievementCard
            name = "48th Edition [2015-16]"
            items={[
              "Overall Champions after 16 Years",
              "Zonal Champions",
              "Music Trophy",
              "Gold Medal - Indian Group Song, Western Group Song, Western Instrumental, English Elocution, Collage, Cartoonist, Marathi One Act, Best Actor",
              "Silver Medal - Western Solo Singing, Indian Light Vocal, Folk Dance, Hindi Skit",
              "Bronze Medal - Marathi Mono Acting, Indian Classical, Clay Modelling"
            ]}
          />
          
          <PastAchievementCard
            name = "47th Edition [2014-15]"
            items={[
              "Gold and Silver Medal in National Level Folk Orchestra and Western Group Song - Mr. Moniraj Hazarika",
              "Silver Medal in National Level Indian Group Song - Ms. Shibani Raghvan",
              "State Level Golden Boy Awardee - Mr. Moniraj Hazarika",
              "Gold Medal and 2 Silver Medals in State Level Western Group Song, Western Vocal Solo and Folk Orchestra - Mr. Moniraj Hazarika",
              "Silver Medal in State Level Indian Group Song - Ms. Shibani Raghvan",
              "Gold Medal - Folk Orchestra, Poster Making, One Act Play, Western Instrumental, Western Solo",
              "Silver Medal - Western Group Song, Mime, Collage, Clay Modelling, Skit",
              "Bronze Medal - Best Actor, Installation, Indian Group Song",
              "Consolation - Mono Acting, English Debate, Folk Dance, Hindi One Act Play"
            ]}
          />

          <PastAchievementCard
            name = "46th Edition [2013-14]"
            items={[
              "Overall Runners Up",
              "Fine Arts Trophy"
            ]}
          />
          
          <PastAchievementCard
            name = "32nd Edition [1999-2000]"
            items={[
              "Overall Runners Up",
              "Representatives at National Level - Ms. Sheetal Rao, Ms. Runa Rizvi, Ms. Aarti Dhruv, Ms. Darshita Mehta, Ms. Suhasi Goradia, Mr. Salim Shaikh"
            ]}
          />
          
          <PastAchievementCard
            name = "31st Edition [1998-1999]"
            items={[
              "Gold Medal in 1st Ever International Inter-University One Act Play - Sati",
              "Overall Champions for the 3rd Time Consecutively",
              "Zonal Champions",
              "Mr. Univesity - Mr. Sanjay Nayak",
              "Ms. University - Ms. Purvi Shah",
              "Best Actress - Ms. Darshita Mehta",
              "Garware Trophy for Hindi Debate", 
              "Late Prof. F. Correa Alfonso Memorial Trophy for English Debate",
            ]}
          />
          
          <PastAchievementCard
            name = "30th Edition [1997-1998]"
            items={[
              "Overall Champions",
              "Zonal Champions",
              "Mr. University - Mr. Rahul Teny",
              "Ms. University - Ms. Kaizen Saklat",
              "National Level Contingent Leader - Mr. Ajay Sukhatankar",
              "Gold Medal in National Level Western Vocal Solo - Ms. Sabiha Khan",
              "Menka Trophy for Best Perfomance in Kathak - Ms. Minoti Deshmukh",
              "1st Place in Versatility - Ms. Amisha Shastry",
              "2nd Place in Versatility - Ms. Sheetal Rao",
              "3rd Place in Versatility - Ms. Aditi Deshpande"
            ]}
          />
          
          <PastAchievementCard
            name = "29th Edition [1996-1997]"
            items={[
              "Hosted 12th National Inter-University Youth Festival - Kshitij '97",
              "Overall Champions",
              "Zonal Champions",
              "Mr. University - Mr. Sachin Nayak",
              "Ms. University - Ms. Purvi Shah",
              "National Level Contingent Leader - Mr. Sunil Fernandes",
              "Gold Medal in National Level Western Group Song - Ms. Amisha Shastry, Ms. Sheetal Rao, Ms. Aditi Deshpande",
              "1st Place in Versatility - Ms. Amisha Shastry",
              "3rd Place in Versatility - Ms. Sheetal Rao",
              "Star Artist - Ms. Amisha Shastry",
              "Best Contingent Leader - Mr. Suman Roy"
            ]}
            />
          
          <PastAchievementCard
            name = "28th Edition [1995-1996]"
            items={[
              "Mr. Vivek Oberoi represented Mumbai University for Folk Dance, Skit and One Act Play at National Level",
              "Mr. Sunil Fernandes represented Mumbai University for Quiz at National Level",
              "Gold Medal in Mime",
              "Best Actress - Ms. Louella D'costa"
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

export default YouthPage;
