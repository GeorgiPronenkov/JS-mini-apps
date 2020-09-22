//1/Book class: represents a Book
class Book {

    constructor(title, author, isbn) {
        //2.set whatever is passed from title,author,isbn to the properties of object
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//3.UI Class: handle UI tasks
class UI {

    //4.display books:
    static displayBooks() {
        const books = Store.getBooks();

        books.forEach((book) => UI.addBookToList(book));
    }

    //5.add books to list:
    static addBookToList(book) {
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
                        <td>${book.title}</td>    
                        <td>${book.author}</td>    
                        <td>${book.isbn}</td>    
                        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>    
                        `;

        //6.append row to the list
        list.appendChild(row);
    }
    //15.
    static deleteBook(el) {
        if (el.classList.contains('delete')) {
                el.parentElement
                  .parentElement //the remove the whole tr
                  .remove();
        }
    }

    //17.show alert:
    static showAlert(message, className) {
        const divEl = document.createElement('div');
        divEl.className = `alert alert-${className}`;
        divEl.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(divEl, form);

        //18.vanish in 4seconds
        setTimeout(() => document.querySelector('.alert')
                                          .remove(), 4000);
    }

    //12.5.clear fields:
    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}

//21.Store Class: handles Storage
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

      //22.reset local storage
      localStorage.setItem('books', JSON.stringify(books));
    }
}

//7.Event: display Books
    document.addEventListener('DOMContentLoaded', UI.displayBooks);

//8.event: add a book
    document.querySelector('#book-form')
            .addEventListener('submit', (e) => {
    //8.5.prevent actual submit
    e.preventDefault();

    //9.get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //16.validate
    if (title === '' || author === '' || isbn === '') {
        UI.showAlert('All fields required!!!', 'danger');
    } else {
        //10.instantiate book
        const book = new Book(title, author, isbn);

        //11.add book to UI
        UI.addBookToList(book);

        //23.add book to store
        Store.addBook(book);

        //19.show success message
        UI.showAlert('Book Added', 'success');

        //12.clear fields
        UI.clearFields();
    }
});

//13.event: remove a book
    document.querySelector('#book-list')
            .addEventListener('click', (e) => {
    //14.remove book from UI
    UI.deleteBook(e.target);

    //24.remove book from storage
    Store.removeBook(e.target
                      .parentElement //<td>
                      .previousElementSibling
                      .textContent); //get isbn
    //20.show delete message
    UI.showAlert('Book Removed', 'danger');
});
