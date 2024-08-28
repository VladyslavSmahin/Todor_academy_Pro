document.addEventListener('DOMContentLoaded', () => {
    const section1 = document.querySelector('.section1');
    const section2 = document.querySelector('.section2');

    const h1 = document.createElement('h1');
    h1.textContent = 'Hi everyone';

    const headerBtn = document.createElement('button');
    headerBtn.textContent = 'Hi';

    const p1 = document.createElement('h3');
    const p2 = document.createElement('h3');
    const p3 = document.createElement('h3');
    p3.style.fontSize = '30px'

    section1.appendChild(h1);
    section1.appendChild(headerBtn);
    section1.appendChild(p1);
    section1.appendChild(p2);
    section1.appendChild(p3);

    const createDiv = async () => {
        function startIntervalFunc(intervalTime, array, maxCount) {

            return new Promise(resolve => {
                let count = 0;

                const intervalId = setInterval(() => {

                    arrDivs(array);
                    count++
                    if (count >= maxCount) {
                        clearInterval(intervalId);
                        resolve();
                    }
                }, intervalTime);
            })
        }

        for (let i = 1; i <= 40; i++) {
            let myDivContainer = document.createElement('div');
            myDivContainer.classList.add('myDivContainer');
            myDivContainer.classList.add(`myDivContainer${i}`);

            section2.appendChild(myDivContainer);

        }
        const divs = document.querySelectorAll(`.myDivContainer`);

        const arr1 = [1, 7, 10, 17, 20, 27, 30, 37];
        const arr2 = [0, 2, 8, 12, 18, 22, 28, 32, 38];
        const arr3 = [3, 9, 13, 19, 23, 29, 33, 39];
        const arr4 = [5, 11, 21, 31, 15, 25, 35];
        const arr5 = [6, 16, 26, 36];
        const arr6 = [4, 14, 24, 34];
        const arrDivs = (arr) => {
            divs.forEach((div, index) => {
                if (arr.includes(index)) {
                    const min = 1;
                    const max = 9;
                    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
                    let num = document.createElement('p');
                    num.textContent = `${randomNumber}`;
                    div.appendChild(num);
                }
            })
        };

        await Promise.all([
            startIntervalFunc(40, arr1, 50),
            startIntervalFunc(60, arr2, 30),
            startIntervalFunc(70, arr3, 50),
            startIntervalFunc(50, arr4, 20),
            startIntervalFunc(80, arr5, 50),
            startIntervalFunc(30, arr6, 25)
        ]);
    };

    headerBtn.addEventListener('click', async () => {
        p1.textContent = 'Welcome';

        await new Promise(resolve => setTimeout(resolve, 1000));
        p2.textContent = 'to';

        await new Promise(resolve => setTimeout(resolve, 1000));
        p3.textContent = 'Matrix';

        await new Promise(resolve => setTimeout(resolve, 1000));
        await createDiv();

    })
    const toFilterNum = async () => {
        const pTags = document.querySelectorAll('p');
         await console.log(pTags)
    }

})