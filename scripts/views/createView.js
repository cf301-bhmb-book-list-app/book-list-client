'use strict';

var app = app || {};

(function (module) {
  const createView = {};

  // Sets the <section> container to VISIBLE and appends any content to HTML via Handlebars template
  createView.initIndexPage = function () {
    module.showOnly('.create-view');
  };

  // Append newly created object to 'app' as a property
  module.createView = createView;

})(app);

// EXECUTION CODE
$(function() {
  app.Book.fetchAll(app.bookView.initIndexPage);
});