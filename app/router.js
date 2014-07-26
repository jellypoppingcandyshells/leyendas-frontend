import Ember from 'ember';

var Router = Ember.Router.extend({
	location: LeyendasFrontendENV.locationType
});

Router.map(function() {
	this.route('login');
	this.route('sign-up');
	this.resource('home', function() {
		this.route('index');
		this.resource('itineraries', function() {
			this.route('new');
			this.resource('show', {path: '/:itinerary_id'}, function() {
				this.route('edit');
			});
		});
		this.resource('checkpoints');
	});
});

export default Router;
