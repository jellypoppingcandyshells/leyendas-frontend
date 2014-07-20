import Ember from 'ember';

var Router = Ember.Router.extend({
  location: LeyendasFrontendENV.locationType
});

Router.map(function() {
	this.route('login');
	this.resource('home', function() {
		this.route('index');
		this.resource('checkpoints');
	});
});

export default Router;
