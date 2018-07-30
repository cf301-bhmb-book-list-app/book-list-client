'use strict';

var app = app || {};

(function (module) {
  // Set Production and LocalHost SERVER urls
  let prodUrl = 'https://bh-mb-book-list-server.herokuapp.com/';
  let devUrl = 'http://localhost:3000';

  // Check if current URL is production or dev
  module.isProduction = /^(?!localhost|127)/.test(window.location.hostname);

  // Set the server URL to the "app" environment
  module.ENVIRONMENT = {
    apiUrl: module.isProduction ? prodUrl : devUrl
  };

  // SPA hide/show selector
  module.showOnly = (selector) => {
    $('.display').hide();
    $(selector).show();
  };

  // Render the Handlebars Template (defined in bookView.js)
  module.render = (templateId, data) => {
    if(!module.taskTemplate) {
      module.taskTemplate = Handlebars.compile($(`#${templateId}`).text());
    }
    return module.taskTemplate(data);
  };

  // Dropdown Menu Animation
  $('.icon-menu').on('click', () => {
    $('.nav').slideToggle('fast');
  })
})(app);