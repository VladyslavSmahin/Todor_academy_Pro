function calculateSavings(salary, expenses) {
    return `Savings this month amounted to ${salary - expenses}$`
}

console.log(calculateSavings(2000, 600));
console.log(calculateSavings(3000, 1000));
console.log(this); // благодаря hoisting уже можно найти в списке свойств в консоли переменную var которая обьявлена, даже если не инициализирована.
console.log(window.myGlobalVar);  // здесь она будет undefined
var myGlobalVar = 'Hello, world!';
console.log(window.myGlobalVar);
function toShowImg(){
    let img = document.getElementById('myImgContainer');
    let img2 = document.getElementById('myImgContainer2');
    let myText = document.getElementById('myText');
    img.style.opacity = '1';
    setTimeout(function (){
        img2.style.opacity = '1';
    }, 2000);
    setTimeout(function (){
        myText.style.opacity = '1'
    },3000);
}
