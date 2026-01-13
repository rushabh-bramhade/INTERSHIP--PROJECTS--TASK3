let song = document.getElementById("song");
let progress = document.getElementById("progress");
let playBtn = document.getElementById("playBtn");
let currentTimeEl = document.getElementById("currentTime");
let durationEl = document.getElementById("duration");

// Load metadata
song.onloadedmetadata = function () {
    progress.max = song.duration;
    durationEl.innerText = formatTime(song.duration);
};

// Play / Pause
function playPause() {
    if (song.paused) {
        song.play();
        playBtn.innerText = "⏸";
    } else {
        song.pause();
        playBtn.innerText = "▶";
    }
}

// Update progress + current time
song.ontimeupdate = function () {
    progress.value = song.currentTime;
    currentTimeEl.innerText = formatTime(song.currentTime);
};

// Seek song
progress.oninput = function () {
    song.currentTime = progress.value;
};

// Time format (mm:ss)
function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    if (seconds < 10) seconds = "0" + seconds;
    return `${minutes}:${seconds}`;
}
