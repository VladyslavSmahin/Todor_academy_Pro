export function task_1() {
   let person = {
       name: 'Vlad',
       age: 28
   }
    console.log(Object.getOwnPropertyDescriptor(person, 'name'));
    console.log(Object.getOwnPropertyDescriptor(person, 'age'));
    Object.defineProperty(person, "gender", {
        value: "male",
        writable: false,
        enumerable: true,
    });
    console.log(Object.getOwnPropertyDescriptor(person, 'gender'));
}
