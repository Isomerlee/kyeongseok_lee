import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ProjectNavatar from './pages/ProjectNavatar';
import ProjectDrift from './pages/ProjectDrift';
import ProjectLGOven from './pages/ProjectLGOven';

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
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
