/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    environment: environment,
    baseURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      NAMESPACE: 'api/v1'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    //// ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    /// ENV.APP.LOG_VIEW_LOOKUPS = true;

    // ENV.APP.HOST = 'http://leyendas-backend.herokuapp.com'
    ENV.APP.HOST = 'http://localhost:3000'
  }

  if (environment === 'test') {

  }

  if (environment === 'production') {
      ENV.APP.HOST = 'http://leyendas-backend.herokuapp.com'
  }

  return ENV;
};
