export function task_1() {
    class Animal  {
        constructor  (name) {
            this.name = name;
            return this;
        }
        sound (){
            return 'sound';
        }
        makeSound(){
            return this.sound()
        }
    }
    const dog = new Animal('Dana');
    dog.sound = function (){
        return 'woof';
    };
    const cat = new Animal('Boris');
    cat.sound = function (){
        return 'meow';
    };
    class Dog extends Animal{
        sound() {
            return 'woof';
        }
    }
    class Cat extends Animal{
        sound() {
            return 'meow';
        }
    }
    const catBoris = new Cat('Boris');
    const dogDana = new Dog('Dana');
    console.log(dog.makeSound());
    console.log(cat.makeSound());
    console.log(dogDana.makeSound());
    console.log(catBoris.makeSound())

}
