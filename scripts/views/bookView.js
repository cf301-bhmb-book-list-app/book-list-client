'use strict';

var app = app || {};

(function (module) {
  const bookView = {};

  // Set container to VISIBLE and append content to HTML via Handlebars template
  bookView.initIndexPage = function () {
    module.showOnly('.book-view');
    module.Book.all.map(book => $(`#book`).append(book.toHtml()));
  };

  // Append newly created object to 'app' as a property
  module.bookView = bookView;

})(app);

// EXECUTION CODE
$(function() {
  app.Book.fetchAll(app.bookView.initIndexPage);
});