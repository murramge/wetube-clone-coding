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
  - "/" -> 서버로 들어갔을 때 가장 처음 보일 수 있는 페이지이다. home 라우터이다.
  - "/join"
