import BaseAuthenticator from 'simple-auth/authenticators/base';
import BaseAuthorizer from 'simple-auth/authorizers/base';


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
    authenticate: function(credentials) {
        return new Ember.RSVP.Promise(function(resolve, reject){
            Ember.$.ajax({
                url: LeyendasFrontendENV.APP.HOST + '/' + LeyendasFrontendENV.APP.NAMESPACE + '/sessions',
                type : "POST",
                dataType : "json",
                crossDomain: true,
                data: credentials,
                success: function(data) {
                    Ember.run(function() {
                        resolve({authentication_token: data.authentication_token});
                    });
                },
                error: function(error) {
                    reject(error.responseJSON.error.message);
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