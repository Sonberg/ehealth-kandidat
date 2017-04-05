import Ember from 'ember';

export default Ember.Component.extend({
  structure: Ember.inject.service(),
  classNameBindings: ['open'],
  actions: {
    toggleMoment: function () {
      this.toggleProperty('momentOpen');
    },
    toggleTimeline: function () {
      this.toggleProperty("structure.open");
    },
    setActive: function (index) {
      this.sendAction("setActive", index);
    }
  }
});
