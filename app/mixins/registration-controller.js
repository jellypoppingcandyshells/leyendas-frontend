export default Ember.Mixin.create({
	actions: {
		signUp: function() {

            this.set('errors', null);
            this.set('message', 'Signing Up...');


			var params = { 
                user: this.getProperties('email', 
                                         'password', 
                                         'password_confirmation') };

			Ember.$.ajax({
                url: LeyendasFrontendENV.APP.HOST + '/' + LeyendasFrontendENV.APP.NAMESPACE + '/registrations',
                type : "POST",
                dataType : "json",
                crossDomain: true,
                data: params,
                context: this,
                success: function(data) {
                    this.set('btnMessage', 'Signed Up!');
                    this.set('btnPrimary', false);
                    this.set('btnSuccess', true);
                    this.set('btnDanger', false);

                    Ember.run.later(this, function() {
						this.transitionToRoute('login');
                    }, 250);
                },
                error: function(error) {
                    this.set('btnMessage', "Sign Up");
                    this.set('btnPrimary', true);
                    this.set('btnSuccess', false);
                    this.set('btnDanger', false);

                    this.setProperties({
                    	'email': null,
                    	'password': null,
                    	'password_confirmation': null
                    });

                    Ember.$('input[type="email"]').focus();

                    this.set('message', error.responseJSON.message);
                    this.set('errors', error.responseJSON.errors_full_messages);
                }
            });
		}
	}
});

