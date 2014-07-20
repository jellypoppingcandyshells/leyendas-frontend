import AuthenticationControllerMixin from 'simple-auth/mixins/authentication-controller-mixin';

export default Ember.Controller.extend(AuthenticationControllerMixin, {
  authenticator: 'authenticator:custom',

	message: "Sign In",
	buttonSuccess: false,
	buttonError: false,

	clearForm: function() {
		this.set('email', null);
		this.set('password', null);
	},

	email: 'apuratepp@gmail.com',
	password: 'password',
		 
	actions: {
		authenticate: function() {
			var credentials = {user: this.getProperties('email', 'password')};
      		this._super(credentials);
    	},
	}
});