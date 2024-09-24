let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://todor.academy/', true);

xhr.onload = function () {
    if (xhr.status === 200) {
        const get = document.createElement('p');
        document.body.appendChild(get);
        get.textContent = xhr.responseText
    } else {
        console.error('Ошибка', xhr.status);
    }
}

xhr.send();
let xhrPost = new XMLHttpRequest();

xhrPost.open('POST', 'https://todor.academy/', true);

xhrPost.setRequestHeader('Content-Type', 'application/json');

xhrPost.onload = function () {
    if (xhr.status === 200) {
        console.log('Ответ сервера:', xhrPost.responseText);
    } else {
        console.error('error', xhrPost.status);
    }
}
let data = JSON.stringify({
    username: 'vlad',
    userAge: 30
});

xhrPost.send(data);

let xhrPut = new XMLHttpRequest();

xhrPut.open('PUT','https://todor.academy/', true);

xhrPut.setRequestHeader('Content-Type', '\'application/json');

xhr.onload = function () {
    if (xhr.status === 200) {
        console.log('Ресурс обновлен:', xhr.responseText);
    } else {
        console.error('Ошибка', xhr.status);
    }
};

let updateData = JSON.stringify({
    username: 'new_username',
    email: 'new_email@example.com'
});

xhrPut.send(updateData);

let xhrDelete = new XMLHttpRequest();

xhrDelete.open('DELETE','https://todor.academy/user/1', true);

xhr.onload = function () {
    if (xhr.status === 200) {
        console.log('Ресурс удален:', xhr.responseText);
    } else {
        console.error('Ошибка', xhr.status);
    }
};

xhrDelete.send();