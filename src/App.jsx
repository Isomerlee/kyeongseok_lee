import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ProjectNavatar from './projects/navatar';
import ProjectDrift from './projects/drift';
import ProjectLGOven from './projects/lg-oven';
import ProjectSauceRadio from './projects/sauce-radio';
import ProjectHururukParty from './projects/hururuk-party';
import ProjectWhyDesign from './projects/why-design';
import ProjectOeum from './projects/oeum';
import ProjectIndustrialCity from './projects/industrial-city';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/project/navatar" element={<ProjectNavatar />} />
          <Route path="/project/drift" element={<ProjectDrift />} />
          <Route path="/project/lg-oven" element={<ProjectLGOven />} />
          <Route path="/project/sauce-radio" element={<ProjectSauceRadio />} />
          <Route path="/project/hururuk-party" element={<ProjectHururukParty />} />
          <Route path="/project/why-design" element={<ProjectWhyDesign />} />
          <Route path="/project/oeum" element={<ProjectOeum />} />
          <Route path="/project/industrial-city" element={<ProjectIndustrialCity />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
