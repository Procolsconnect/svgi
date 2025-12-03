import React from 'react'
import HeroSlider from './HeroSlider.jsx'
import Instutions from './Instutions.jsx'
import Leadership from './Leadership'
import PlacementRecords from './PlacementRecords.jsx'
import WhySvg from './WhySvg'
import Campus from './Campus'
import StudentAchivements from './StudentAchivements'
import PlacementCard from './PlacementCard.jsx';
import LatestEvent from './LatestEvent.jsx';
import OurTeam from './OurTeam.jsx';
import RandomLogoSlider from './Logo_Section.jsx';
import LogoSlider1 from './Logo_Section1.jsx';

const Home = () => {
  return (
    <div className='home'>
      <HeroSlider />
      <Instutions />
      <Leadership />
      <PlacementRecords />
      <WhySvg />
      <Campus />
      <PlacementCard />
      <LatestEvent />
      <StudentAchivements />
      <OurTeam />
      <RandomLogoSlider />
      <LogoSlider1 />
    </div>
  )
}

export default Home