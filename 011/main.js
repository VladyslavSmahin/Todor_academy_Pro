/*let a = 0;

function example1() {
    let a = 1;
    console.log(`переопределенная в example1() а - ${a}`);
    example2();

    function example2() {
        let a = 2;
        console.log(`переопределенная в example2() а - ${a}`);
        example3();

        function example3() {
            example4();
            let a = 3;
            console.log(`переопределенная в example3() а - ${a}`);
            example4();

            function example4() {
                let a = 4;
                console.log(`переопределенная в example4() а - ${a}`);
            }
        }
    }
}

example1();
console.log(`example2(), example3(), example4() не видны
в глобальной области видимости, поэтому их вызов приведет к ошибке`);*/
///////////
/*squareOfSum(1,2,square);
squareOfSum1(1,2,square1);
function squareOfSum (a,b, Sum = (res) => res ) {
    const res = a+b;
    square(10);
    return Sum(res);
}
    function square (value) {
  console.log(value*value);
    }

function squareOfSum1 (a,b, Sum = (res) => res ) {
    const res = a+b;
    square1(10);
    return Sum(res);
}
const square1  = (value) => {
    console.log(value*value);
}
console.log(`Функция squareOfSum работает в случае ее вызова до обьявления благодаря всплытию
в отличии от функции squareOfSum1, где square1 обьявлена как function expression`);*/
///////

var string1 = 'global variable';
let string2 = 'local variable';
const massive = [1, 2, 3];
console.log(`
     ${string1},
     ${string2},
     ${massive}
`);

string1 = '1';                       ///может быть переопределена
string2 = '2';                       ///может быть переопределена
///massive = [2, 3, 4];              ///приведет к ошибке,т.к. напрямую нельзя изменить const;
console.log(`
     ${string1},
     ${string2},
     ${massive}
`);

function display() {
    string1 = '10';
    string2 = '20';
 ///massive = [2, 3, 4];                       ///приведет к ошибке,т.к. напрямую нельзя изменить const;
    const massive = [20, 30, 40];     /// не приведет к ошибке,т.к. это совершенно другая константа
    // (находится исключительно в области видимости функции display)
    console.log(`
     ${string1},       ///   переменная переопределилась 
     ${string2},       ///   переменная переопределилась 
     ${massive}        ///   была создана новая переменная 
`);
}

display();

console.log(`
     ${string1},       /// переменная изменила свое значение после переопределеня в функции display
     ${string2},       /// переменная изменила свое значение после переопределеня в функции display
     ${massive}        /// осталась неизменной 
`);