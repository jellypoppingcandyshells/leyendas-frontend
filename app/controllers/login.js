import AuthenticationControllerMixin from 'simple-auth/mixins/authentication-controller-mixin';

export default Ember.Controller.extend(AuthenticationControllerMixin, {
  authenticator: 'authenticator:custom',
	email: 'apuratepp@gmail.com',
	password: 'password',

	message: "Sign In",
	buttonSuccess: false,
	buttonError: false,
	
	clearForm: function() {
		this.set('email', null);
		this.set('password', null);
	}, 
	actions: {
		authenticate: function() {
			var params = {
				user: this.getProperties('email', 'password'),
				login_controller: this
			};
			this._super(params);
  		},
	}
});