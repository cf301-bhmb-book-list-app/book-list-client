'use strict';

// Routes for book list app
page('/',homeView.init);
page('/about',aboutView.init);
page('/contact',contactView.init);
page('/contact/:name',contactView.init);

// Start the page
page();