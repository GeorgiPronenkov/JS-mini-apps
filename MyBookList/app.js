//1/Book class: represents a Book
class Book {

    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//UI Class: handle UI tasks
class UI {

    //display books:
    static displayBooks() {
        const books = Store.getBooks();

        books.forEach((book) => UI.addBookToList(book));
    }

    //add books to list:
    static addBookToList(book) {
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>    
            <td>${book.author}</td>    
            <td>${book.isbn}</td>    
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>    
        `;

        //append row to the list
        list.appendChild(row);
    }

    static deleteBook(el) {
        if (el.classList.contains('delete')) {
            el.parentElement
                .parentElement
                .remove();
        }
    }

    //show alert:
    static showAlert(message, className) {
        const divEl = document.createElement('div');
        divEl.className = `alert alert-${className}`;
        divEl.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(divEl, form);

        //vanish in 3seconds
        setTimeout(() => document.querySelector('.alert')
                                 .remove(), 3000);
    }

    //clear fields:
    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}

//Store Class: handles Storage
class Store {

    static getBooks() {
      let books;
      if (localStorage.getItem('books') === null) {
          books = [];
      } else {
          books = JSON.parse(localStorage.getItem('books'));
      }

      return books;
    }

    static addBook(book) {
      const books = Store.getBooks();

      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
      const books = Store.getBooks();
      books.forEach((books, index) => {
         if (books.isbn === isbn) {
            books.splice(index, 1);
         }
      });

      //reset local storage 
      localStorage.setItem('books', JSON.stringify(books));
    }
}

//Event: display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//event: add a book
document.querySelector('#book-form')
        .addEventListener('submit', (e) => {
    //prevent actual submit
    e.preventDefault();

    //get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //validate
    if (title === '' || author === '' || isbn === '') {
        UI.showAlert('All fields required!!!', 'danger');
    } else {
        //instantiate book
        const book = new Book(title, author, isbn);

        //add book to UI
        UI.addBookToList(book);

        //add book to store
        Store.addBook(book);

        //show success message
        UI.showAlert('Book Added', 'success');

        //clear fields
        UI.clearFields();
    }
});

//event: remove a book
document.querySelector('#book-list')
        .addEventListener('click', (e) => {
    //remove book from UI
    UI.deleteBook(e.target);

    //remove book from storage
    Store.removeBook(e.target
                        .parentElement //<td>
                          .previousElementSibling
                            .textContent);
    //show delete message
    UI.showAlert('Book Removed', 'danger');
});
