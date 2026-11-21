import React, { useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
  const location = useLocation();

  // 화면 전환: 주소(경로 + ?filter)가 바뀌면 맨 위로 올리고, <main>을 새로 그려
  // 등장 애니메이션을 다시 돌린다 (index.css "화면 전환")
  const pageKey = location.pathname + location.search;
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pageKey]);

  return (
    <div className="app-container">
      <Navbar />
      <main key={pageKey} className="page-transition">
        <Routes location={location}>
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
