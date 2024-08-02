export function task_1() {
    class Person {
        constructor(name, surname, age, gender) {
            this.name = name;
            this.surname = surname;
            this.age = age;
            this.gender = gender;
        }
        greet(){
            return console.log(`Hi ${this.name} ${this.surname}! I'm ${this.age}` )
        }
    }
    const person1 = new Person('Victor','Tsoi','forever alive', 'man');
    const person2 = new Person('Thor','Odinson', '1500', 'man');
    person1.greet();
    person2.greet();
}
