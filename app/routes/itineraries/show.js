export default Ember.Route.extend({
	model: function(params) {
		debugger;
		return this.store.find('itinerary', params.itinerary_id);
	}
});