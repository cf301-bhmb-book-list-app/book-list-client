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





// ------------------
//  end of IIFE
})(app);