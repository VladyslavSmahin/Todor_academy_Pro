export function task_2() {
    function add(a,b){
        return a + b;
    }
    function multiply(a,b){
        return a * b;
    }
    function division(a,b){
        return a / b
    }
    let calculator = {
        add,
        multiply,
        division
    };
    console.log(calculator.add(2,2));
    console.log(calculator.multiply(5,5));
    console.log(calculator.division(10,5));
    ///
    let calculator2 = {
        add2(a,b){
            return a + b;
        },
        multiply2(a,b){
            return a * b;
        },
        division2(a,b){
            return a / b;
        },
    }
    console.log(calculator2.add2(3,3));
    console.log(calculator2.multiply2(3,3));
    console.log(calculator2.division2(10,2));
}