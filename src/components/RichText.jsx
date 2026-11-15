import React from 'react';

// yaml 본문 텍스트를 화면용으로 바꾼다.
// 줄바꿈 1번 → 줄바꿈, 빈 줄 → 문단 간격, **굵게** → 굵은 글씨
const renderInline = (line, keyPrefix) =>
  line.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={`${keyPrefix}-${i}`}>{part.slice(2, -2)}</strong>
    ) : (
      <React.Fragment key={`${keyPrefix}-${i}`}>{part}</React.Fragment>
    )
  );

const RichText = ({ text }) => {
  if (!text) return null;
  const lines = text.split('\n');
  return (
    <p>
      {lines.map((line, i) => (
        <React.Fragment key={i}>
          {i > 0 && <br />}
          {renderInline(line, i)}
        </React.Fragment>
      ))}
    </p>
  );
};

export default RichText;
