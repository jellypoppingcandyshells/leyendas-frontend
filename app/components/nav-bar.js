export default Ember.Component.extend({
	actions: {
		logout: function() {
			this.sendAction('logoutFromNavBar');
		}
	}
});