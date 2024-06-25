let numbers = [];

for (let i = 1; i <= 10; i++) {
    numbers.push(i);
}

console.log(numbers);
///
numbers = Array(10).fill(1).map((_, index) => index + 1);

console.log(numbers);

