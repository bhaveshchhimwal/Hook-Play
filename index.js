var currentAudio = null; // Store the currently playing audio

function playSound(soundFile) {
    // Stop the currently playing audio (if any)
    if (currentAudio) {
        currentAudio.pause();
        //currentAudio.currentTime = 0; // Reset to the beginning
    }

    // Create and play the new audio
    var audio = new Audio(soundFile);
    audio.play();

    // Update the currentAudio variable
    currentAudio = audio;
}

function handleclick1() {
    playSound('sound/LoveMeLikeYouDo.mp3');
}

function handleclick2() {
    playSound('sound/TuChaiye.mp3');
}
function handleclick3() {
    playSound('sound/bulleya.mp3');
}
function handleclick4() {
    playSound('sound/safetyoff.mp3');
}
function handleclick5() {
    playSound('sound/chote.mp3');
}
function handleclick6() {
    playSound('sound/born.mp3');
}
function handleclick7() {
    playSound('sound/ranjhana.mp3');
}
document.querySelectorAll("button")[0].addEventListener("click", handleclick1);
document.querySelectorAll("button")[1].addEventListener("click", handleclick2);

document.querySelectorAll("button")[2].addEventListener("click", handleclick3);
document.querySelectorAll("button")[3].addEventListener("click", handleclick4);
document.querySelectorAll("button")[4].addEventListener("click", handleclick5);
document.querySelectorAll("button")[5].addEventListener("click", handleclick6);

document.querySelectorAll("button")[6].addEventListener("click", handleclick7);