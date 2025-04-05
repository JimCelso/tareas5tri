const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');

playBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playBtn.innerHTML = '⏸️ Pausar'; // Cambiar el texto al de pausa
    } else {
        audioPlayer.pause();
        playBtn.innerHTML = '🎵 Reproducir'; // Cambiar el texto al de reproducir
    }
});


console.log ("YOU CAN'T EAT MONEY")
