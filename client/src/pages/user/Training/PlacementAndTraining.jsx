import React from 'react'
import PlacementProcess from './PlacementProcess'
import { Routes, Route } from "react-router-dom";
import Overview from './Overview';
import PlacementPage from './PlacementPage';
const PlacementAndTraining = () => {
  return (
    <div>


      <Routes>
        <Route index element={<Overview/>} />
        <Route path="placementprocess" element={<PlacementProcess/>} />
        <Route path="placementpage" element={<PlacementPage/>} />

      </Routes>
    </div>
  )
}

export default PlacementAndTraining