function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status ${response.status}`);
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error.message))
    })
}

const apiUrl = "https://swapi.dev/api/people/1/";

fetchData(apiUrl)
    .then(data => {
        const p = document.createElement('p');
        document.body.appendChild(p);
        let result = '';
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                result += `${key}: ${data[key]}`;
            }
        }
        p.textContent = result
    })
    .catch(err => {
        console.error(`Error: ${err}`)
    });

function randomReject() {
    return new Promise((resolve, reject) => {
        const randomOutcome = Math.random() > 0.5;

        if (randomOutcome) {
            let randomTimeout = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;

            setTimeout(() => {
               resolve( Math.random());
            }, randomTimeout);
        } else {
            reject('Это фиаско,братан!');
        }
    })
}

randomReject()
    .then(value => console.log(`Promise resolved with :${value}`))
    .catch(err => console.error(err));




