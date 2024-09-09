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

async function getData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        let response2 = await fetch(`https://api.example.com/details/${data.id}`);
        let detailsResponse = await response2.json();
        console.log(detailsResponse);
    } catch (error) {
        console.error('Error:', error);
    }
}


async function timeoutFunk() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('...спустя 1 сек');
            let num = Math.random();
            if (num > 0.5) {
                resolve(num);
            } else {
                reject(`shit: ${num}`);
            }
        }, 1000);
    });
}
try {
    const result = await timeoutFunk();
    console.log(`Resolved with: ${result}`);
} catch (err) {
    console.error(err);
}

async function getPhoto() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        const imgUrl = data.message;
        const img = document.createElement('img');
        document.body.appendChild(img);
        img.src = imgUrl;
    } catch (err) {
        console.error(err);
    }
}

await getPhoto();


/*function getResultFromPromise() {
    promiseFunction()
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}*/
async function promiseFunction(){}
async function getResultFromPromise() {
    try {
        const result = await promiseFunction();
        console.log(result);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function getFetches(){
    try{
        const response1 = await fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`);
        const respData1 = await response1.json();
        console.log(respData1);

        const response2 = await fetch(`https://api.ipify.org?format=json`);
        const respData2 = await response2.json();
        console.log(respData2);

        const response3 = await fetch(`https://official-joke-api.appspot.com/random_joke`);
        const respData3 = await response3.json();
        console.log(respData3);
    }
    catch (err){
        console.error(`error: ${err}`)
    }
}
await getFetches();

