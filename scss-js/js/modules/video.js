var video = document.getElementsByClassName("section3_video_noactive");
var i;
for (i = 0; i < video.length; i++) {
  video[i].addEventListener("click", function() {
    for (i = 0; i < video.length; i++) {
      video[i].className = video[i].className.replace(" section3_video_active", "");
    }
    this.classList.toggle("section3_video_active");
  });
}