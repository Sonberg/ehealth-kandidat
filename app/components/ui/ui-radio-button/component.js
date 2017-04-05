import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    onChange: function(value) {
      this.sendAction('onChange', this.name, value);
    }
  }
});
