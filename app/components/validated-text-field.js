export default Ember.TextField.extend({
	focusOut: function() {
		this.sendAction('validate');
	}
});