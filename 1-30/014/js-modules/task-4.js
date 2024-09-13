export function task_4() {
    function curry1(a) {
        return function curry1_1(b) {
            return function curry1_2(c) {
                return a + b + c
            }
        }
    }
    console.log(curry1(2)(3)(4));
}