let callbackFunc = `Функция, что передается в другую функцию 
в качестве аргумента для вызова в определенный момент`;
let callbackConcept = `Основная концепция колбек функций заключается в
 их использовании внутри другой функции в нужном месте и последовательности. 
 Их преимущество в том что можно выполнить любой код асинхронно без задержки
  на выполнение других операций`
function doSomethingElse () {
    console.log('3/синхронный doSomethingElse');
    setTimeout(()=>{
        console.log('5/Асинхронный doSomethingElse');
    }, 3000)
    console.log('7/синхронный doSomethingElse');
}
function doSomethingElse2 (callback) {
    console.log('10/синхронный doSomethingElse2');
    setTimeout(()=>{
        console.log('12/Асинхронный setTimeout doSomethingElse2');
        setTimeout(()=>{
            console.log('14/Асинхронный setTimeout 2 doSomethingElse2');
        }, 3000);
        console.log('16/Асинхронный setTimeout doSomethingElse2');
    }, 3000);
    console.log('18/синхронный doSomethingElse2');
    callback()
}
doSomethingElse2(doSomethingElse)
console.log(`Колбек это : ${callbackFunc}, ${callbackConcept}, пример колбека: ${doSomethingElse} как аргумент в функции ${doSomethingElse2}`)

/////////////////

function sum (a, b, sumProcessing= (res) => res){
    const res = a + b;
    return sumProcessing(res)
}
function display (value){
    console.log(value)
}
sum(2,5,display);

/////////////////

const p = new Promise(function (resolve, reject){
    let name = "ержан";
    setTimeout(function (){
        (typeof name === "string" && name.length > 0) ? resolve(name.charAt(0).toUpperCase() + name.slice(1)) : reject(name)
    },3000)
});
p.then(function (value){
    console.log(`Имя ${value} отформатировано`)
}).catch((function (){
    console.error(`Введен некорректный тип данных`)
}))