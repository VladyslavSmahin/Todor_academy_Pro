name = 'Vlad';
age = 28;
isStudent = true;
height = 1.79;
console.log(
    "name" + "-" + name,
    "age"  + "-" + age,
    'isStudent' + "-" + isStudent,
    "height" + "-" + height)
/////
console.log(
    name === age,
    isStudent == null,
    isStudent === null,
    0 == null,
    undefined == null,
    false == 0,
    false === 0)
/////
let string = `Меня зовут ${name},мне ${age} лет`
console.log(string, typeof string)
//////
person = {
    name,
    age,
    isStudent,
    height
}
console.log(person)