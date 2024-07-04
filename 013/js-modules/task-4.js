export function task_4() {
    const  calculateAverage = (massive) =>
        (massive.reduce((accumulator, currentValue) => accumulator + currentValue, 0)) / massive.length;
    const massive1 = [1, 2, 3, 4];
    const massive2 = [2, 3, 4];
    console.log(calculateAverage(massive1));
    console.log(calculateAverage(massive2));
}