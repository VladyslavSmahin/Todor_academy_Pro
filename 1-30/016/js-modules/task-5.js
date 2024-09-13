export function task_5() {
    const obj = Object.create({
        display(){
            console.log(obj);
        }

    },
        {
        group:{
            value: 'fish',
            writable: true,
            enumerable: true,
            configurable: true
        },
        type:{
            value: 'carp',
            writable: true,
            enumerable: true,
            configurable: true
        },
        weight:{
            value: '5',
            writable: true,
            enumerable: true,
            configurable: true
        },
    })
    obj.display();
    Object.freeze(obj);
    console.log(Object.isFrozen(obj));
}