export function task_1 (){
    function calculateDiscount(discount) {
        return function getPriceAfterDiscount(price) {
            return price - price * discount * 0.01;
        }
    }
    let discount20 = calculateDiscount(20);

    console.log(discount20(200));

}