import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    didChangeCheckbox: function (value) {
      this.sendAction("didChangeCheckbox", value);
    }
  }
});
