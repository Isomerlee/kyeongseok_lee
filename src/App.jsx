import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ProjectPage from './pages/ProjectPage';

// /            첫 페이지 (이름)
// /projects    프로젝트 목록 (All Work), ?filter=design / planning
// /profile     CV
// /project/:id 프로젝트 상세
function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
