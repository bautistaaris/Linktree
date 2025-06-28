document.addEventListener('DOMContentLoaded', () => {
    const audios = [
        document.getElementById('audio1'),
        document.getElementById('audio2'),
        document.getElementById('audio3'),
        document.getElementById('audio4'),
        document.getElementById('audio5')
    ];
    document.querySelectorAll('.btn').forEach((btn, i) => {
        btn.onclick = function() {
            audios.forEach((audio, j) => {
                if (i !== j) {
                    audio.pause();
                    audio.currentTime = 0;
                }
            });
            audios[i].currentTime = 0;
            audios[i].play();
        }
    });
});