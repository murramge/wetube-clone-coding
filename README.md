# 유튜브 클론코딩(Wetube Clone Coding)


## Period

 > 2022.01-2022.02

## Project History
##### You can see more about the project. ->  <a href="https://www.notion.so/daram-daram/wetube-note-5ce971e7d82c4f0fa62f07a469e6a640"><img src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=Notion&logoColor=white&link=https://www.notion.so/daram-daram/wetube-note-5ce971e7d82c4f0fa62f07a469e6a640"/>
## Explanation
  - nomadcoders의 유튜브 클론코딩을 보고 nodejs와 express를 공부하는 목적으로 만든 clonecoding 프로젝트
  - 유튜브의 전반적인 기능 (비디오 업로드, 댓글, 유저 프로필, 비디오 실행 등) 을 Express Router와 Middleware들로 만들어보았음.
  - heroku 서버를 연결하고 AWS를 사용하여 업로드된 파일을 관리할 수 있도록 함.

## Teck Stack
 <p align="center">
     <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/></a>&nbsp
     <img src="https://img.shields.io/badge/Pug-A86454?style=flat-square&logo=Pug&logoColor=white"/></a>&nbsp
     <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"/></a>&nbsp
     <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white"/></a>&nbsp
     <img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white"/></a>&nbsp
     <img src="https://img.shields.io/badge/Babel-F9DC3E?style=flat-square&logo=Babel&logoColor=white"/></a>&nbsp
     <img src="https://img.shields.io/badge/Webpack-8DD6F9?style=flat-square&logo=Webpack&logoColor=white"/></a>&nbsp

## About Project 

### Router 
   프로젝트에 알맞게 url의 정의와 url이 클라이언트 요청에 응답하는 방식을 구현
 #### rootRouter
 프로젝트에서 제일 root로 사용이 되는 router이다. url이 정의될 때 라우터의 첫 페이지가 / 이다.

       / -> 서버로 들어갔을 때 가장 처음 보일 수 있는 페이지이다. home 라우터이다.
       /join -> 회원가입을 할 수 있는 라우터이다.
       /login -> 로그인을 할 수 있는 라우터이다.
       /search -> video를 검색할 수 있는 라우터이다.
  #### userRouter
  프로젝트에서 유저 관련으로 사용이 되는 router이다. url이 정의될 때 라우터의 첫 페이지가 /user 이다.
  
       /user/logout -> 유저가 로그아웃을 할 수 있도록 구성한 라우터이다.
       /user/edit -> 유저가 유저의 프로필을 바꿀 수 있도록 구성한 라우터이다.
       /user/:id -> 유저의 개인 정보를 볼 수 있는 라우터이다. (유저가 어떤 비디오를 올렸는 지)
       /user/change-password -> 유저의 패스워드를 바꿀 수 있도록 만들었다.
       /user/github/start -> 유저의 github로 들어가서 로그인 할 수 있도록 만든 라우터이다.
       /user/github/finish -> 유저의 github 로그인이 끝났을 때 연결할 수 있도록 만든 라우터이다.
 ####  videoRouter
  프로젝트에서 비디오 관련으로 사용 되는 router이다. url이 정의될 때 라우터의 첫 페이지가 /video 이다.
     
       /video/:id -> 유저가 만든 비디오를 볼 수 있도록 비디오 id를 받아서 구성한 라우터이다.
       /video/:id/edit -> 만든 비디오의 제목, 설명 등을 수정할 수 있도록 한 라우터이다.
       /video/:id/delete -> 만든 비디오를 삭제할 수 있도록 한 라우터이다.
       /video/upload -> 비디오를 업로드 할 수 있도록 한 라우터이다.

### Preview

<img src="https://user-images.githubusercontent.com/60298173/165348645-a1a9e476-cfab-44f1-8ebe-c1c72b70ebc3.png" width="1200" height="400">

> wetube의 메인 화면이다
<div style="display:flex">
<div style="display:inline-block">
<img src="https://user-images.githubusercontent.com/60298173/165348597-0a77b298-8f35-4202-b5f4-55bbb86296b7.png" width="450" height="350">
 <img src="https://user-images.githubusercontent.com/60298173/165348610-ecdcb721-f699-4078-8f2e-614fa3bdf1fb.png" width="450" height="350">
</div>
</div>

> 회원가입과 로그인 화면이다.

<img src="https://user-images.githubusercontent.com/60298173/165348585-907354b8-7952-4a16-9d32-382285352f49.png" width="600" height="400">

> 유저의 정보를 변경하는 edituser 화면이다.
<div style="display:flex">
<div style="display:inline-block">
<img src="https://user-images.githubusercontent.com/60298173/165348505-18324ed0-630a-4097-866c-0be2c9b25524.png" width="450" height="350">
 <img src="https://user-images.githubusercontent.com/60298173/165348591-51309910-c108-476b-8ba1-9bfdf97ccf3f.png" width="450" height="350">
</div>
 </div>

> 비디오를 upload 하고 수정할 수 있는 화면이다.

<img src="https://user-images.githubusercontent.com/60298173/165348714-11e1ba6a-1115-4f85-8b60-2bc5791ed770.png" width="800" height="700">

> 비디오를 보고 댓글을 달 수 있는 화면이다.

    
### HomePageLink
  https://hamstertube.herokuapp.com
> test용 아이디 : test1 비밀번호 : 0000
