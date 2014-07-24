export default DS.RESTAdapter.extend({
	host: LeyendasFrontendENV.APP.HOST,
	namespace: LeyendasFrontendENV.APP.NAMESPACE,
	headers: function() {
    return {
      "api_key": "leyendas-web-app",
      "Authorization": 'Token token=' + localStorage["ember_simple_auth:authentication_token"]
    };
  }.property()
});
