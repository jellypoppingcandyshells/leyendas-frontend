import Ember from 'ember';

var Router = Ember.Router.extend({
	location: LeyendasFrontendENV.locationType
});

Router.map(function() {
	this.route('login');
	this.route('sign-up');
	this.resource('home', function() {
		this.route('index');

		// itineraries
		this.resource('itineraries', function() {
			this.route('new');
			this.route('show', {path: '/:itinerary_id'});
			this.route('edit', {path: '/:itinerary_id/edit'});
		});

		// checkpoints
		this.resource('checkpoints', function() {
			this.route('new');
			this.route('show', {path: '/:checkpoint_id'});
			this.route('edit', {path: '/:checkpoint_id/edit'});
		});

	});
});

export default Router;
