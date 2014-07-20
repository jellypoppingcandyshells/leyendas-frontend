import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	actions: {
		logout: function() {
			this.send('invalidateSession');
		}
	}
});