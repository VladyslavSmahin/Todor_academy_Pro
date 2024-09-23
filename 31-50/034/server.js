const express = require('express');
const {join} = require("path");
const app = express();
const PORT = 3000;

app.get( '/', (req, res) => {
    res.sendFile(join(__dirname, '/', 'index.html'));
   /* try {
        // Код, который может вызвать ошибку
        throw new Error('Ошибка в методе GET');
    } catch (err) {
        // Обработка ошибки
        res.status(500).send('Внутренняя ошибка сервера');
    }*/
} );

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
})