import BaseAuthenticator from 'simple-auth/authenticators/base';
// import BaseAuthorizer from 'simple-auth/authorizers/base';


var CustomAuthenticator = BaseAuthenticator.extend({
    restore: function(data) {
        return new Ember.RSVP.Promise(function(resolve, reject){
            if (!Ember.isEmpty(data.authentication_token)) {
                resolve(data);
            } else {
                reject();
            }
        });
    },
    authenticate: function(params) {
        return new Ember.RSVP.Promise(function(resolve, reject){
            Ember.$.ajax({
                url: LeyendasFrontendENV.APP.HOST + '/' + LeyendasFrontendENV.APP.NAMESPACE + '/sessions',
                type : "POST",
                dataType : "json",
                crossDomain: true,
                data: {user: params.user},
                context: params.login_controller,
                success: function(data) {
                    this.set('btnMessage', 'Signed In!');
                    this.set('btnSuccess', true);
                    this.set('btnDanger', false);
                    // this.set('disabled', false);
                    Ember.run.later(this, function() {
                        resolve({authentication_token: data.authentication_token});
                    }, 250);
                },
                error: function(error) {
                    this.set('btnMessage', error.responseJSON.message);
                    this.set('btnSuccess', false);
                    this.set('btnDanger', true);
                    this.set('disabled', false);
                    reject(error.responseJSON.message);
                }
            });
        });
    },
    invalidate: function() {
        return new Ember.RSVP.Promise(function(resolve, reject){
            resolve();
        });
    }
});

// var CustomAuthorizer = BaseAuthorizer.extend({
//     authorize: function(jqXHR) {
//         if(this.get('session.isAuthenticated') && !Ember.isEmpty(this.get('session.token'))) {
//             jqXHR.setRequestHeader('authToken', this.get('session.token'));
//         }
//     }
// });

export default {
    name: 'authentication',
    before: 'simple-auth',
    initialize: function(container, application) {
        container.register('authenticator:custom', CustomAuthenticator);
        // container.register('authorizer:custom', CustomAuthorizer);
    }
};