import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['small-hidden'],
  model: null,
  actions: {
    toggle: function() {
      this.sendAction("toggle");
    }
  }
});
