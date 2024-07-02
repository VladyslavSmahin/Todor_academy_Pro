let a = 0;

function example1() {
    let a = 1;
    console.log(`переопределенная в example1() а - ${a}`);
    example2();

    function example2() {
        let a = 2;
        console.log(`переопределенная в example2() а - ${a}`);
        example3()

        function example3() {
            example4()
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
console.log(`example2(), example3(), example4() не видны в глобальной области видимости, поэтому их вызов приведет к ошибке`)