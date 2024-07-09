import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import Home from './components/screens/Home';
import About from './components/screens/About';
import Events from './components/screens/Events';
import PrayerInfo from './components/screens/PrayerInfo';
import Apps from './components/screens/Apps';
import Volunteering from './components/screens/Volunteering';
import HalalFood from './components/screens/HalalFood';
import SignUp from './components/screens/SignUp';
import Resources from './components/screens/Resources';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path = '/' exact element = {<Home/>} />
        <Route path = '/about' exact element = {<About/>} />
        <Route path = '/events' exact element = {<Events/>} />
        <Route path = '/prayer-information' exact element = {<PrayerInfo/>} />
        <Route path = '/apps' exact element = {<Apps/>} />
        <Route path = '/volunteering' exact element = {<Volunteering/>} />
        <Route path = '/halal-food' exact element = {<HalalFood/>} />
        <Route path = '/sign-up' exact element = {<SignUp/>} />
        <Route path = '/resources' exact element = {<Resources/>} />
      </Routes>
    </Router>
  );
}

export default App;