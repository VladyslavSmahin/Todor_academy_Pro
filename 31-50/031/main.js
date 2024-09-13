function* naturalNums() {
    let num = 1;
    while (num) {
        yield num;
        num += 2;
    }

}

const naturalNum = naturalNums();
console.log(naturalNum.next().value);
console.log(naturalNum.next().value);
console.log(naturalNum.next().value);
console.clear();


function* fibonacci() {
    let firstNum = 0;
    let secondNum = 1;


    while (true) {
        let nextNum = firstNum + secondNum;
        yield nextNum;
        firstNum = secondNum;
        secondNum = nextNum;
    }
}


const displayNextStepFibonacci = (n) => {
    const fibonacciNums = fibonacci();
    for (let i = 1; i < n; i++) {
        console.log(fibonacciNums.next().value);
    }
}
displayNextStepFibonacci(10);
console.clear();

function* myArrGenerator(arr = []) {
    for (let i = 0; i < arr.length; i++) {
        yield arr[i] * 2;
    }
}

const firstArr = myArrGenerator([2, 5, 8]);
console.log(firstArr.next().value);
console.log(firstArr.next().value);
console.log(firstArr.next().value);
console.log(firstArr.next().value);
console.clear();

function* isPrime() {
    let num = 2;

    while (true) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            yield num;
        }
        num++;
    }
}

const primeNum = isPrime();
console.log(primeNum.next().value);
console.log(primeNum.next().value);
console.log(primeNum.next().value);
console.log(primeNum.next().value);
console.log(primeNum.next().value);
console.log(primeNum.next().value);
console.log(primeNum.next().value);
console.clear();

function* progression(b, q, n) {
    for (let i = 1; i <= n; i++) {
        let nextB = b * Math.pow(q,i - 1);
        yield nextB;
    }
}
const progressionStep = progression(2,5,5);
console.log(progressionStep.next());
console.log(progressionStep.next());
console.log(progressionStep.next());
console.log(progressionStep.next());
console.log(progressionStep.next());
console.log(progressionStep.next());




