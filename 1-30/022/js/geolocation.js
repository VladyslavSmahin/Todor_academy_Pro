const displayArea = document.querySelector('#locationDisplay');
const getLocationBtn = document.querySelector('#getLocation');

getLocationBtn.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayGeoData, displayError);
    } else {
        displayArea.innerHTML = 'Geolocation is not supported by this browser';
    }
});

const displayGeoData = (position) => {
   const {latitude, longitude} = position.coords;
   displayArea.textContent  = `Latitude: ${latitude}, Longitude: ${longitude}`;
   displayArea.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
}

const displayError = (err) => {
    displayArea.textContent = `Error: ${err.message}`
}