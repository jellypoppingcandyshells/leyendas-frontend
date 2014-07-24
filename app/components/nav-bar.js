export default Ember.Component.extend({
	actions: {
		logout: function() {
			console.error('nav-bar component logout')
			this.sendAction('logoutFromNavBar');
		}
	}
});