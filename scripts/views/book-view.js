'use strict';

var app = app || {}; 
// -----------
// start of IIFE 
(function (module){

    // todo DEFINE VARIABLE BOOKVIEW
    const BookView = {}; 
    // TODO method on BookView initIndexPage- hide container- shows class "book-view" maps book-all
    // append to #book-list
    BookView.initIndexPage function () {
        app.showOnly('book-view');
        module.Book.all.map(book => $(`#book-list`)append(book.toHtml()));
    }

    module.BookView = BookView;





// ------------------
//  end of IIFE
})(app);

// todo use Document ready in JQuery - to fetch all after loading 
$(function(){
    app.Book.fetchAll(app.BookView);

})