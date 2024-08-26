let trackNum = 0;
let isPlaying = false;

const resumeText = document.createElement("p");
document.querySelector('.mainSectionPlayer').appendChild(resumeText);

const integerVolumeElement = document.createElement('p');
document.querySelector('.volumeContainer').appendChild(integerVolumeElement);

function updateTrack(newTrackNum) {
    const audioElements = document.querySelectorAll('audio');
    const currentAudio = audioElements[trackNum];
    const newAudio = audioElements[newTrackNum];

    if (isPlaying) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    trackNum = newTrackNum;

    if (newAudio) {
        newAudio.play();
        isPlaying = true;
        resumeText.textContent = 'Playback resumed';
    } else {
        isPlaying = false;
    }
}

function volumeControl() {
    const volumeSlider = document.querySelector('#volume');
    const context = new AudioContext();
    const gainNode = context.createGain();
    const audio = document.querySelectorAll('audio')[trackNum];

    volumeSlider.addEventListener('input', function () {
        gainNode.gain.value = +volumeSlider.value;
        audio.volume = +volumeSlider.value;
        let currentVolume = Math.floor(volumeSlider.value * 100) + "%";
        integerVolumeElement.textContent = currentVolume;
        integerVolumeElement.classList.add('volume-text');
        integerVolumeElement.style.left = `${currentVolume}`;
        integerVolumeElement.style.opacity = '1';
    });
    volumeSlider.addEventListener('change', function () {
        integerVolumeElement.style.opacity = '0';
    });
}

document.querySelector('.pausePlay').addEventListener('click', function () {
    const context = new AudioContext();

    const audio = document.querySelectorAll('audio')[trackNum];

    context.resume().then(() => {

        if (isPlaying) {
            audio.pause();
            isPlaying = false;
            resumeText.textContent = 'Playback paused';
        } else {
            audio.play();
            isPlaying = true;
            resumeText.textContent = 'Playback resumed';

        }
    });
    volumeControl();
});

document.querySelector('.refresh').addEventListener('click', function () {
    const audio = document.querySelectorAll('audio')[trackNum];
    audio.pause();
    audio.currentTime = 0;
    audio.play();
    resumeText.textContent = 'Playback resumed';
});
document.querySelector('.next').addEventListener('click', function () {
    const totalTracks = document.querySelectorAll('audio').length;
    const nextTrackNum = (trackNum + 1) % totalTracks;
    updateTrack(nextTrackNum);
    volumeControl();
});
document.querySelector('.previous').addEventListener('click', function () {
    const totalTracks = document.querySelectorAll('audio').length;
    const previousTrackNum = (trackNum - 1 + totalTracks) % totalTracks;
    updateTrack(previousTrackNum);
    volumeControl();
});

function toShowImg() {
    document.querySelector('.audioImg').style.opacity = '1';
}




