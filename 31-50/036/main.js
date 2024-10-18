let title = document.getElementById("title");
let description = document.getElementById("description");
let addTaskBtn = document.getElementById("addTaskBtn");
let getTaskBtn = document.getElementById("getTaskBtn");
const taskList = document.getElementById('task-list');

let err1 = document.createElement('p');
err1.textContent = 'required or validation conditions';
err1.style.color = 'red';
title.insertAdjacentElement("afterend", err1);

let err = document.createElement('p');
err.textContent = 'required validation conditions';
err.style.color = 'red';
description.insertAdjacentElement("afterend", err);
err.style.display = 'none';
err1.style.display = 'none';

addTaskBtn.addEventListener('click', addTaskBtnFunc);
getTaskBtn.addEventListener('click', getTasks);

async function addTaskBtnFunc(e) {
    e.preventDefault();
    let titleValue = title.value;
    let descriptionValue = description.value;

    let newTask = {
        title: titleValue,
        description: descriptionValue,
        status: "pending"
    };
    if (titleValue === '') {
        err1.style.display = 'block';
        title.style.border = '2px solid red';
        console.log(err1);
    } else if (descriptionValue === '') {
        err.style.display = 'block';
        description.style.border = '2px solid red';
        console.log(err);
    } else {
        err.style.display = 'none';
        err1.style.display = 'none';
        title.style.border = '2px solid black';
        description.style.border = '2px solid black';
        try {
            await fetch('http://localhost:3000/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newTask)
            });

            title.value = '';
            description.value = '';

            await getTasks();
        } catch (error) {
            console.error('Ошибка при добавлении задачи:', error);
        }
    }

}

async function deleteTask(taskId) {

    try {

        await fetch(`http://localhost:3000/tasks/${taskId}`, {
            method: 'DELETE'
        });
        await getTasks();
    } catch (error) {
        console.error('Ошибка при добавлении задачи:', error);
    }
}

async function updateTask(id, newTitle, newDescription) {
    let updatedTask = {
        title: newTitle,
        description: newDescription,
        status: 'pending'
    }
    try {
        await fetch(`http://localhost:3000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        });
        await getTasks();
    } catch (error) {
        console.error('Ошибка при добавлении задачи:', error);
    }
}

async function completeTask(id) {
    let updatedTask = {
        status: 'done'
    }
    try {
        await fetch(`http://localhost:3000/tasks/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        });
        await getTasks();
    } catch (error) {
        console.error('Ошибка при добавлении задачи:', error);
    }
}

async function getTasks() {

    try {
        const response = await fetch('http://localhost:3000/tasks');
        const tasks = await response.json();

        const taskList = document.getElementById('task-list');
        taskList.innerHTML = '';

        tasks.forEach(task => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${task.title}</td>
                <td>${task.description}</td>
                <td>${task.status}</td>
                <td>
                    <button class="updateBtn" data-id="${task.id}">Update</button>
                </td>
                <td><input class="forUpdateTitle" placeholder="Update your title" data-id="${task.id}"></td>
                <td>
                  <input class="forUpdateDescription" placeholder="Update your description" data-id="${task.id}">
                  <button class="completeBtn" data-id="${task.id}">Complete</button>
                  <button class="deleteBtn" data-id="${task.id}">Delete</button>
                </td>
            `;
            taskList.appendChild(row);
        });
    } catch (error) {
        console.error('Ошибка при получении задач:', error);
    }
}

await getTasks();

taskList.addEventListener('click', function (event) {
    const taskId = event.target.getAttribute('data-id');
    if (event.target.matches('.deleteBtn')) {
        deleteTask(taskId);
    } else if (event.target.matches('.completeBtn')) {
        completeTask(taskId);
    } else if (event.target.matches('.updateBtn')) {
        const row = event.target.closest('tr');
        const newTitle = row.querySelector('.forUpdateTitle').value;
        const newDescription = row.querySelector('.forUpdateDescription').value;
        updateTask(taskId, newTitle, newDescription);
    } else if (event.target.matches('.completeBtn')) {
        completeTask(taskId);
    }
});
