export function task_4() {
    class Library {
        constructor(books_massive = []) {
            this.books_massive = books_massive;
        }

        addNewBook(book) {
            this.books_massive.push(book);
        }

        displayBooks() {
            this.books_massive.forEach((book, index) => {
                console.log(`Book ${index + 1}: ${book.title} by ${book.author}, published in ${book.year}`);
            });
        }
    }

    class Book {
        constructor(title, author, year) {
            this.title = title;
            this.author = author;
            this.year = year;
        }
    }
    const book1 = new Book('Fahrenheit 451', "Ray Bradbury", 1953);
    const book2 = new Book('1984', "George Orwell", 1949);
    const book3 = new Book('The Chronicles of Amber', "Roger Joseph Zelazny", 1970);
    const myLibrary = new Library([book1, book2,]);
    myLibrary.displayBooks();
    myLibrary.addNewBook(book3);
    myLibrary.displayBooks();
}