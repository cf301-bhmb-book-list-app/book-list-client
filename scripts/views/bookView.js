'use strict';

var app = app || {};

(function (module) {
  const BookView = {};

  // TODO: method on Bookview to initIndexPage
  BookView.initIndexPage function () {
    app.showOnly('book-view');
    module.Book.all.map(book => $(`#book-list`).append(book.toHtml()));
  }

  module.BookView = BookView;

})(app);

// TODO: Use document ready in jQuery to fetch all after load
$(function() {
  app.Book.fetchAll(app.BookView);
})