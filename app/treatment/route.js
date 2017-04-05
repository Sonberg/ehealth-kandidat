import Ember from 'ember';

export default Ember.Route.extend({
  structure: Ember.inject.service(),
  afterModel: function(transition) {
    if (transition.targetName == 'treatment.index') {
      this.transitionTo("edit");
    }
  },
  beforeModel: function(transition) {
    if (transition.targetName == 'treatment.index') {
      this.transitionTo("edit");
    }
  },
  actions: {
    willTransition: function(transition) {
      if (transition.targetName == 'treatment.index') {
        this.transitionTo("edit");
      } else {
        this.set("structure.open", false);
      }
      this.set("structure.active", null);
    }
  }
});
