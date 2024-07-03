export function task_1 (){
    function calculateDiscount(price) {
        let discount = 20;

        function getPriceAfterDiscount(price) {
            console.log(price - price * discount * 0.01);
        }
        getPriceAfterDiscount(price);
    }

    calculateDiscount(200);

}