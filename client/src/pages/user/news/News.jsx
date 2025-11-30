import React from 'react'
import Newshero from './Newshero'
import News2 from './News2'
import News3 from './News3'
import News4 from './News4'
import NewsPaper from './NewsPaper'
import SvgiNews from './SvgiNews'
import SocialIcons from './SocialIcons'
const News = () => {
  return (
    <div>
        <Newshero/>
        <News2/>
        <News3/>
        <News4/>
        {/* <NewsPaper/> */}
        <SvgiNews/>
        <SocialIcons/>
    </div>
  )
}

export default News