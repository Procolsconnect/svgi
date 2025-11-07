import React from 'react'
import Slider from './Slider'
import Instution from './Achievement'
import Leadership from './Leadership'
import Swiper_svgi from './Swiper_svgi'
import WhySvg from './WhySvg'
import Infra from './Infra'
const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <Instution/>
      <Leadership />
      <Swiper_svgi />
      <WhySvg />
      <Infra />
    </div>
  )
}

export default Home