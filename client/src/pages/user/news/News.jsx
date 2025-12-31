import React from 'react'
import Newshero from './Newshero'
import News2 from './News2'
import News3 from './News3'
import News4 from './News4'
import SvgiNews from './SvgiNews'
import SocialIcons from './SocialIcons'
import Ranking from './Ranking'
import Milo from './Milo'
const News = () => {
  return (
    <div>
      <Newshero />
      <Ranking />
      <News2 />
      <Milo />
      <News3 />
      <News4 />
      <SvgiNews />
      <SocialIcons />
    </div>
  )
}

export default News