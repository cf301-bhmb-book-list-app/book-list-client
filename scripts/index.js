'use strict';

var app = app || {};

(function (module) {
  // Check if URL is production or localhost
  module.isProduction = /^(?!localhost\127)/.test(window.location.hostname);

  module.showOnly = (selector) => {
    $('.container').hide();
    $(selector).show();
  };

  module.render = (templateId, data) => {
    if(!module.taskTemplate) {
      module.taskTemplate = handlebars.compile($(`#${templateId}.text`));
    }
    return module.taskTemplate(data);
  };

})(app);