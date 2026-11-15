# content — 사이트 내용 폴더

사이트에 보이는 글 · 이미지는 전부 여기서 고친다. `src/` 코드는 건드리지 않아도 된다.
고친 뒤 `npm run dev`로 확인하고, `npm run deploy`로 배포한다.

```
content/
├─ cv/
│  └─ cv.yaml              Profile 페이지 (이름 · 연락처 · 학력 · 경력 · 수상 …)
└─ projects/
   ├─ design/              메인 화면 "Design Work" 섹션
   │  ├─ category.yaml     섹션 이름(title) · 섹션 순서(order)
   │  └─ <프로젝트-id>/     폴더 이름이 주소가 됨 → #/project/<프로젝트-id>
   │     ├─ project.yaml   제목 · 설명 · 순서 · 페이지 구성
   │     ├─ images/        사이트에 올라가는 이미지 (이 폴더 안 이미지는 전부 배포됨)
   │     └─ *.pdf          다운로드용 파일 (예: 논문)
   └─ planning/            메인 화면 "Planning Work"(기획) 섹션
```

- 프로젝트를 다른 섹션으로 옮기려면 폴더째 `design/` ↔ `planning/`로 옮기면 된다. 주소는 그대로.
- 새 섹션이 필요하면 `projects/` 안에 폴더를 만들고 `category.yaml`을 넣는다.
- 프로젝트 id(폴더 이름)는 섹션이 달라도 겹치면 안 된다.
- 로컬 서버(`npm run dev`)가 켜져 있으면 Windows에서 폴더 이동이 막힐 수 있다 → 서버를 끄고 옮긴다.

## 한국어 / 영어

- 사이트 오른쪽 위 `EN / KO`로 전환. 고른 언어는 브라우저에 기억된다.
- 한국어 링크 공유: 주소에 `?lang=ko` → `…/kyeongseok_lee/?lang=ko#/profile`
- 각 yaml(cv · project · category) 맨 아래 `ko:` 아래에 한국어 값을 쓴다. 영문과 **같은 이름**의 값을 한국어 화면에서 대신한다.
  `ko:`에 없는 값은 영문 그대로 나온다 (예: 갤러리 · 영상 구성은 한 번만 쓰면 됨).
- CV의 `ko:`에는 `sections` 전체를 한국어로 다시 쓴다 (섹션 · 항목 순서도 여기서 따로 정해짐).
- `meta`는 항목 이름까지 한국어로 쓴다: `유형:`, `역할:`, `기간:`, `도구:`
- 메뉴 · 버튼 문구는 `src/i18n.jsx`에 있다.

## CV 고치기 — `cv/cv.yaml`

- 섹션 추가: `sections:` 아래에 `- title: ...` 와 `items:` 를 추가
- 항목: `title`(필수), `date`, `role`
- 숫자만 있는 날짜는 따옴표로 감싼다: `date: '2024'`
- 포트폴리오 PDF 다운로드 버튼은 `public/portfolio.pdf` 파일을 가리킨다.

## 프로젝트 추가하기

1. `projects/design/` 또는 `projects/planning/` 안에 새 폴더 (영문 소문자 · 하이픈, 예: `u-bus`)
2. `images/`에 썸네일 `<폴더이름>_thumbnail.jpg` 와 갤러리 이미지 (`final1.jpg`, `final2.jpg` …)
3. 다른 프로젝트의 `project.yaml`을 복사해서 고치기
4. **`npm run images`** — 새 사진을 긴 변 2400px · WebP로 줄인다 (원본은 `PROJ_Archive/98_Source/Website_Originals/`로 옮겨짐). 고화질 원본을 그대로 두면 사이트 로딩이 느려진다. 이미 줄인 사진은 건너뛴다

## project.yaml 항목

```yaml
title: 제목
subtitle: 부제
year: 2026
date: '2026-06'     # All Work 최신순 정렬용 (끝난 달). 같은 달이면 카테고리 순서 → order
start: '2026-03'    # 시작한 달 (없으면 카드에 date 한 달만). 카드 위에 "2026.03 – 2026.06"
ongoing: true       # 진행 중이면 끝 날짜 대신 Present / 현재 (date 는 정렬용 예정 종료월)
tags: [Course Project, LG Electronics Collaboration]   # 카드 제목 아래 줄. 수업 · 개인 · 연구 · 논문 발표 · 실무 · 인턴 등
                    # 한국어는 ko: 아래 tags 로 따로. 첫 항목은 Research · Course Project 처럼 종류 (카테고리 이름은 붙이지 않음)
order: 1            # 섹션(Design / Planning) 안 순서 (작을수록 앞)
hidden: true        # (선택) 목록에서 숨기기
thumbnail_position: top   # (선택) 썸네일 잘리는 위치
summary: 한두 문장 요약    # (선택) 썸네일에 마우스 올리면 뜨는 설명. 없으면 description 첫 문단
hover_color: '#86b8d8'    # (선택) 마우스 올렸을 때 카드 색. 없으면 썸네일 평균색 자동

meta:               # 순서대로 "Type: ..." 줄로 표시. 항목 이름은 자유
  Type: Personal Project
  Role: ...
  Period: ...
  Tools: ...

description: |      # 줄바꿈 그대로 표시, 빈 줄 = 문단 간격, **굵게**
  첫 문단

  둘째 문단

blocks:             # 설명 아래에 위에서부터 차례로 표시
  - gallery: final             # images/final1, final2 … 슬라이드
  - gallery: process
    divider: true              # (선택) 위에 구분선
    fit: contain               # (선택) 세로로 긴 이미지(휴대폰 화면 등)를 자르지 않고 전체 표시
  - video: YouTube영상ID        # 큰 영상 1개
  - videos: [ID1, ID2]         # 영상 여러 개 격자
  - media:                     # 영상 + 다운로드 카드 나란히
      - video: YouTube영상ID
        label: Video
      - file: paper.pdf        # 이 프로젝트 폴더 안의 pdf
        thumbnail: paper_thumb # images/paper_thumb.png
        label: Paper
  - video_groups:              # 장소별 영상 묶음
      - name: 장소 이름
        address: 주소
        videos: [ID1, ID2]
  - credit:                    # 한 줄 = 한 행, 항목 사이 | 구분선
      - ["항목 1", "항목 2"]
```

YouTube 영상 ID = 주소 `youtube.com/watch?v=` 뒤의 11자리.

## 기타

- 사이트에 안 쓰는 사진은 여기 두지 말고 `PROJ_Archive/98_Source/Website_Originals/`에 둔다 (git 저장소가 공개라 커밋되면 누구나 볼 수 있음). 예: Why Design 안 쓰는 전시 사진 → `98_Source/Website_Originals/planning/why-design/unused/`
