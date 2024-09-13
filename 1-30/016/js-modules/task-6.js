export function task_6() {
    let clientsBase = Object.create({
        displayObj(){
            console.log(this);
        },
        displayProps(property){
            console.log(Object.getOwnPropertyDescriptor(this, `${property}`));
        }
    },{
        user1: {
            value: Object.create(
                {},
                {
                    name: {
                        value: "Vlad",
                        writable: false,
                        enumerable: true,
                        configurable: false
                    },
                    birthYear: {
                        value: "1995",
                        writable: false,
                        enumerable: true,
                        configurable: false
                    },
                    email: {
                        value: "example@mail.ua",
                        writable: true,
                        enumerable: true,
                        configurable: true
                    }
                }
            ),
            writable: true,
            enumerable: true,
            configurable: true
        }
    });
    clientsBase.displayObj();
    console.log(Object.getOwnPropertyDescriptor(clientsBase.user1,'name'))
}
///Идея была такая - Создать обьект, где будут обьекты пользователей с данными ,где имя и год рождения нельзя форматировать,а только смотреть , а почту можно заменять. Вопрос сдледующий : можно ли сделать так,что б было реально применять метод clientsBase.displayObj() к обьекту user