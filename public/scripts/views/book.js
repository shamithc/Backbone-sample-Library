define(['backbone', 'jquery'], function(Backbone, $){
	var BookView = Backbone.View.extend({
		tagName: 'div',
		className: 'bookContainer',

		template: _.template($('#bookTemplate').html()),

		events: {
			'click .delete': 'removeBook'
		},

		render: function(){
			this.$el.html(this.template(this.model.toJSON()));
			
			return this;
		},

		removeBook: function(){
			this.model.destroy();
			this.remove();
			// this.$el.hide();
		}
	});

	return BookView;
})