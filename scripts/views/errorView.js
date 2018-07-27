'use strict';

var app = app || {};

(function (module) {
  const errorView = {};

  // Set container to VISIBLE and append content to HTML via Handlebars template
  errorView.initErrorPage = err => {
    module.showOnly('.error-view');
    $('#error-message').empty();
    $('#error-message').append(module.render('#error-template', err));
  };

  // Append newly created object to 'app' as a property
  module.errorView = errorView;
})(app);