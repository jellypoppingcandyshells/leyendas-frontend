export default Ember.Route.extend({
	model: function(params) {
		return this.store.find('checkpoint', params.checkpoint_id);
	}
});