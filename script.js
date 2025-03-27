const video = document.getElementById('video');
const playIcon = document.getElementById('play');
const stopIcon = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//Play & pause video
function toggleVideoStatus(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}

// update play/pause icon
function updatePlayIcon(){
    if(video.paused)
    {
        playIcon.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    }else{
        playIcon.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

//Update progress & timestamp
function updateProgress(){
    return true;
}

//Set Video time to progress.
function setVideoProgress(){
    return true;
}

//Stop Video
function stopVideo(){
    video.currentTime = 0;
    video.pause();
}

//Event Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

playIcon.addEventListener('click',toggleVideoStatus);

stopIcon.addEventListener('click',stopVideo);

progress.addEventListener('change',setVideoProgress);
