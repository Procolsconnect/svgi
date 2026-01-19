import React from 'react'
import PlacementProcess from './PlacementProcess'
import { Routes, Route } from "react-router-dom";
import Overview from './Overview';
import PlacementPage from './PlacementPage';
import CdcOffice from './CdcOffice';
import CdcTracker from './CdcTracker';

const PlacementAndTraining = () => {
  return (
    <div>


      <Routes>
        <Route index element={<Overview/>} />
        <Route path="placementprocess" element={<PlacementProcess/>} />
        <Route path="placementpage" element={<PlacementPage/>} />
        <Route path="cdcoffice" element={<CdcOffice/>} />
        <Route path="cdc-tracker" element={<CdcTracker/>} />

      </Routes>
    </div>
  )
}

export default PlacementAndTraining