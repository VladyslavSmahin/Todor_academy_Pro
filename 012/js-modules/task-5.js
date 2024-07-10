export function task_5 () {
    function multiplyBy(a) {
         return function calculatedProduct(b) {
            return  a * b;
        }
    }
    multiplyBy()
    let a = multiplyBy(20);
    console.log(a(2));
    console.log(a(5));
}