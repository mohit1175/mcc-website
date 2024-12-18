import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ATSPage from "./pages/ATSPage";
import KshitijPage from "./pages/KshitijPage";
import AlumniPage from "./pages/AlumniPage";
import AnnualDayPage from "./pages/AnnualDayPage";
import ContactPage from "./pages/ContactUsPage";
import OurTeamsPage from "./pages/OurTeamsPage";
import AchievementsPage from "./pages/AchievementsPage";
import TeamPage from "./pages/TeamPage";
import TeachersPage from "./pages/TeachersPage";
import GalleryPage from "./pages/GalleryPage";
import NotFoundPage from "./pages/NotFoundPage";
import YouthPage from "./pages/achievements/YouthPage";
import MoodIndigoPage from "./pages/achievements/MoodIndigoPage";
import IPTAPage from "./pages/achievements/IPTAPage";
import Team2023 from "./pages/team/Team2023";
import Team2022 from "./pages/team/Team2022";
import Team2021 from "./pages/team/Team2021";
import Team2020 from "./pages/team/Team2020";
import Achievements2023 from "./pages/achievements/Achievements2023";
import Achievements2022 from "./pages/achievements/Achievements2022";
import Achievements2021 from "./pages/achievements/Achievements2021";
import Achievements2020 from "./pages/achievements/Achievements2020";
import Achievements2019 from "./pages/achievements/Achievements2019";
import Achievements2018 from "./pages/achievements/Achievements2018";
import Achievements2017 from "./pages/achievements/Achievements2017";
import Achievements2016 from "./pages/achievements/Achievements2016";
import Achievements2015 from "./pages/achievements/Achievements2015";
import Achievements2014 from "./pages/achievements/Achievements2014";
import Achievements2012 from "./pages/achievements/Achievements2012";
import Achievements2010 from "./pages/achievements/Achievements2010";
import Achievements2009 from "./pages/achievements/Achievements2009";
import Achievements2008 from "./pages/achievements/Achievements2008";
import Achievements2007 from "./pages/achievements/Achievements2007";
import Achievements2006 from "./pages/achievements/Achievements2006";

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="ats" element={<ATSPage />} />
          <Route path="kshitij" element={<KshitijPage />} />
          <Route path="alumni" element={<AlumniPage />} />
          <Route path="annual-day" element={<AnnualDayPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="our-teams" element={<OurTeamsPage />} />

          <Route path="team">
            <Route index element={<TeamPage />} />
            <Route path="2023" element={<Team2023 />} />
            <Route path="2022" element={<Team2022 />} />
            <Route path="2021" element={<Team2021 />} />
            <Route path="2020" element={<Team2020 />} />
          </Route>

          <Route path="achievements">
            <Route index element={<AchievementsPage />} />
            <Route path="youth" element={<YouthPage />} />
            <Route path="moodindigo" element={<MoodIndigoPage />} />
            <Route path="ipta" element={<IPTAPage />} />
            <Route path="2023" element={<Achievements2023 />} />
            <Route path="2022" element={<Achievements2022 />} />
            <Route path="2021" element={<Achievements2021 />} />
            <Route path="2020" element={<Achievements2020 />} />
            <Route path="2019" element={<Achievements2019 />} />
            <Route path="2018" element={<Achievements2018 />} />
            <Route path="2017" element={<Achievements2017 />} />
            <Route path="2016" element={<Achievements2016 />} />
            <Route path="2015" element={<Achievements2015 />} />
            <Route path="2014" element={<Achievements2014 />} />
            <Route path="2012" element={<Achievements2012 />} />
            <Route path="2010" element={<Achievements2010 />} />
            <Route path="2009" element={<Achievements2009 />} />
            <Route path="2008" element={<Achievements2008 />} />
            <Route path="2007" element={<Achievements2007 />} />
            <Route path="2006" element={<Achievements2006 />} />
          </Route>

          <Route path="teachers" element={<TeachersPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App; 