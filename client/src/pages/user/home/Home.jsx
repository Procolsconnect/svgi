import React from 'react'
import Slider from './Slider'
import Achievement from './Achievement'
import Leadership from './Leadership'
import Swiper_svgi from './Swiper_svgi'
import WhySvg from './WhySvg'
import Campus from './Campus'
import AnimatedCards from './AnimatedCards'
import CardsWithArrows from './sports_section.jsx';
import BigCatStack from './animal.jsx';
import OurTeam from './OurTeam.jsx';
import RandomLogoSlider from './Logo_Section.jsx';
import LogoSlider1 from './Logo_Section1.jsx';
const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <Achievement />
      <Leadership />
      <Swiper_svgi />
      <WhySvg />
      <Campus />
      <CardsWithArrows />
      <BigCatStack />
      <AnimatedCards />
      <OurTeam />
      <RandomLogoSlider />
      <LogoSlider1 />
    </div>
  )
}

export default Home