const videoContainer = document.getElementById("videoContainer");
 const form = document.getElementById("commentForm");
 const videocomments = document.getElementsByClassName("video__comments");
 const deleteBtn = document.querySelectorAll(".deleteBtn");

  const addComment = (text,newCommentId) =>{
    const videoComments = document.querySelector(".video__comments ul");
    const newComment = document.createElement("li");
    newComment.dataset.id = newCommentId;
    newComment.className = "video__comment";
    console.log("newcomment:", newComment);
    const icon = document.createElement("i");
    icon.className = "fas fa-comment";
    console.log("icon:", icon);
    const span = document.createElement("span");
    span.innerText =`${text}`;
    const span2 = document.createElement("span");
    span2.innerText = "x";
    console.log("span:", span);
    newComment.appendChild(icon);
    newComment.appendChild(span);
    newComment.appendChild(span2);
    console.log(newComment);
    videoComments.prepend(newComment);
  }
  const deleteComment = (event) => {
    const commentContainer = document.querySelector(".video__comments ul");
    const commentList = event.target.parentNode;
    commentContainer.removeChild(commentList);
  }
 const handleSubmit = async (event) => {
   event.preventDefault();
   const textarea = form.querySelector("textarea");
   const text = textarea.value;
   const videoId = videoContainer.dataset.id;
   if (text === "") {
     return;
   }
   const response = await fetch(`/api/videos/${videoId}/comment`, {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
       //string을 object로 바꾸어주기 위해서 json을 사용하도록 함
    },
    body: JSON.stringify({ text }),
  });
  textarea.value = "";
  const {newCommentId} = await response.json();
  if (response.status === 201) {
    addComment(text,newCommentId);
  }

};
const handleDelete = async (event) => {
  const commentList = event.target.parentNode;
  const commentId = commentList.dataset.id;
  const videoId = videoContainer.dataset.id;
  const response = await fetch(`/api/comments/${commentId}/delete`,{
      method:"DELETE",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        videoId,
      })
  });
  if (response.status === 201) {
    deleteComment(event);
  }
  if (response.status === 403) {
    alert("댓글 주인이 아님");
  }
} 
if (form) {
  form.addEventListener("submit", handleSubmit);
}
for (let i =0; i<deleteBtn.length; i++) {
  deleteBtn[i].addEventListener("click",handleDelete);
}