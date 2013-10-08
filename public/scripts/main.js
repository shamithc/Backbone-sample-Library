require.config({
	// baseUrl: 'scripts/vendor',
	paths:{
		'jquery': 'vendor/jquery/jquery',
		'underscore': 'vendor/underscore-amd/underscore',
		'backbone': 'vendor/backbone-amd/backbone',
		'backbone-localstorage': 'vendor/backbone-amd/backbone.localStorage',
		'jquery-date-format': 'vendor/jquery/jquery.dateFormat-1.0'
	}
});

define(['collections/library', 'models/book', 'views/library'], function(Library, Book, LibraryView){
	book1 = new Book({ title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', releaseDate: '2008', keywords: 'JavaScript Programming' });
	book2 = new Book({ title: 'The Little Book on CoffeeScript', author: 'Alex MacCaw', releaseDate: '2012', keywords: 'CoffeeScript Programming' });
	book3 = new Book({ title: 'The Little Book on CoffeeScript-1', author: 'Alex MacCaw', releaseDate: '2012', keywords: 'CoffeeScript Programming' });
	book4 = new Book({ title: 'The Little Book on CoffeeScrip', author: 'Alex MacCaw', releaseDate: '2012', keywords: 'CoffeeScript Programming' });
    
    library = new Library
    // library.add(book1);
    // library.add(book2);
    // library.add(book3);
    // library.add(book4);

    // console.log(library.toJSON());

    var libraryview = new LibraryView({collection: library});
    libraryview.render();
});