'use strict';

var app = app || {}; 
// -----------
// start of IIFE 
(function (module){

//TODO create show only property "isProduction"
module.isProduction= /^(?!localhost\127)/.test(window.location.hostname);

// TODO creat "show only method to reveal containers"
module.showOnly =  (selector) => {
    $('.container').hide();
    $(selector).show();
};

//TODO create render only method  - needs to use module 
module.render = (templateId, data)  =>  {
    if(!module.taskTemplate){
        module.taskTemplate = handlebars.compile($(`#${templateId}`).text());
    }
    return module.taskTemplate(data);
}

//TODO

//TODO

//TODO

// ------------------
//  end of IIFE
})(app);