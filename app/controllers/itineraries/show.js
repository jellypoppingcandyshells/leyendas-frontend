export default Ember.ObjectController.extend({
	actions: {
		destroy: function(itinerary) {
			var controller = this;
			if(confirm('Are you sure?')){
				itinerary.destroyRecord();
				this.transitionToRoute('itineraries.index');
			}
		}
	}
});