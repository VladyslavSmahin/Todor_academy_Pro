export function task_1() {
    function addDays(days) {
        const date = new Date();
        date.setDate(date.getDate() + days);
        return date;
    }

    class Task {
        constructor(id, title, description, status, deadline) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.status = status;
            this.deadline = deadline;
        }

        toDisplayThisTask() {
            console.log(`Task "${this.title}, id: ${this.id}", description: ${this.description} ${this.status}, deadline: ${this.deadline}.`);
        }
    }

    const prototypeTask = new Task(0, 'Prototype Task', 'This is a prototype task');
    const task_1 = Object.create(prototypeTask);
    task_1.id = 1;
    task_1.title = 'to learn new poem';
    task_1.description = 'historical';
    task_1.status = 'in progress...';
    task_1.deadline = addDays(-1);

    const task_2 = Object.create(prototypeTask);
    task_2.id = 2;
    task_2.title = 'go to the gym';
    task_2.description = '3 times a week';
    task_2.status = 'in progress...';
    task_2.deadline = addDays(90);

    const task_3 = Object.create(prototypeTask);
    task_3.id = 3;
    task_3.title = 'to read book';
    task_3.description = '5 times a week';
    task_3.status = 'in progress...';
    task_3.deadline = addDays(30);

    function TaskList(id, title, description, taskArr = []) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.taskArr = taskArr;
    }

    TaskList.prototype.toAddTaskArr = function (task) {
        this.taskArr.push(task);
    }
    TaskList.prototype.toDisplayTaskArr = function () {
        console.log(`The ${this.id} taskList:`)
        this.taskArr.forEach((task, index) => {
            console.log(`${index + 1} : ${task.title}`)
        })
    }
    TaskList.prototype.toShowExpiringTask = function () {
        this.taskArr.forEach((task) => {
            let timeToDo = task.deadline - new Date();
            const minutes = Math.floor(timeToDo / (1000 * 60)) % 60;
            const hours = Math.floor(timeToDo / (1000 * 60 * 60)) % 24;
            const days = Math.floor(timeToDo / (1000 * 60 * 60 * 24));

            console.log(`Task "${task.title}": ${days} days, ${hours} hours, ${minutes} minutes`);
        });
    }
    TaskList.prototype.toRemoveTask = function (taskTitle) {
        const index = this.taskArr.findIndex(task => task.title === taskTitle);

        // Если задача найдена (индекс не равен -1), удаляем её
        if (index !== -1) {
            this.taskArr.splice(index, 1);
            console.log(`Task "${taskTitle}" has been removed`);
        } else {
            console.log(`Task "${taskTitle}" not found.`);
        }

    }
    const myTaskList_1 = new TaskList(1, 'My Task List1', 'This is my task list num_1');
    const myTaskList_2 = new TaskList(2, 'My Task List2', 'This is my task list num_2');
    myTaskList_1.toAddTaskArr(task_1);
    myTaskList_1.toAddTaskArr(task_2);
    myTaskList_2.toAddTaskArr(task_3);

    class Planer {
        constructor(id, title, description, planerLists = []) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.planerLists = planerLists;
        }

        toAddList(list) {
            this.planerLists.push(list)
        }

        toDisplayLists() {
            console.log(`The ${this.id} Planer:`)
            this.planerLists.forEach((list) => {
                list.toDisplayTaskArr();
            })
        }

        toShowOverdueTask() {
            this.planerLists.forEach((list) => {
                list.taskArr.forEach((task) => {
                    let timeDifference = task.deadline - new Date();

                    if (timeDifference < 0) {
                        console.log(`Задача "${task.title}" просрочена!`);
                    }
                })
            })
        }
    }

    const myPlaner = new Planer(1, 'my first planer', 'this is my first planer', [myTaskList_1]);
    myPlaner.toAddList(myTaskList_2);
    myPlaner.toShowOverdueTask();
}
