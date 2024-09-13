export function task_4() {
    const generateUniqueId = (function () {
        let lastId = 0;
         return function getRandomId() {
            lastId += 1;
            return `id-${lastId}`;
        };
    })();
    const id = generateUniqueId();
    const id2 = generateUniqueId();
    const nextId = generateUniqueId();
    console.log(id);
    console.log(id2);
    console.log(nextId);
}