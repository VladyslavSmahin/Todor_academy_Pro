export function Player() {
    const myVideo = document.querySelector('.myVideo');

    myVideo.addEventListener('dblclick', (event) => {
        myVideo.volume = 0.5;
        console.log(myVideo.volume)
    })
}