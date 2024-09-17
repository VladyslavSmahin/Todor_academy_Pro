const combineArrays = (arr1, arr2, el) => [...arr1, ...arr2, el];
const myArr1 = [1, 1, 1];
const myArr2 = [2, 2, 2];

console.log(combineArrays(myArr1, myArr2, 10));
console.clear();


function greetPeople(greeting = 'Hello', ...names) {
    return names.map(name => `${greeting}, ${name}!`);
}

console.log(greetPeople('Wow', "bob", 'alice', 'nick'));
console.clear();


const user1 = {
 name: 'John Snow',
 age: 25,
 skills: ['JavaScript', 'React', 'Node.js']
};
 function extractUserInfo(user){
     let personArr = [];
     const { name, age, skills } = user;
     const firstSkill = skills[0];
     personArr.push(name,age,firstSkill);
     return personArr
 }

const userInfo = extractUserInfo(user1);
console.log(userInfo);
