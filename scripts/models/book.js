'use strict';

let app = app || {};

(function (module) {
  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }

  function Book(rawBookObj) {
    Object.keys(rawBookObj).forEach(item => this[item] = rawBookObj[item]);
  }

  // Called in bookView.js -- taking in data and passing it through the render function (index.js)
  Book.prototype.toHtml = function() {
    return app.render('#book-list-template', this);
  };

  Book.all = [];
  Book.loadAll = rows => Book.all = rows.sort((a, b) => b.title - a.title)
    .map(book => new Book(book));

  // Connects the SERVER data to the CLIENT
  Book.fetchAll = callback =>
    $.get(`${app.ENVIRONMENT.apiUrl}/api/v1/books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);

  module.Book = Book;
})(app);