import AuthenticationControllerMixin from 'simple-auth/mixins/authentication-controller-mixin';

export default Ember.Controller.extend(AuthenticationControllerMixin, {
  authenticator: 'authenticator:custom',
	// email: 'apuratepp@gmail.com',
	// password: 'password',

	btnMessage: "Sign In",
	btnPrimary: true,
	btnSuccess: false,
	btnDanger: false,
	disabled: false,
	
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

			this.set('btnMessage', 'Signing In...');
			this.set('disabled', true);
			this._super(params);
  		}
	}
});