export default Ember.Controller.extend({
	email: null,
	password: null,

	message: "Sign In",
	buttonSuccess: false,
	buttonError: false,

	clearForm: function() {
		this.set('email', null);
		this.set('password', null);
	},
		 
	actions: {
		signIn: function(){

			this.set('message', 'Sigin in...');

			var credentials = {
				user:	{
					email: this.get('email'),
			 		password: this.get('password')
				}
			};

			$.ajax({
				url: "http://leyendas-backend.herokuapp.com/api/v1/sessions",
				// url: "http://localhost:3000/api/v1/sessions",
				crossDomain: true,
				dataType: 'json',
				type: 'POST',
				context: this,
				data: credentials
			})
			.success(function(data) {
				this.set('message', 'Signed In!');
				this.set('buttonError', false);
				this.set('buttonSuccess', true);
				this.clearForm();
			})
			.error(function(jqXHR, textStatus, errorThrown){
				this.set('message', errorThrown);
				this.set('buttonError', true);
				this.set('buttonSuccess', false);
				this.clearForm();
			})
			.done(function() {
				// debugger;
				this.clearForm();
			});
		}
	}
});

