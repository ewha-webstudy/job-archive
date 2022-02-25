# JOB-ARCHIVE

## Introduction
JOB-ARCHIVE는 개발자를 위한 채용공고 사이트입니다. **프론트엔드, 백엔드, 데이터분석**, 총 세 가지 분야로 채용공고를 분류해 각 분야에 관심있는 미래 개발자를 위해 서비스를 제공합니다. ([워크넷 채용정보 API](https://openapi.work.go.kr/opiMain.do)로부터 데이터를 제공받았습니다.)
#### 메인페이지
JOB-ARCHIVE의 메인페이지는 3가지 분야를 선택하는 버튼과 검색창이 처음으로 보입니다. 상단에는 바로 카테고리 페이지로 이동할 수 있는 네비게이션바와 로그인버튼이 있습니다. 첫 화면에서 스크롤을 내리면 가장 최근에 등록된 채용공고 9개를 확인할 수 있습니다.
#### 카테고리 페이지
사용자는 각 분야별 페이지에서 총 5가지 태그를 이용해 필터링 검색을 할 수 있고 검색어를 입력하여 검색할 수 있습니다. 태그로는 기술스택, 경력, 연봉, 지역, 학력이 있어 맞춤형 검색이 가능합니다. 
#### 상세 페이지
각 채용공고 별 모집 상세 내용이 있는 상세 페이지입니다. 기업 정보, 채용 상세 정보뿐만 아니라 마감일자까지 남은 일수도 확인이 가능합니다. '홈페이지 지원하기' 버튼으로 워크넷 홈페이지에 접속이 가능합니다.
#### 마이페이지
총 3가지로 구성되어있습니다. 첫번째로 기본적인 프로필을 확인 및 수정할 수 있고 두번째로 관심 목록에 대한 이메일 알림을 설정할 수 있습니다. 마감일자에 대해 며칠 전에 알림을 받을지 또한 설정 가능합니다. 마지막으로 관심 목록을 한눈에 확인할 수 있습니다.

## Demo

## Software
|         Frontend         |      Backend      |         etc          |
| :----------------------: | :---------------: | :------------------: |
| ![react](https://img.shields.io/badge/React-v17.0.2-61DAFB?logo=react) ![Javascript](https://img.shields.io/badge/Javascript-ES6+-F7DF1E?logo=javascript) ![Grommet](https://img.shields.io/badge/Grommet-v2.17.4-7952B3?color=764ed3) ![axios](https://img.shields.io/badge/axios-v0.21.1-9cf?color=purple) ![Redux](https://img.shields.io/badge/redux-v4.1.1-764ABC?logo=redux) ![Styled-components](https://img.shields.io/badge/styled_components-v5.3.0-DB7093?logo=styled-components) | ![Express](https://img.shields.io/badge/express-v4.17.1-white?logo=express) ![Node.js](https://img.shields.io/badge/Node.js-v14.17.5-339933?logo=node.js) ![Sequelize](https://img.shields.io/badge/seqeulize-v6.6.5-52B0E7?logo=sequelize) ![nodemailer](https://img.shields.io/badge/nodemailer-v6.6.3-EA4335?logo=gmail) ![MySQL](https://img.shields.io/badge/MySQL-v8.0.23-4479A1?logo=mysql) | ![github](https://img.shields.io/badge/Github-gray?logo=github) ![notion](https://img.shields.io/badge/Notion-gray?logo=notion) ![swagger](https://img.shields.io/badge/Swagger-grey?logo=swagger) ![postman](https://img.shields.io/badge/Postman-grey?logo=postman)|


## Features
- 회원가입 및 로그인
- 토큰을 사용하여 로그인한 사용자 관리
- 카테고리(프론트엔드, 백엔드, 데이터분석)별 페이지
- 카테고리별 태그(기술스택, 경력, 연봉, 지역, 학력) 검색
- 카테고리별 텍스트 검색
- 채용공고 저장 및 저장목록 관리
- 저장목록의 마감일자에 대한 이메일 알림 설정
- MySQL과 Sequelize로 데이터 관리


## How to get started
```
$ git clone https://github.com/ewha-webstudy/job-archive.git

// 채용공고 데이터 저장 (backend/config/config.json에 MySQL 서버 세팅값 입력)
$ cd backend/database
$ node code

// 백엔드 서버 실행
$ cd backend
$ npm i && npm start

// 프론트엔드 서버 실행
$ cd frontend
$ npm i && npm start
```

## DB & API Specification
#### DB
https://marmalade-newsboy-581.notion.site/DB-Spec-6a83b5406dc94ce3ae6a1b71bcfbd65b
#### API
https://marmalade-newsboy-581.notion.site/API-Spec-9b26946665df4d0b99e6a5ceeb155392

## Contributers
|FRONTEND|장효신([**@hyosin-Jang**](https://github.com/hyosin-Jang))|김주현([**@corinthionia**](https://github.com/corinthionia))|변규리([**@byungyurii**](https://github.com/byungyurii))|
| :----------------------: | :----------------------: | :----------------------: | :----------------------: |
|DETAIL| 메인페이지, 상단 네비게이션 | 로그인 및 회원가입 페이지, 마이페이지 | 카테고리별 페이지, 상세페이지 |

|BACKEND|김하연([**@haayun**](https://github.com/haayun))|공지나([**@JinaKong**](https://github.com/kongjn))|조서영([**@stellajo99**](https://github.com/stellajo99))|이희원([**@Tina-223**](https://github.com/Tina-223))|
| :----------------------: | :----------------------: | :----------------------: | :----------------------: | :----------------------: |
|DETAIL| 채용공고 관련 REST API 구현 | 사용자 관련 REST API 구현 | 데이터베이스 스키마, 오픈 API를 활용하여 데이터베이스 구축 | 데이터베이스 스키마, 오픈 API를 활용하여 데이터베이스 구축 |
