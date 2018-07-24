'use strict';
(function(module) {
  function Book(rawBookObj) {
    Object.keys(rawBookObj).forEach(key => this[item] = rawBookObj[item]);
  }

  Book.prototype.toHtml = function() {
    return app.render('book-list-template');
  }
  module.Book = Book;
})(app);

app.Book