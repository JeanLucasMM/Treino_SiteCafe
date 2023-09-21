const playButton = document.getElementById("play-button");
const audioPlayer = document.getElementById("audio-player");
const jukebox = document.querySelector(".Jukebox img");

playButton.addEventListener("click", () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.textContent = "Pausar";
    } else {
        audioPlayer.pause();
        playButton.textContent = "Tocar";
    }
    audioPlayer.addEventListener("play", () => {
        jukebox.classList.add("jukebox_danca");
    });
    
    audioPlayer.addEventListener("pause", () => {
        jukebox.classList.remove("jukebox_danca");
    });
});