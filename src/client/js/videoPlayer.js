const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const muteBtn = document.getElementById("mute");
const volumeRange = document.getElementById("volume");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");
const timeline = document.getElementById("timeline");


let volumeValue = 0.5;
video.volume = volumeValue;

const handlePlayClick = (e) => {
    //클릭 시, 비디오가 플레이되고 있다면 멈춤∂    
    //플레이 되고 있지 않다면 비디오를 재생시킴
    if(video.paused){
        video.play();
    }
    else {
        video.pause();
    }
    playBtn.innerText = video.paused ? "play" : "pause";
};

const handleMute = (e) => {
    if (video.muted) {
        video.muted = false;

    }
    else {
        video.muted = true;
    }
    muteBtn.innerText = video.muted ? "unmute" : "mute";
    volumeRange.value = video.muted ? "0" : volumeValue;
};

const handleVolumeBar = (e) => {
    const {target: {value}} = e;
    if(video.muted) {
        video.muted = false;
        muteBtn.innerText = "mute";
    }
    volumeValue = value;
    video.volume = value;
};

const formatTime = (seconds) => new Date(seconds *1000).toISOString().substr(14,5);

const handleLoadedMetadata = () => {
    totalTime.innerText = formatTime(Math.floor(video.duration));
    timeline.max = Math.floor(video.duration);
};

const handleTimeUpdate = () => {
    currentTime.innerText = formatTime(Math.floor(video.currentTime));
    timeline.value = Math.floor(video.currentTime);
}

const handleTimelineChange = (e) => {
    const {target: {value}}= e;
    video.currentTime = value;
}

playBtn.addEventListener("click", handlePlayClick);
muteBtn.addEventListener("click", handleMute);
volumeRange.addEventListener("input", handleVolumeBar);
video.addEventListener("loadedmetadata", handleLoadedMetadata);
video.addEventListener("timeupdate", handleTimeUpdate);
timeline.addEventListener("input", handleTimelineChange);