const songs = document.querySelectorAll(".drum");

for (let i = 0; i < songs.length; i++) {
    songs[i].addEventListener("click", function () {
        const soundKey = this.getAttribute("data-sound");
        makeSound(soundKey);
    });
}

function makeSound(key) {
    switch (key) {
        case "w":
            playSound('songs/fiftyshadesofgrey.mp3');
            break;
        case "a":
            playSound('songs/tuchaiye.mp3');
            break;
        case "s":
            playSound('songs/bulleya.mp3');
            break;
        case "d":
            playSound('songs/safetyoff.mp3');
            break;
        case "j":
            playSound('songs/lilbunty.mp3');
            break;
        case "k":
            playSound('songs/borntoshine.mp3');
            break;
        case "l":
            playSound('songs/ranjhana.mp3');
            break;
        default:
            console.log("No sound assigned for this key.");
    }
}
// Function to handle playing the sound
let currentAudio = null;
function playSound(soundFile) {
    // Stop the currently playing audio (if any)
    if (currentAudio) {
        currentAudio.pause();
    }
    currentAudio = new Audio(soundFile);
    currentAudio.play();
}
