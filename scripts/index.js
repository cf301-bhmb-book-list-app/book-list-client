'use strict';

let app = app || {};

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

  // Hide/show book
  // TODO: WHY IS THIS HERE???
  module.showOnly = (selector) => {
    $('.container').hide();
    $(selector).show();
  };

  // Render the Handlebars Template (defined in bookView.js)
  module.render = (templateId, data) => {
    if(!module.taskTemplate) {
      module.taskTemplate = Handlebars.compile($(`#${templateId}`).text());
    }
    return module.taskTemplate(data);
  };

})(app);