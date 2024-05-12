# LottoSmithy

## 프로젝트 소개

LottoSmithy는 로또 번호 생성을 도와주는 웹사이트입니다. 이 웹사이트를 통해 고민 많은 로또 번호 생성에서 벗어나 편리하게 로또 번호를 생성하고 이를 통해 당첨되기를 바랍니다. LottoSmithy는 쉬운 인터페이스와 6가지의 번호 생성 옵션을 제공하여 로또 번호 생성의 다양성을 제공합니다.

## 사용 기술

LottoSmithy는 다음과 같은 기술 스택을 사용합니다:

- Next.js 14.1.4
- React 18
- TypeScript 5
- Sass 1.72.0

## 폴더 구조

LottoSmithy의 폴더 구조는 다음과 같이 구성되어 있습니다:

lotto-smithy-ver2
├─ .eslintrc.json
├─ .gitignore
├─ .prettierrc.json
├─ app
│ ├─ favicon.ico
│ ├─ globals.css
│ ├─ layout.tsx
│ ├─ lib
│ │ ├─ definitions
│ │ │ ├─ interfaces.ts
│ │ │ └─ types.ts
│ │ ├─ extractionControl.ts
│ │ ├─ extractionLogic.ts
│ │ └─ utils
│ │ └─ useInterval.ts
│ ├─ lotto
│ │ ├─ lotto.module.scss
│ │ ├─ lottoClient.tsx
│ │ └─ page.tsx
│ ├─ page.module.css
│ ├─ page.tsx
│ ├─ styles
│ │ ├─ reset.css
│ │ └─ variables.css
│ └─ ui
│ ├─ header
│ │ ├─ countdown.tsx
│ │ ├─ header.module.scss
│ │ ├─ header.tsx
│ │ └─ reward.tsx
│ ├─ lotto
│ │ ├─ balls
│ │ │ ├─ ball.module.scss
│ │ │ └─ balls.tsx
│ │ ├─ lottoNumGenerator
│ │ │ ├─ lottoNumGenerator.module.scss
│ │ │ └─ lottoNumGenerator.tsx
│ │ ├─ savedLottoModal
│ │ │ ├─ savedLottoModal.module.scss
│ │ │ └─ savedLottoModal.tsx
│ │ ├─ showGeneratedLotto
│ │ │ ├─ showGeneratedLotto.module.scss
│ │ │ └─ showGeneratedLotto.tsx
│ │ └─ suggestionLotto
│ │ ├─ suggestionLotto.module.scss
│ │ └─ suggestionLotto.tsx
│ └─ paging
│ ├─ paging.module.scss
│ └─ paging.tsx
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ public
│ └─ black-sand-common-size.jpg
├─ README.md
└─ tsconfig.json

컴포넌트, 스타일, 유틸리티 등을 기능별로 분리하여 코드의 가독성과 유지보수성을 생각했습니다.

## 향후 계획

LottoSmithy는 지속적인 업데이트와 개선을 할 예정입니다. 향후 추가될 기능은 다음과 같습니다:

- 사용자 계정 및 로그인 기능
- 당첨 번호 히스토리 및 통계 제공
- 모바일 앱 개발
