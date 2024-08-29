document.addEventListener('DOMContentLoaded', () => {
    const bgImg = document.createElement('img');
    const headerBtn = document.createElement('img');
    const headerBtnBlue = document.createElement('img');
    const section1 = document.querySelector('.section1');
    const section2 = document.querySelector('.section2');
    const h1 = document.createElement('h1');
    const p1 = document.createElement('h3');
    const p2 = document.createElement('h3');
    const p3 = document.createElement('h3');
    const welcomeHomeText = document.createElement('h4');
    const myPopup = document.querySelector('.popupToSelectNum');
    const myPopupDelete = document.querySelector('.popupToDeleteNum');
    const inputField = document.querySelector('#inputNum');
    const myFormToDelete = document.querySelector('.popupToDeleteNumForm');
    const btnBg = document.createElement('button');


    h1.textContent = 'Let`s make your choice';
    headerBtn.src = 'images/red.png';
    headerBtn.classList.add('headerBtn');
    headerBtnBlue.src = 'images/blue.png';
    headerBtnBlue.classList.add('headerBtnBlue');
    headerBtn.title = 'Just do it';
    headerBtnBlue.title = 'ARE YOU SURE ?';
    p3.style.fontSize = '30px';

    section2.appendChild(bgImg);
    section1.appendChild(h1);
    section1.appendChild(headerBtn);
    section1.appendChild(headerBtnBlue);
    section1.appendChild(p1);
    section1.appendChild(p2);
    section1.appendChild(p3);
    section1.appendChild(welcomeHomeText);

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

        btnBg.addEventListener('click', () => {
            divs.forEach((div, index) => {
                if (index % 2 === 0) {
                    div.style.opacity = '0.5';
                } else if (index % 5 === 0) {
                    div.style.opacity = '0.2';
                }
            })
        })

        await Promise.all([
            startIntervalFunc(40, arr1, 40),
            startIntervalFunc(60, arr2, 30),
            startIntervalFunc(70, arr3, 50),
            startIntervalFunc(50, arr4, 20),
            startIntervalFunc(80, arr5, 40),
            startIntervalFunc(30, arr6, 25),
            setTimeout(() => {
                myPopup.style.opacity = '1';
                myPopupDelete.style.opacity = '1';
            }, 3000),

        ]);
    };
    const updateTextContent = async () => {
        p1.textContent = 'Welcome';
        await new Promise(resolve => setTimeout(resolve, 1000));
        p2.textContent = 'to';
        await new Promise(resolve => setTimeout(resolve, 1000));
        p3.textContent = 'Matrix';
        await new Promise(resolve => setTimeout(resolve, 1000));
    };

    const executeCreateDiv = async () => {
        await createDiv();
    };
    const addBtnBg = () => {
        btnBg.classList.add(`btnBg`);
        btnBg.textContent = 'Click to change style';
        section2.appendChild(btnBg);
    }
    const handleButtonClick = async () => {
        headerBtn.style.display = 'none';
        headerBtnBlue.style.display = 'none';
        await updateTextContent();
        await executeCreateDiv();
        await addBtnBg();
        return 'Done';
    };

    headerBtn.addEventListener('click', () => {
        handleButtonClick().then(res => {
            console.log('The result of handleButtonClick:', `${res}`);
        }).catch(error => {
            console.error('An error occurred:', error);
        });
    });

    function handleButtonClickBlue() {
        bgImg.src = 'images/bgImage.jpg';
        bgImg.classList.add('bgImg');
        welcomeHomeText.classList.add('fade-in');

        setTimeout(() => {
            welcomeHomeText.classList.add('show');
            welcomeHomeText.textContent = 'WELCOME HOME';
            welcomeHomeText.style.fontSize = '100px';
            headerBtn.style.display = 'none';
            headerBtnBlue.style.display = 'none';
            h1.style.opacity = '0';
        }, 1000)
    }

    headerBtnBlue.addEventListener('click', () => {
        handleButtonClickBlue();
    });

    const toFilterNum = async (searchText) => {
        const pTags = document.querySelectorAll('p');
        const pTagsArray = Array.from(pTags);
        const searchChars = searchText.split('')

        pTagsArray.forEach(pTag => {
            const shouldHide = searchChars.some(char => pTag.textContent.includes(char));
            if (searchText === '') {
                pTag.style.opacity = '1';
            } else if (shouldHide) {
                pTag.style.opacity = '0';
            } else {
                pTag.style.opacity = '1';
            }
        });
    }
    const toDeleteNum = async (inputText) => {
        const pTags = document.querySelectorAll('p');
        const pTagsArray = Array.from(pTags);
        const searchChar = inputText.split('');

        pTagsArray.forEach(pTag => {
            const shouldHide = searchChar.some(char => pTag.textContent.includes(char));

            if (shouldHide) {
                pTag.textContent = '';
            }
        });
    }
    inputField.addEventListener('input', (event) => {
        const inputValue = event.target.value;

        toFilterNum(inputValue);
    });
    myFormToDelete.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.querySelector('#inputNumToDelete');
        const inputValue = input.value;

        toDeleteNum(inputValue);
    });

})
