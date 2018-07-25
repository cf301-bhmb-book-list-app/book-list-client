'use strict';

var app = app || {}
// -----------
// start of IIFE 
(function(module) {
Book.all [];

// TODO - define book object method - iterate over the the object keys to assign key pairs
function Book(dataObject) {
    Object.keys(dataObject).forEach(key => [key] = dataObject[key]);


}
// TODO define methos called toHtml- compiles handlebars- at id #book-list-template

Book.prototype.toHtml = function () {
    return app.render(#book-list-template, this)
}

// define statice method to loadALL 
Book.loadAll = rows => Book.all = rows.sort((a,b) => 
b.title -a.title).map(book => new Book (book));

// define static method to fetch all books from API 
Book.fetchAll = callback =>
    $.get(`${app.ENVIRONMENT.apiUrl}/api/v1/books`)
        .then(Book.loadAll)
        .then(callback)
        .catch(errorCallback)
        // need to add errorView

module.Book = Book;

// ------------------
//  end of IIFE
})(app);