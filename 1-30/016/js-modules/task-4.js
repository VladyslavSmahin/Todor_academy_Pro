export function task_4() {
    let book = {
        title: 'Незнайка на луне',
        author: 'Николай Носов'
    }
    Object.freeze(book);
    /// book.title = 'Знайка на луне';  /// Cannot assign to read only property 'title' of object
    /// Object.defineProperty('book', 'pages',{ }); /// TypeError: Object.defineProperty called on non-object
    /// delete book.author; /// TypeError: Cannot delete property 'author' of #<Object>
    console.log(book);
}