import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

window.ENV = window.ENV || {};
window.ENV['simple-auth'] = {
    authorizer: 'authorizer:custom',
    crossOriginWhiteList: ['http://pro.4d-life.com'],
    store: 'simple-auth-session-store:local-sorage'
};

export default Ember.Route.extend(ApplicationRouteMixin);