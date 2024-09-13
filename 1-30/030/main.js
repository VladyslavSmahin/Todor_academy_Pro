const myObj = [false, `one`, 1, {}, []];

const iterable = {
    [Symbol.iterator]() {
        let i = 0;
        const items = myObj;

        return {
            next() {
                if (i < items.length) {
                    return {value: items[i++], done: false}
                } else {
                    return {value: undefined, done: true}
                }
            }
        }
    }
}

for (let item of iterable) {
    console.log(item);
}

for (let v of myObj) {
    console.log(v);
}

let myArr = [1, 2, 3, 4];
const someArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let res = arr[i] * 2
        console.log(`for...in: ${res}`);
    }
}
someArray(myArr);

for (let i of myArr) {
    console.log(`for...of: ${i * 2}`);
}

const displayObj = (obj) => {
    let i = 0;
    while (i < obj.length) {
        console.log(obj[i]);
        i++;
    }
}
displayObj(myObj);
console.clear();
const isPrime = (num) => {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }

    return true;
};
const myNumsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const iterableToDisplayPrimeNumbers = {
    [Symbol.iterator]() {
        let i = 0;
        const items = myNumsArr;
        return {
            next() {
                while (i < items.length) {
                    if (isPrime(items[i])) {
                        return {value: items[i++], done: false}
                    }
                    i++;
                }
                return {done: true}
            }
        }
    }
}


for (let primeNum of iterableToDisplayPrimeNumbers) {
    console.log(primeNum);
}

const person = {
    firstName: 'Vlad',
    secondName: 'Smahin',
    birthDate: '16.07.1995',
    [Symbol.iterator]() {
        let allData = [this.firstName,  this.secondName,this.birthDate];
        let index = 0;
        return {
            next() {
                if (index < allData.length) {
                    return {value: allData[index++], done: false}
                }
                return {value: undefined, done: true}
            }
        }
    }
}
const personArr = [...person];
console.log(personArr)

/*
for предназначен для выполнения определенного блока кода  и нуждается в четко установленных : начальное значение, условие выполнения, шаг выполнения. В этом его ограничения
Подходит лучше для числовых последовательностей и массивов (если работаем с индексом)

for...in  подходит для не итерируемых объектов, так как будет проходиться по всем ключам и их значениям ,включая унаследованные , не обещает сохранение порядка перебора , ключи в формате  числа переведет в строку

for...of  подходит для работы только  с итерируемыми объектами ,такими как массивы, строки ,DOM коллекции.
    Поддерживает  break, continue и return что для себя интересное нашел
Поддержка асинхронных операций с for await...of
*/
