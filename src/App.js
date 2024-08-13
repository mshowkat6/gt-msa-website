import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; 
import Home from './components/screens/Home';
import About from './components/screens/About';
import Events from './components/screens/Events';
import PrayerInfo from './components/screens/PrayerInfo';
import AbtIslam from './components/screens/AbtIslam';
import Volunteering from './components/screens/Volunteering';
import HalalFood from './components/screens/HalalFood';
import Donate from './components/screens/Donate';
import Resources from './components/screens/Resources';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path = '/' exact element = {<Home/>} />
        <Route path = '/about' exact element = {<About/>} />
        <Route path = '/events' exact element = {<Events/>} />
        <Route path = '/prayer-information' exact element = {<PrayerInfo/>} />
        <Route path = '/abt-islam' exact element = {<AbtIslam/>} />
        <Route path = '/volunteering' exact element = {<Volunteering/>} />
        <Route path = '/halal-food' exact element = {<HalalFood/>} />
        <Route path = '/donate' exact element = {<Donate/>} />
        <Route path = '/resources' exact element = {<Resources/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;