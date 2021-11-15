console.log('this es6 version of project 2');

class Book {

    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    add(book) {
        console.log("adding");
        let tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
    </tr>`
        tableBody.innerHTML += uiString;
    }
    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }
    validate(book) {
        if (book.name.length < 3 || book.name.length < 3) {
            return false;
        }
        else {
            return true;
        }
    }
    show(type,displayMessage) {
        let message = document.getElementById('message');
        let boldText;
        if(type==='success'){
            boldText='success';
        }
        else{
            boldText='error!'
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>${boldText}:</strong>${displayMessage}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
      setTimeout(function(){
          message.innerHTML = '';
      },2000)
    }
}

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);
function libraryFormSubmit(e) {
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;

    // fiction, programming and cooking
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    // let tableBody = localStorage.getItem('Book');
    // if (tableBody == null) {
    //     bookObj = [];
    // }
    // else {
    //     bookObj = JSON.parse(tableBody);
    // }
    // bookObj.push(libraryForm.value);
    // localStorage.setItem("notes", JSON.stringify(bookObj));
    // console.log(tableBody)

    let book = new Book(name, author, type);
    console.log(book);
    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success',' your book has bee succesfully added.');
    }
    else {
        display.show('danger',' sorry you cant add the book');

    }


    
    e.preventDefault();
    console.log('submited');

}