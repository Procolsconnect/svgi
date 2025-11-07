import React from 'react'
import CardsWithArrows from './pages/user/home/sports_section.jsx';
import BigCatStack from './pages/user/home/animal.jsx';
import Sports from './pages/user/home/sports.jsx';
import OurTeam from './pages/user/home/OurTeam.jsx';
import RandomLogoSlider from './pages/user/home/Logo_Section.jsx';
import LogoSlider1 from './pages/user/home/Logo_Section1.jsx';

const App = () => {
  return (
    <>
    <CardsWithArrows />
    <BigCatStack />
    {/* <Sports /> */}
    <OurTeam />
    <RandomLogoSlider />
    <LogoSlider1 />
    </>
  )
}

export default App