# 유튜브 클론코딩(Wetube Clone Coding)


## Period

 > 2022.01-2022.02

## Explanation
  - nomadcoders의 유튜브 클론코딩을 보고 nodejs와 express를 공부하는 목적으로 만든 clonecoding 프로젝트
  - 유튜브의 전반적인 기능 (비디오 업로드, 댓글, 유저 프로필, 비디오 실행 등) 을 Express Router와 Middleware들로 만들어보았음.
  - heroku 서버를 연결하고 AWS를 사용하여 업로드된 파일을 관리할 수 있도록 함.

## Teck Stack


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

### HomePageLink
  https://hamstertube.herokuapp.com
