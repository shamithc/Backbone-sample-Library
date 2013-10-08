define(['backbone'], function(Backbone){
	var Book = Backbone.Model.extend({
		defaults: {
			title: "",
			coverImage: "assets/img/placeholder.png",
			author: "",
			releaseDate: "",
			keywords: ""
		}
	});

	return Book
});