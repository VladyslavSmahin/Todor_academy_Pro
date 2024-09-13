export function task_5() {
    function accumulator() {
        let value = 0;
        return  function (num) {
            value += num;
            console.log(value)
        }
    }
    const c = accumulator();
    c(4);
    c(5);
    c(6);
}