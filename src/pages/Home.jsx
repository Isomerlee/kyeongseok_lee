import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { getCategories, getTimeline } from '../content';
import { useLang } from '../i18n';

// 상단 바 메뉴가 정한다: #/projects (All Work) · #/projects?filter=design · #/projects?filter=planning
// All Work = 디자인 · 기획 섞어서 최신순, 작은 카드 6열
// 카테고리 = 그 카테고리만, 큰 카드 3열
const Home = () => {
  const { lang } = useLang();
  const [params] = useSearchParams();
  const categories = getCategories(lang);
  const category = categories.find((c) => c.key === params.get('filter'));

  if (!category) {
    return (
      <div className="projects-page">
        <div className="projects-grid projects-grid--dense">
          {getTimeline(lang).map((project) => (
            <ProjectCard key={project.id} project={project} dense />
          ))}
        </div>
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
