export function task_1() {
    class Employee {
        constructor(name = '', age = 0, position = '', baseSalary = 0) {
            this.name = name;
            this.age = age;
            this.position = position;
            this.baseSalary = baseSalary;
        }

        calculateSalary() {
            return this.baseSalary;
        }
    }

    class Developer extends Employee {
        constructor(name = '', age = 0, position = '', baseSalary = 0, programmingLanguage = '') {
            super(name, age, position, baseSalary);
            this.programmingLanguage = programmingLanguage;
        }

        calculateSalary() {
            return +this.baseSalary + 500;
        }
    }

    class Manager extends Employee {
        constructor(name = '', age = 0, position = '', baseSalary = 0, teamSize = 0) {
            super(name, age, position, baseSalary);
            this.teamSize = teamSize;
        }

        calculateSalary() {
            return +this.baseSalary + this.teamSize * 100;
        }
    }

    const firstDeveloper = new Developer('Anton',30,'webDeveloper','1000','JS'); //специально создал условие где по ошибке сумму ввели строкой, но что б это все равно работало
    const firstManager = new Manager('Vlad', 29, 'teamLead', 1000, 3);
    //по методу work НЕТУ ТЗ - поэтому результат ХЗ :D
    Employee.prototype.work = function (){
        return `Я поработаль, дайте деняг от столько : ${this.calculateSalary()}`;
    }
    console.log(firstManager.calculateSalary());
    console.log(firstDeveloper.calculateSalary());
    console.log(firstManager.work());
    console.log(firstDeveloper.work());
}
