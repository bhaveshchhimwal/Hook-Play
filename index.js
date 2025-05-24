const drums = document.querySelectorAll(".drum");

for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function () {
        const soundKey = this.getAttribute("data-sound");
        makeSound(soundKey);
    });
}

function makeSound(key) {
    switch (key) {
        case "w":
            playSound('sound/LoveMeLikeYouDo.mp3');
            break;
        case "a":
            playSound('sound/TuChaiye.mp3');
            break;
        case "s":
            playSound('sound/bulleya.mp3');
            break;
        case "d":
            playSound('sound/safetyoff.mp3');
            break;
        case "j":
            playSound('sound/krsna.mp3');
            break;
        case "k":
            playSound('sound/born.mp3');
            break;
        case "l":
            playSound('sound/ranjhana.mp3');
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
