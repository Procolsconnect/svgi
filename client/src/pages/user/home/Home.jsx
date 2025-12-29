import React from 'react'
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
import Stats from './Stats.jsx';
import Milo from '../news/Milo.jsx';
const Home = () => {
   const eventData = [
    {
      title: "Magizh 2025",
      description: "This is the first time such a grand function has <br /> been held in our college.",
      image: "/images/magizh.jpg",
      angle: "-7deg"
    },
    {
      title: "National Service awareness",
      description: "A discussion was held for students on National Service Awareness.",
      image: "/images/national.jpg",
      angle: "8deg"
    },
    {
      title: "1st year inauguration ceremony",
      description: "Department of BE / B.tech",
      image: "/images/inagration.jpg",
      angle: "-3deg"
    },
    {
      title: "Tech Trend Path of success",
      description: "The future of technology is bright and full of possibilities.",
      image: "/images/tech.jpg",
      angle: "6deg"
    },
    {
      title: "Freshers Day 2025",
      description: "Department of Computer Application",
      image: "/images/Freshers.jpg",
      angle: "-11deg"
    },
    {
      title: "Farewell Day 2025",
      description: "Grand celebration of the physiotherapy class.",
      image: "/images/farawell.jpg",
      angle: "9deg"
    },
    {
      title: "Cougar",
      description: "Puma concolor",
      image: "/images/farawell.jpg",
      angle: "-4deg"
    }
  ];

  return (
    <div className='home'>
      <FloatingIcons direction="right" vertical={true} />
      <Popup />
      <HeroSlider />
      {/* <Stats/> */}
      <Instutions />
      <RankingSection />
      <Leadership />
      <PlacementRecords />
      <WhySvg />
      <Campus />
      <PlacementCard />
         <EventStack events={eventData} />
      <StudentAchivements />
      <OurTeam />
      <RandomLogoSlider />
      <LogoSlider1 />
      <Milo/>
    </div>
  )
}

export default Home