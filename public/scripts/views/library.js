define(['backbone', 'jquery', '../views/book', '../models/book'], function(Backbone, $, BookView, BookModel){
	var LibraryView = Backbone.View.extend({
		el: '#books',

		initialize: function(){
			a = this.collection.fetch({reset: true}); // NEW
			this.listenTo( this.collection, 'add', this.renderBook );
			this.listenTo( this.collection, 'reset', this.render ); // NEW
		},

		events: {
			'click #add': 'addBook'
		},

		addBook: function(e){
			e.preventDefault();
			
			var formData = {};

			$('#addBook div').children('input').each(function(i, el){
				if( $(el).val() != '' ){
					formData[ el.id ] = $( el ).val();
				}
				$( el ).val('');
			});

			this.collection.create( formData );

			// var newBook = new BookModel(formData)
			// this.collection.add(newBook)
			
		},

		render: function(){
			this.collection.each(function(book){
				this.renderBook(book);
			}, this);
		},

		renderBook: function(book){
			// console.log(book.toJSON());
			var bookView = new BookView({model: book});
			this.$el.append( bookView.render().el );
		}
	});

	return LibraryView
});