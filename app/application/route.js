import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  model() {
    return this.store.findAll("message");
  },
  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  }
});
