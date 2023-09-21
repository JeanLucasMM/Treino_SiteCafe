const playButton = document.getElementById("play-button");
const audioPlayer = document.getElementById("audio-player");

playButton.addEventListener("click", () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.textContent = "Pause";
    } else {
        audioPlayer.pause();
        playButton.textContent = "Play";
    }
});