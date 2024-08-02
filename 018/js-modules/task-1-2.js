export function task_1_2() {
     class Person {
        constructor(name, surname, age, gender) {
            this.name = name;
            this.surname = surname;
            this.age = age;
            this.gender = gender;
        }
        greet(){
            return `Hi ${this.name} ${this.surname}! I'm ${this.age}`;
        }
    }
    const person1 = new Person('Victor','Tsoi','forever alive', 'man');
    const person2 = new Person('Thor','Odinson', '1500', 'man');
    console.log(person1.greet());
    console.log(person2.greet());

    class Student extends Person{
        constructor(name, surname, age, gender, studentID) {
            super(name, surname, age, gender);
            this.studentId = studentID;
        }
        greet() {
          return `Hi ${this.name} ${this.studentId}`;
        }
    }
    const student1 = new Student('Vovchik','Bat`kovich','21', 'man', '001');
    console.log(student1.greet());
}
