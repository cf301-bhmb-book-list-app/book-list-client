'use strict';

var app = app || {}

(function(module) {
  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }

  function Book(rawBookObj) {
    Object.keys(rawBookObj).forEach(key => this[key] = rawBookObj[key]);
  }

  Book.prototype.toHtml = function() {
    return app.render('#book-list-template',this);
  };

  Book.all = [];
  Book.loadAll = rows => Book.all = rows.sort((a, b) => ) 

});