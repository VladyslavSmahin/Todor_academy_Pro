export function task_2() {
        function applyFunction(operation, arg) {
            return operation(arg);
        }

        const massive = [1, 2, 3, 4];
        const reducedMassive = applyFunction(massive => massive.reduce((acc, val) => acc+val, 0), massive);
        console.log(reducedMassive)
}