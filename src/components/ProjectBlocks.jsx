import React from 'react';
import ImageGallery from './ImageGallery';
import YouTube from './YouTube';
import { useLang } from '../i18n';

const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' };
const videoBoxStyle = {
  backgroundColor: 'var(--border-color)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '4px',
  overflow: 'hidden',
};

const Gallery = ({ block, projectDir }) =>
  block.images.length > 0 ? (
    <ImageGallery images={block.images} fit={block.fit} />
  ) : (
    <div className="placeholder-box placeholder-hero" style={{ height: '300px' }}>
      '{projectDir}/images/' 폴더에 {block.gallery}1.jpg ~ {block.gallery}10.jpg 파일을 넣어주시면 갤러리가 나타납니다!
    </div>
  );

const PaperCard = ({ item }) => {
  const { t } = useLang();
  return (
  <a href={item.url} download={item.file} style={{ display: 'block', textDecoration: 'none' }}>
    <div
      className="placeholder-hero"
      style={{
        ...videoBoxStyle,
        marginBottom: '1rem',
        backgroundColor: 'var(--hover-bg)',
        border: '1px solid var(--border-color)',
        color: 'var(--text-color)',
        cursor: 'pointer',
        position: 'relative',
      }}
      onMouseEnter={(e) => {
        const overlay = e.currentTarget.querySelector('.download-overlay');
        if (overlay) overlay.style.opacity = '1';
      }}
      onMouseLeave={(e) => {
        const overlay = e.currentTarget.querySelector('.download-overlay');
        if (overlay) overlay.style.opacity = '0';
      }}
    >
      {item.thumbnailSrc ? (
        <img
          className="paper-thumb-img"
          loading="lazy"
          src={item.thumbnailSrc}
          alt={`${item.label || 'File'} Thumbnail`}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
        />
      ) : (
        <div style={{ padding: '2rem', textAlign: 'center', width: '100%' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📄</div>
          <h3 style={{ margin: 0, fontSize: '1.2rem' }}>{item.label || 'File'}</h3>
          {item.thumbnail && (
            <p style={{ margin: 0, marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--secondary-text)' }}>
              '{item.thumbnail}' 이미지를 넣어주세요
            </p>
          )}
        </div>
      )}
      <div
        className="download-overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(3px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: '0',
          transition: 'all 0.3s ease',
          fontWeight: '300',
          fontSize: '1.05rem',
          letterSpacing: '1px',
          color: '#ffffff',
          pointerEvents: 'none',
        }}
      >
        {t('clickToDownload')}
      </div>
    </div>
  </a>
  );
};

const Media = ({ block, title }) => (
  <div style={gridStyle}>
    {block.items.map((item, i) => (
      <div key={i}>
        {item.video ? (
          <div className="placeholder-hero" style={{ ...videoBoxStyle, marginBottom: '1rem' }}>
            <YouTube id={item.video} title={`${title} ${item.label || 'Video'}`} />
          </div>
        ) : (
          <PaperCard item={item} />
        )}
        <p style={{ textAlign: 'center', margin: 0, fontWeight: '400' }}>{item.label}</p>
      </div>
    ))}
  </div>
);

const Credit = ({ block }) => (
  <div className="credit-block">
    {block.lines.map((line, li) => (
      <React.Fragment key={li}>
        {li > 0 && <br className="desktop-only-br" />}
        {line.map((seg, si) => (
          <React.Fragment key={si}>
            {si > 0 && <span className="credit-separator">|</span>}
            <span className="credit-segment">{seg}</span>
          </React.Fragment>
        ))}
      </React.Fragment>
    ))}
  </div>
);

const VideoGroups = ({ block, title }) =>
  block.groups.map((group, gi) => (
    <div key={gi} style={{ marginBottom: '4rem' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{group.name}</h3>
        <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--secondary-text)', marginTop: '0.25rem' }}>{group.address}</p>
      </div>
      <div style={gridStyle}>
        {(group.videos || []).map((id, vi) => (
          <div key={vi} className="placeholder-hero" style={{ ...videoBoxStyle, marginBottom: 0 }}>
            <YouTube id={id} title={`${title} Video - ${group.name} ${vi + 1}`} />
          </div>
        ))}
      </div>
    </div>
  ));

// 블록 사이 간격: 기존 페이지 레이아웃과 같게 맞춤
const sectionStyle = (block, prev) => {
  if (block.type === 'gallery' && block.divider) {
    return { marginTop: '4rem', paddingTop: '4rem', borderTop: '1px solid var(--border-color)' };
  }
  if (block.type === 'gallery' && prev && prev.type === 'gallery') return { marginTop: '4rem' };
  if (block.type === 'media') return { marginTop: '3rem', marginBottom: '4rem' };
  return undefined;
};

const ProjectBlocks = ({ project }) => {
  const sections = [];
  project.blocks.forEach((block, i) => {
    const prev = project.blocks[i - 1];
    const key = `block-${i}`;
    let body;
    switch (block.type) {
      case 'gallery':
        body = <Gallery block={block} projectDir={project.dir} />;
        break;
      case 'media':
        body = <Media block={block} title={project.title} />;
        break;
      case 'video':
        body = (
          <div className="hero-image" style={{ borderRadius: '4px', overflow: 'hidden', backgroundColor: 'var(--border-color)', aspectRatio: '16/9', marginBottom: '4rem' }}>
            <YouTube id={block.id} title={`${project.title} Main Video`} />
          </div>
        );
        break;
      case 'videos':
        body = (
          <div style={{ ...gridStyle, marginTop: '2rem' }}>
            {block.ids.map((id, vi) => (
              <div key={vi} className="placeholder-hero" style={{ ...videoBoxStyle, marginBottom: 0, aspectRatio: '16/9' }}>
                <YouTube id={id} title={`${project.title} Video ${vi + 1}`} />
              </div>
            ))}
          </div>
        );
        break;
      case 'video_groups':
        body = <VideoGroups block={block} title={project.title} />;
        break;
      case 'credit':
        // 크레딧은 바로 앞 블록(보통 갤러리)과 같은 영역에 붙인다
        if (sections.length > 0) {
          const last = sections[sections.length - 1];
          last.children.push(<Credit key={key} block={block} />);
          return;
        }
        body = <Credit block={block} />;
        break;
      default:
        return;
    }
    sections.push({ key, style: sectionStyle(block, prev), children: [body] });
  });

  return sections.map((s) => (
    <section key={s.key} style={s.style}>
      {s.children.map((child, ci) => (
        <React.Fragment key={ci}>{child}</React.Fragment>
      ))}
    </section>
  ));
};

export default ProjectBlocks;
