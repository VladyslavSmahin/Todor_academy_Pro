export function task_1() {
    function applyFilteredMassive(operation, massive) {
        return operation(massive);
    }

    const a = [1, 2, 3, 4, 5, 6, 10];
    const filteredMassive = applyFilteredMassive(massive => massive.filter(num => num % 2 === 0), a)
    console.log(filteredMassive);
}
