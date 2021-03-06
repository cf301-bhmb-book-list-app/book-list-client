'use strict';

var app = app || {};

(function (module) {
  const bookView = {};

  // Sets the <section> container to VISIBLE and appends any content to HTML via Handlebars template
  bookView.initIndexPage = function () {
    module.showOnly('.book-view');
    module.Book.all.map(book => $('#bookDisplay').append(book.toHtml()));
  };

  // Append newly created object to 'app' as a property
  module.bookView = bookView;

})(app);

// EXECUTION CODE
$(function() {
  app.Book.fetchAll(app.bookView.initIndexPage);
});