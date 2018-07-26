'use strict';

var app = app || {};

(function (module) {
  const bookView = {};

  // Append content to HTML via Handlebars template
  bookView.initIndexPage = function () {
    module.showOnly('#book');
    module.Book.all.map(book => $(`#book`).append(book.toHtml()));
  };

  module.bookView = bookView;

})(app);

// EXECUTION CODE
$(function() {
  app.Book.fetchAll(app.bookView.initIndexPage);
});