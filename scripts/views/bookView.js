'use strict';

var app = app || {};

(function (module) {
  const bookView = {};

  // Append content to HTML via Handlebars template
  bookView.initIndexPage = function () {
    app.showOnly('#book');
    module.Book.all.map(book => $(`#book`).append(book.toHtml()));
  };

  module.bookView = bookView;

})(app);

// This is a document-ready function 
$(function() {
  app.Book.fetchAll(app.bookView.initIndexPage);
})