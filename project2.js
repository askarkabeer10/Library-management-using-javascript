console.log("this is project 2");

// constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// display constructor
function Display() {

}

// add methods to display prototype
Display.prototype.add = function (book) {
    console.log("adding");
    let tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
</tr>`
    tableBody.innerHTML += uiString;
}

// implementing the clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

// implementing the validate function
Display.prototype.validate = function (book) {
    if (book.name.length < 3 || book.name.length < 3) {
        return false;
    }
    else {
        return true;
    }
}

// error or success show
Display.prototype.show = function (type,displayMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>message:</strong>${displayMessage}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`
  setTimeout(function(){
      message.innerHTML = '';
  },2000)
}

// add submit event listner to libraryForm
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