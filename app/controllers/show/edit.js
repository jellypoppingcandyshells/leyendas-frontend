export default Ember.ObjectController.extend({
	actions: {
		update: function(itinerary) {
			var controller = this;

			var itinerary = this.get('content');
			itinerary.set('name', this.get('name'));
			
			itinerary.save().then(function(){
				controller.transitionToRoute('show.index', itinerary);
			});
		}
	}
});