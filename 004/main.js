for (let i= 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        let result = i * j;
        console.log(i + " * " + j + " = " + result);
    }
    console.log("");
}

let array = [23, 535, 23, 123, 18, 174, 304];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}

console.log("Сумма элементов массива: " + sum);

for ( let i = 1 ; i <= 10 ; i++ ) {
    if ( i % 2 === 0 ) {
        console.log(i + " парне");
    } else {
        console.log(i + "непарне");
    }
}