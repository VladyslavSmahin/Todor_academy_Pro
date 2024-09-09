async function fetchData() {
    try {
        const response = await fetch('https://swapi.dev/api/people/3/');
        const data = await response.json();
        console.log(data);

    } catch (err) {
        console.log(`error: ${err}`)
    }
}

await fetchData();