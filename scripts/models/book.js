'use strict';

var app = app || {};

(function (module) {
  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }

  // Defines the 'Book' object
  function Book(rawBookObj) {
    Object.keys(rawBookObj).forEach(item => this[item] = rawBookObj[item]);
  }

  // Defines a prototype method for the 'Book' object that renders the Handlebars template
  Book.prototype.toHtml = function() {
    return app.render('book-template', this);
  };

  // Create an empty Books array to store all book objects
  Book.all = [];

  // Loads references to every 'Book' object into Book.all
  Book.loadAll = rows => Book.all = rows.sort((a, b) => b.title - a.title)
    .map(book => new Book(book));

  // Connects the SERVER data to the CLIENT (i.e. "data" param)
  Book.fetchAll = callback =>
    $.get(`${app.ENVIRONMENT.apiUrl}/api/v1/books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);

  module.Book = Book;
})(app);