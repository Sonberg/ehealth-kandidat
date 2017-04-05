import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    didClickSend: function () {
      this.sendAction("didClickSend");
    }
  }
});
