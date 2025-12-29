import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sports from './Sports'
import CampusOverview from './CampusOverview'
import Hostel from './Hostel'
import Health from './Health'
import CollegeFest from './CollegeFest'
import Green from './Green'
import Policies from './Policies'
import StudentWelfare from './StudentWelfare'
import OurDiamonds from './OurDiamonds'
const Campuslife = () => {
  return (
    <div>
      <Routes>
        <Route index element={<CampusOverview/>}/>
      <Route path="overview" element={<CampusOverview/>}/>
      <Route path="sports" element={<Sports/>}/>
      <Route path="hostel" element={<Hostel/>}/>
      <Route path='health' element={<Health/>}/>
      <Route path='fest' element={<CollegeFest/>}/>
      <Route path='green' element={<Green/>}/>
      <Route path='policies' element={<Policies/>}/>
      <Route path='welfare' element={<StudentWelfare/>}/>
      <Route path='diamond' element={<OurDiamonds/>}/>
      



      </Routes>
    </div>
  )
}

export default Campuslife