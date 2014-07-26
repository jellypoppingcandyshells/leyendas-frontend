import RegistrationControllerMixin from '../mixins/registration-controller';

export default Ember.Controller.extend(RegistrationControllerMixin, {
	message: null,
	btnMessage: "Sign Up",
	btnDefault: false,
	btnPrimary: true,
	btnSuccess: false,
	btnError: false,
	btnWarning: false,
	disabled: false,
	hasError: false,

	// email: "apuratepp+" + Math.floor((Math.random() * 10) + 1) + "@gmail.com",
	// email: "apuratepp+7@gmail.com",
	// password: "password1",
	// password_confirmation: "password2",

	actions: {
		// validate: function() {
		// 	var passwords = this.getProperties('password', 'password_confirmation');
		// 	var controller = this;
		// 	if(passwords.password === passwords.password_confirmation) {
		// 		controller.set('message', 'Sing Up');
		// 		controller.set('btnDefault', false);
		// 		controller.set('btnWarning', false);
		// 		controller.set('btnSuccess', true);
		// 		controller.set('btnError', false);
		// 		controller.set('disabled', false);
		// 		controller.set('hasError', false);
		// 	}else{
		// 		controller.set('message', 'Passwords do not match');
		// 		controller.set('btnDefault', false);
		// 		controller.set('btnWarning', true);
		// 		controller.set('btnSuccess', false);
		// 		controller.set('btnError', false);
		// 		controller.set('disabled', true);
		// 		controller.set('hasError', true);
		// 	};
		// },
	}
});