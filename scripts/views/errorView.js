'use strict';

var app = app || {};

(function (module) {
  const errorView = {};

  // TODO: Review error page initialization in HTML, classnames, and error message template
  errorView.initErrorPage = err => {
    app.showOnly('.error-view');
    $('#error-message').empty();
    $('#error-message').append(app.render('error-template', err));
  };

  // Assign errorView to app
  module.errorView = errorView;
})(app);