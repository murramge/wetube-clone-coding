router 설정

url 플랜 짜기
플랜을 짤 때는 진짜 유저 입장에서 짜야 한다.

(global router)

/ → 이것은 Homepage가 될 것이다.
/join → 회원가입할 때 Join이다.
/login → 로그인을 하기 위한 login 페이지이다.
/Search → 검색 페이지인 Search 이다. /video 검색

(user router)

/users/:id -> 유저의 프로필을 본다. 프로필을 갈 수 있다.
/users/logout -> 유저 로그아웃
(현재 로그인 중인 유저에게만 가능하게)
/users/edit → 유저가 프로필을 수정하는 페이지이다.
/users/delete → 유저가 프로필을 삭제하는 페이지이다.

(video router)
동영상 시청 -> 소유자면 수정 / 삭제 -> 누구나 로그인하면 동영상 업로드
비디오시청의 url에서 동영상도 보고, 댓글도 쓰고 좋아요도 할 것임. 같은 url에서
/videos/:id → 동영상 시청 페이지이다. /동영상의 :id
/videos/:id/edit → 동영상 수정 페이지이다. 
/videos/:id/delete → 동영상 삭제 페이지이다. (작성자만이 수정하거나 지울 수 있다.)
/videos/upload -> upload video 


<!-- /videos/comment → 동영상 댓글 페이지이다 
/videos/comments/delete → 동영상 댓글 삭제 페이지이다. -->