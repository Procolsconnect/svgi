import React, { useState, useEffect } from 'react';
import HeroSlider from './HeroSlider.jsx'
import Instutions from './Instutions.jsx'
import Leadership from './Leadership.jsx'
import PlacementRecords from './PlacementRecords.jsx'
import WhySvg from './WhySvg.jsx'
import RankingSection from './RankingSection.jsx'
import Campus from './Campus.jsx'
import StudentAchivements from './StudentAchivements.jsx'
import PlacementCard from './PlacementCard.jsx';
import EventStack from '../campuslife/EventStack.jsx';
import OurTeam from './OurTeam.jsx';
import RandomLogoSlider from './Logo_Section.jsx';
import LogoSlider1 from './Logo_Section1.jsx';
import FloatingIcons from '../../../components/FloatingIcons.jsx';
import Popup from '../../../components/Popup.jsx';
import Milo from '../news/Milo.jsx';
import AdmissionSection from './AdmissionSection.jsx';
import StatsSection from "../home/StatsSection";
import axios from 'axios';

const apiurl = import.meta.env.VITE_API_URL;

const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${apiurl}/api/events`);
        if (response.data && response.data.data) {
          // Map backend data and assign alternating angles
          const mappedEvents = response.data.data.map((event, index) => ({
            title: event.title,
            description: event.desc,
            image: event.img,
            angle: index % 2 === 0 ? `${-5 - (index % 3)}deg` : `${5 + (index % 3)}deg`
          }));
          setEvents(mappedEvents);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className='home'>
      <FloatingIcons direction="right" vertical={true} />
      <Popup />
      <HeroSlider />
      <Instutions />
      <RankingSection />
      <AdmissionSection />
      <StatsSection />
      <Leadership />
      <PlacementRecords />
      <WhySvg />
      <Campus />
      <PlacementCard />
      {!loading && events.length > 0 && <EventStack events={events} />}
      <StudentAchivements />
      <OurTeam />
      <RandomLogoSlider />
      <LogoSlider1 />
      <Milo />  
    </div>
  )
}

export default Home