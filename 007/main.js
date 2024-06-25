let numbers = [];

for (let i = 1; i <= 10; i++) {
    numbers.push(i);
}

console.log(numbers);
///
numbers = Array(10).fill(1).map((_, index) => index + 1);

console.log(numbers);

/////////

let colors = ['red', 'blue', 'green', 'yellow', 'black'];

console.log(colors.indexOf('green'));
colors.splice(colors.indexOf('black'));
console.log(colors);
////////

let fruits = ['apple', 'banana', 'orange', 'pear', 'kiwi'];
console.log(fruits.sort());
console.log(fruits.join());
console.log(fruits.filter((word) => word.length > 5));
console.log(fruits.map((e) => e.toUpperCase()));
console.log(fruits.reduce(
    (accumulator, currentValue) => accumulator + ' - ' + currentValue,
));