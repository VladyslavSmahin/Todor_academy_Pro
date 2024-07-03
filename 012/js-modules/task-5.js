export function task_5 () {
    function multiplyBy(num) {
        function calculatedProduct(arg) {
            console.log( num * arg)
        }

        calculatedProduct()
        return{
            calculatedProduct
        }
    }
    multiplyBy()
    let a = multiplyBy(20);
    a.calculatedProduct(10);

}