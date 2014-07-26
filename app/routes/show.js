export default Ember.Route.extend({
	model: function(params) {
		return this.store.find('itinerary', params.itinerary_id);
	}
});