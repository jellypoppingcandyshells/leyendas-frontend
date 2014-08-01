import AuthenticationControllerMixin from 'simple-auth/mixins/authentication-controller-mixin';

export default Ember.Controller.extend(AuthenticationControllerMixin, {
  authenticator: 'authenticator:custom',
	email: null,
	password: null,

	btnMessage: "Sign In",
	btnPrimary: true,
	btnSuccess: false,
	btnDanger: false,
	disabled: false,
	errors: null,
	
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