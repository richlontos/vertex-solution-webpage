// import logo from './logo.svg';
import React, { useEffect, useContext } from 'react';
import './App.css';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import Test from './pages/Test';
import Faq from './pages/Faq';
// import Services from './pages/Services';
import WhatOffer from './pages/WhatOffer';
import HomeServices from './pages/Services';
import LTLServices from './pages/LTLServices';
import RailServices from './pages/RailServices';
import AirServices from './pages/AirServices';
import OceanServices from './pages/OceanServices';
import WarehouseServices from './pages/WarehouseServices';
import VolumesServices from './pages/VolumeServices';
import './components/serviceFolder/ServicesTest.css'
import CarriersTab from './pages/CarriersTab';

import { CursorContext } from './context/CursorContext';
import { motion } from 'framer-motion';
import AOS from "aos"
import "aos/dist/aos.css"
import ContactUs from './pages/ContactUs';
import Resources from './pages/Resources';
import OurServices from './components/OurServices';
import Careers from './pages/Careers';
import ResourcesTab from './components/Resources/ResourcesTab';


function App() {
  const { cursorVariants, cursorBG } = useContext(CursorContext);
 //aos
 useEffect(() => {
  AOS.init()
  AOS.refresh()
}, [])
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/test' element={<Test />}></Route>
        <Route path='/carriers' element={<CarriersTab />}></Route>
        <Route path='/services' element={<HomeServices />}></Route>
        <Route path='/servicesLTL' element={<LTLServices />}></Route>
        <Route path='/careers' element={<Careers />}></Route>
        <Route path='/contactus' element={<ContactUs />}></Route>
        <Route path='/ourservices' element={<OurServices />}></Route>
        <Route path='/RailServices' element={<RailServices />}></Route>
        <Route path='/AirServices' element={<AirServices />}></Route>
        <Route path='/OceanServices' element={<OceanServices />}></Route>
        <Route path='/VolumePartial' element={<VolumesServices />}></Route>
        <Route path='/WarehouseServices' element={<WarehouseServices />}></Route>
        <Route path='/offer' element={<WhatOffer />}></Route>
        <Route path='/faq' element={<Faq />}></Route>
        <Route path='/resources' element={<Resources />}></Route>

      </Routes>
      <Footer />
      <motion.div
        variants={cursorVariants}
        animate={cursorBG}
        className='w-[32px] h-[32px] mousePoint  fixed top-0 left-0 pointer-events-none z-50 rounded-full'
      ></motion.div>
    </div>
  );
}

export default App;
