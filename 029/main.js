async function getDataFromInput() {
    try{
        const response3 = await fetch(`https://official-joke-api.appspot.com/random_joke`);
        const someJokeObj = await response3.json();

        const someJoke = `${someJokeObj.setup} ${someJokeObj.punchline}`;

        const myInputData = document.getElementById('myInput').value;
        const greeting = document.createElement('h2');
        document.body.appendChild(greeting);

        greeting.textContent = `Hi, ${myInputData}, some joke for you: ${someJoke}`;
        return greeting;
    } catch (err){
        console.error(err);
    }
}

document.querySelector('.myBtn').addEventListener('click', async (e) => {
    e.preventDefault();
    await getDataFromInput();
})