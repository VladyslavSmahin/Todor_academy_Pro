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
    })