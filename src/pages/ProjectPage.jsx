import React from 'react';
import { useParams, Link } from 'react-router-dom';
import HeroImage from '../components/HeroImage';
import RichText from '../components/RichText';
import ProjectBlocks from '../components/ProjectBlocks';
import { getProject } from '../content';
import { useLang } from '../i18n';

const ProjectPage = () => {
  const { id } = useParams();
  const { lang, t } = useLang();
  const project = getProject(id, lang);

  if (!project) {
    return (
      <div className="project-detail">
        <div className="project-header">
          <h1>{t('notFound')}</h1>
          <p className="project-subtitle">
            <Link to="/projects">{t('backToProjects')}</Link>
          </p>
        </div>
      </div>
    );
  }

  const metaEntries = Object.entries(project.meta);

  // key: 다른 프로젝트로 넘어가면 갤러리 상태를 새로 시작
  return (
    <div className="project-detail" key={project.id}>
      <div className="project-header">
        <h1>{project.title}</h1>
        <p className="project-subtitle">{project.subtitle}</p>
      </div>

      <HeroImage project={project} />

      <div className="project-content">
        <section>
          {metaEntries.length > 0 && (
            <div className="project-metadata" style={{ marginBottom: '1.5rem', color: 'var(--secondary-text)' }}>
              {metaEntries.map(([label, value]) => (
                <p key={label} style={{ marginBottom: '0.2rem' }}>
                  <strong>{label}:</strong> {String(value)}
                </p>
              ))}
            </div>
          )}
          <RichText text={project.description} />
        </section>

        <ProjectBlocks project={project} />
      </div>
    </div>
  );
};

export default ProjectPage;
