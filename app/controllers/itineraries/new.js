export default Ember.Controller.extend({
	actions: {
		create: function() {
			var controller = this;
			var itinerary = this.store.createRecord('itinerary', this.getProperties('name'))
			itinerary.save().then(function(itinerary) {
				controller.transitionToRoute('show', itinerary);
			});
		}
	}
});