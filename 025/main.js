const body = document.querySelector('body');

function printNumbers(from, to) {
    let num = from;

    function printNextNumber() {
        let numP = document.createElement('p');
        numP.textContent = `${num}`;
        body.appendChild(numP);

        if (num < to) {
            num++;
            setTimeout(printNextNumber, 1000);
        }
    }

    let missed = --from * 1000;

    setTimeout(printNextNumber, missed);
}

printNumbers(5, 10);

function printNumbers2(from, to) {
    let num = from;

    function printNextNumber() {
        let myTimer = setInterval(() => {

            let numP = document.createElement('p');
            numP.textContent = `${num}`;
            body.appendChild(numP);
            if (num >= to) {
                clearInterval(myTimer);
            }
            num++
        }, 1000);
    }

    let missed = --from * 1000;
    setTimeout(printNextNumber, missed);
}

printNumbers2(5,10);


function getCurrentTimeToNewYear() {
    let seconds = document.createElement('p');
    let minutes = document.createElement('p');
    let hours = document.createElement('p');
    let days = document.createElement('p');
    body.appendChild(seconds);
    body.appendChild(minutes);
    body.appendChild(hours);
    body.appendChild(days);


    let timerToNewYear = setInterval(() => {
        const newYearTime = new Date('2025-01-01T00:00:00');
        let currentTime = new Date();
        let remainingTime = newYearTime - currentTime;
        seconds.textContent = `${Math.floor(remainingTime / 1000)} seconds`;
        minutes.textContent = `${Math.floor(remainingTime / 1000 / 60)} minutes`;
        hours.textContent = `${Math.floor(remainingTime / 1000 / 60 / 60)} hours`;
        days.textContent = `${Math.floor(remainingTime / 1000 / 60 / 60 / 24)} days`;
      if (seconds.textContent === '0 seconds' &&
          minutes.textContent === "0 minutes" &&
          hours.textContent === "0 hours" &&
          days.textContent === "0 days"
      ){
          clearInterval(timerToNewYear);
          seconds.textContent = 'Happy';
          minutes.textContent = 'New';
          hours.textContent = 'Fucking';
          days.textContent = 'Year';
      }
    }, 1000);
        }

getCurrentTimeToNewYear();

