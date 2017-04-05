import Ember from 'ember';

export default Ember.Component.extend({
  structure: Ember.inject.service(),
  actions: {
    setActive: function (index) {
      this.set("structure.active", index);
    }
  }
});
