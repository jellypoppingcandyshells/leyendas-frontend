export default Ember.Controller.extend({
	actions: {
		create: function() {
			var controller = this;
			var checkpoint = this.store.createRecord('checkpoint', this.getProperties('name'))
			checkpoint.save().then(function(checkpoint) {
				controller.transitionToRoute('show', checkpoint);
			});
		}
	}
});