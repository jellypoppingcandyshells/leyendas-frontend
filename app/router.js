import Ember from 'ember';

var Router = Ember.Router.extend({
  location: LeyendasFrontendENV.locationType
});

Router.map(function() {
	this.route('sign-in');
});

export default Router;
