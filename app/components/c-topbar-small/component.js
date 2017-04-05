import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['small-visible', 'px1', 'flex', 'flex-justify', 'flex-center'],
  actions: {
    toggleMenu: function () {
      this.sendAction('toggleMenu');
    },
    toggleChat: function () {
      this.sendAction('toggleChat');
    }
  }
});
