export function task_1() {
    const Animal = {
        constructor: function (name) {
            this.name = name;
            return this;
        },
        sound: function (){
            return 'sound';
        },
        makeSound: function (){
            return this.sound()
        }
    }
    const dog = Object.create(Animal).constructor('Dana');
    dog.sound = function (){
        return 'woof';
    };
    const cat = Object.create(Animal).constructor('Boris');
    cat.sound = function (){
        return 'meow';
    };
    console.log(dog.sound());
    console.log(cat.sound());
    console.log(cat.makeSound());
}
