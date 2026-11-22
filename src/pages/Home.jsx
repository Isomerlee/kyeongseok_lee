import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import WorkTimeline from '../components/WorkTimeline';
import { getCategories } from '../content';
import { useLang } from '../i18n';

// 상단 바 메뉴가 정한다: #/projects (All Work) · #/projects?filter=design · #/projects?filter=planning
// All Work = 세로 연표 (components/WorkTimeline.jsx, 11/22 — 전엔 작은 카드 6열), 맨 위 여백 없음(.projects-page--timeline)
// 카테고리 = 그 카테고리만, 큰 카드 4열 (넓은 화면)
const Home = () => {
  const { lang } = useLang();
  const [params] = useSearchParams();
  const categories = getCategories(lang);
  const category = categories.find((c) => c.key === params.get('filter'));

  if (!category) {
    return (
      <div className="projects-page projects-page--timeline">
        <WorkTimeline />
      </div>
    );
  }

  return (
    <div className="projects-page">
      <section className="projects-section">
        <h2 className="projects-section-title">{category.title}</h2>
        <div className="projects-grid">
          {category.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
