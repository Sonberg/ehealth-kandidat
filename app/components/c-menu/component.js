import Ember from 'ember';

export default Ember.Component.extend({
  open: false,
  actions: {
    toggle: function () {
      this.toggleProperty("open");
    }
  }
});
